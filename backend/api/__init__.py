from __future__ import annotations
from typing import *
from flask import Flask

if TYPE_CHECKING:
    from _typeshed.wsgi import WSGIApplication


def create_app() -> WSGIApplication:
    app = Flask(__name__)
    return app
