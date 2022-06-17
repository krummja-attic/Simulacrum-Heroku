from __future__ import annotations

from werkzeug.exceptions import NotFound
from werkzeug.middleware.shared_data import SharedDataMiddleware
from werkzeug.middleware.dispatcher import DispatcherMiddleware

from api import create_app


frontend = SharedDataMiddleware(NotFound(), {
    '/': '../dist/index.html'
})

app = DispatcherMiddleware(frontend, {
    '/api': create_app()
})
