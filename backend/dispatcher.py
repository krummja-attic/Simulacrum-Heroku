from __future__ import annotations
from typing import *

from os import path
from werkzeug.exceptions import NotFound
from werkzeug.middleware.shared_data import SharedDataMiddleware
from werkzeug.middleware.dispatcher import DispatcherMiddleware

from api import create_app


ROOT_DIR = path.dirname(path.dirname(__file__))
FRONTEND_DIR = path.join(ROOT_DIR, '/frontend/')

frontend = SharedDataMiddleware(NotFound(), {
    '/': path.join(FRONTEND_DIR, '/index.html'),
})

app = DispatcherMiddleware(frontend, {
    '/api': create_app()
})
