"""
api package
- provides the API endpoints for consuming and producing
  REST requests and responses
"""

from __future__ import annotations
from typing import *

import os
from dotenv import load_dotenv
from pathlib import Path
from datetime import datetime, timedelta
from functools import wraps
from flask import Flask, Blueprint, jsonify, request, current_app
from enum import Enum
import jwt

from .config import DevConfig, ProdConfig, BASE_DIR
from .admin import init_admin

if TYPE_CHECKING:
    from flask import Config


load_dotenv(os.path.join(BASE_DIR, '../../.env'))


class EnvMode(Enum):
    DEVELOPMENT = 0
    PRODUCTION = 1


def create_app(env: EnvMode = EnvMode.DEVELOPMENT) -> Flask:

    app = Flask(__name__, instance_relative_config = True)
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    match env:
        case EnvMode.DEVELOPMENT:
            app.config.from_object(config.DevConfig)
        case EnvMode.PRODUCTION:
            app.config.from_object(config.ProdConfig)

    URI = app.config['SQLALCHEMY_DATABASE_URI']
    if URI.startswith("postgres://"):
        app.config['SQLALCHEMY_DATABASE_URI'] = URI.replace("postgres://", "postgresql://", 1)

    Path(app.instance_path).mkdir(exist_ok = True)

    # Initialize the Admin application
    init_admin(app)

    @app.route('/register', methods=('POST', 'GET'))
    def register():
        return "Hello world!"

    return app
