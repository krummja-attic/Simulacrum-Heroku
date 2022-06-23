---
title: Building a State-Based Game Loop in Python
date: 2020-09-29T12:00:00+00:00
---

[[toc]]

The core of the Simulacra engine is a state-based game loop, itself an extension of the `EventDispatch` class provided by the TCOD library. To get started, we want to define a base `State` class, from which we will extend all of the game's relevant states.

```python
from __future__ import annotations
from typing import Generic, TypeVar, TYPE_CHECKING

import tcod.event

if TYPE_CHECKING:
    import tcod.console as Console


T = TypeVar("T")


class State(Generic[T], tcod.event.EventDispatch[T]):

    def loop(self: State[T]) -> Optional[T]:
        while True:
            pass

    def ev_keydown(self: State[T], event: tcod.event.KeyDown) -> Optional[T]:
        pass
```

Let's unpack what's happening here. I'll assume little to no familiarity with using type hinting in Python, just for the sake of completeness. First we import the `annotations` feature from Python's `__future__` module. This feature was introduced in [PEP 563](https://www.python.org/dev/peps/pep-0563/) to permit forward reference to type annotations (e.g. if I want to annotate a variable `some_variable: MyType` before `MyType` is actually defined, which is often the case).

Once we have the annotations feature, we'll also want to import a number of type aliases from the `typing` module. I'll discuss each of these as we run into it in the code, with the exception of the final one: `typing.TYPE_CHECKING`. This handy constant is assumed to be `True` by 3rd party type checkers, but `False` at runtime; the practical effect is that we can import our local modules for typing purposes without running into annoying circular dependency errors at runtime.

Alright, so let's get to the heart of things.

```python
T = TypeVar("T")


class State(Generic[T], tcod.event.EventDispatch[T]):
    # ...
```

Our base `State` class inherits from the `Generic` base class and the `EventDispatch` class from the TCOD library's `event` module. We specified a type variable `T`, which allows us to abstract away from the specific type we expect the `State` object to deal with. One way to think of this is that we are specifying a 'domain' that the `State` object will be responsible for, and we can leverage this type variable to specify operations that work with data in this domain. This will make more sense in a moment when we define the concrete class that will replace the type variable in the actual implementation.

The `tcod.event.EventDispatch` class is a basic... er, event dispatcher. Specifically, it pays attention to various of its own methods (the ones defined with the prefix `ev_`) and handles the dispatching of input events to these methods. Our `State` object, in effect, is built on top of a very useful set of input event handlers that we can begin to work into the foundation of the game's I/O. With that in mind, we can go ahead and modify the `State.loop()` method we defined in the abstract above.

```python
    def loop(self: State[T]) -> Optional[T]:
        while True:
            for event in tcod.event.wait():
                # ...
```

Note firstly the annotation we've given for the return type of the loop. The type `Optional[T]` means that sometimes we'll get a return type of `None`, but other times we'll get whatever the type `T` is from the domain our `State` is responsible for. The `tcod.event.wait()` method will sit around twiddling its thumbs until input events start pouring in, at which point it will return an iterator containing all pending events. The details of this aren't too important right now; the thing we'll want to use for our purposes is the `event` variable that ranges over the elements of this returned iterator. We want to toss each `event` to the dispatcher, and what we'll get back is either `None` or some valid value that we can proceed with.

We want to leverage this behavior to handle what happens in each case. If we return `None`, we want this to break our loop. This is possible because `None` is falsy, and therefore allows us to break our `while` loop. If we return anything else, we want to treat that as a valid return from our event dispatch and do some more work with it. Above our `State` class, let's add a new class that will extend the built-in `Exception` class:

```python
class StateBreak(Exception):
    """Breaks out of the active State.loop and forces it to return None."""
```

We can throw this into our loop as a `try ... except` statement to neatly handle our two possibilities.

```python
                try:
                    value = self.dispatch(event)
                except StateBreak:
                    return None
```

All that's left now is to handle what happens if `value` is not `None`, and so, `if value is not None:`

```python
    def loop(self: State[T]) -> Optional[T]:
        while True:
            for event in tcod.event.wait():
                try:
                    value = self.dispatch(event)
                except StateBreak:
                    return None
                if value is not None:
                    return value
```

We'll return `value`. But what exactly is `value`? It can be anything we want, really - but the easiest thing to make it is something that we can use to link our keyboard events to functions that will in turn send out things of type `T`. By itself, this isn't going to do a whole lot, of course. We can go ahead and provide an implementation for the `EventDispatch` class's `ev_keydown` method, which will allow us to subscribe to any incoming key press events.

```python
    def ev_keydown(self: State[T], event: tcod.event.KeyDown) -> Optional[T]:
        pass
```

Let's get used to thinking about these in terms of their types. The method `State.ev_keydown()` is looking to take in some event of type `tcod.event.KeyDown` and will return either `None`, in which case nothing at all happens, or `T`. Because we only actually return `None` in the case that we explicitly tell it to, the fact that we might sometimes return `None` is not an issue.

Now, there are a ton of ways this could be implemented, but the way that I think is most flexible is to use a version of the Command pattern (on which read this wonderful section of [Game Programing Patterns](http://gameprogrammingpatterns.com/command.html)). In this implementation, we're going to create a tight linkage between the names of the methods and the symbols that get called when we perform certain commands, effectively allowing us to modify our command structure by (1) adding a new entry to the list of possible commands, and (2) creating a new command method. Here's an abstract of what I mean. First, add `Callable` and `Dict` to our import from `typing`:

```python
from __future__ import annotations
from typing import Callable, Dict, Generic, TypeVar, TYPE_CHECKING
```

And this is how the structure of `State` will end up looking:

```python
class State(Generic[T], tcod.event.EventDispatch[T]):

    COMMANDS: Dict[int, str] = {
        tcod.event.K_RETURN: "confirm",
        tcod.event.K_ESCAPE: "escape",
    }

    # ...

    def ev_keydown(self: State[T], event: tcod.event.KeyDown) -> Optional[T]:
        func: Callable[[], Optional[T]]
        if event.sym in self.COMMANDS:
            func = getattr(self, f"cmd_{self.COMMAND[event.sym]}")
            return func()
        return None

    def cmd_confirm(self: State[T]) -> Optional[T]:
        pass

    def cmd_escape(self: State[T]) -> Optional[T]:
        pass
```

Alright, so some explanation is in order. Inside of our `State` object, we're defining a dictionary that maps the `int` type keycodes to strings. These strings are the names of specific commands: notice that for `tcod.event.K_RETURN: "confirm"` we have a corresponding method `State.cmd_confirm(...)` which returns `None` or `T`. The way we handle this mapping in terms of the actual event dispatcher is to read the `sym` attribute of the `tcod.event.KeyDown` event, which is the integer keycode. For example, if I press `Enter` on my keyboard, `tcod.event.KeyDown.sym` will be `13`. We've defined a variable `func` that is of type `Callable[[], Optional[T]]`, which is to say a function that takes in no arguments and returns something of type `Optional[T]`.

When the dispatcher returns `13` for `event.sym`, we plug that into the f-string that is fed into `getattr`, ultimately assigned to `func`. What we get back is a Python symbol `State.cmd_` + whatever `13` maps to in our dictionary, in this case `confirm`. The end result is that we've generated a symbol `State.cmd_confirm`. We then return a call of that function: `return func()`, or `return State.cmd_confirm()`.

We can then put concrete statements into the implementation of this method, which is especially useful since we'll be overriding this method classes that inherit from `State`. And with that, we have the core of our event-based state engine.
