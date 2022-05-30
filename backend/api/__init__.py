"""
api package
- provides the API endpoints for consuming and producing
  REST requests and responses
"""

from __future__ import annotations
from typing import *

import os
from dotenv import load_dotenv
from flask import Flask, render_template
from enum import Enum

from api.config import BASE_DIR
from api.admin import init_admin
from api.model import DB


load_dotenv(os.path.join(BASE_DIR, '../../.env'))


class EnvMode(Enum):
    DEVELOPMENT = 0
    PRODUCTION = 1


def create_app(env_mode: EnvMode = EnvMode.DEVELOPMENT) -> Flask:
    app = Flask(__name__)

    if env_mode == EnvMode.DEVELOPMENT:
        from .config import DevConfig
        app.config.from_object(DevConfig())
    elif env_mode == EnvMode.PRODUCTION:
        from .config import ProdConfig
        app.config.from_object(ProdConfig())

    @app.route('/')
    def index():
        return render_template('index.html')

    init_admin(app)

    return app
