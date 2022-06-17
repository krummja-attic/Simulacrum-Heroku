from __future__ import annotations

from werkzeug.exceptions import NotFound
from werkzeug.middleware.shared_data import SharedDataMiddleware
from werkzeug.middleware.dispatcher import DispatcherMiddleware


app = SharedDataMiddleware(NotFound(), {
    '/': '../dist/index.html'
})

app = DispatcherMiddleware(app)
