"""
api package
- provides the API endpoints for consuming and producing
  REST requests and responses
"""

from __future__ import annotations
from typing import *

import os
from dotenv import load_dotenv
from flask import Flask, redirect
from enum import Enum

from cms.config import BASE_DIR
from cms.admin import init_admin


load_dotenv(os.path.join(BASE_DIR, '../../.env'))


class EnvMode(Enum):
    DEVELOPMENT = 0
    PRODUCTION = 1


env_mode = EnvMode.DEVELOPMENT
# env_mode = EnvMode.PRODUCTION

def create_app(env_mode: EnvMode = env_mode) -> Flask:
    app = Flask(__name__)

    if env_mode == EnvMode.DEVELOPMENT:
        from .config import DevConfig
        app.config.from_object(DevConfig())
        
        from flask_cors import CORS
        CORS(app, resources={r'/*': {'origins': '*'}})
    elif env_mode == EnvMode.PRODUCTION:
        from .config import ProdConfig
        app.config.from_object(ProdConfig())

    @app.route('/')
    def index():
        return redirect('/cms/admin')

    init_admin(app)

    return app
