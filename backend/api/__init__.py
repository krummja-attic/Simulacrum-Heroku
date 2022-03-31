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

PROD_DATABASE_URI = os.environ['DATABASE_URI']
DEV_DATABASE_URI = os.environ['DEV_DATABASE_URI']

for URI in [PROD_DATABASE_URI, DEV_DATABASE_URI]:
    if URI.startswith("postgres://"):
        URI = URI.replace("postgres://", "postgresql://", 1)


class EnvMode(Enum):
    DEVELOPMENT = 0
    PRODUCTION = 1


def create_app(env: EnvMode = EnvMode.DEVELOPMENT) -> Flask:

    app = Flask(__name__, instance_relative_config = True)
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    # TODO Is this how I want to approach this?
    match env:
        case EnvMode.DEVELOPMENT:
            app.config.from_object(config.DevConfig)
            app.config['SQLALCHEMY_DATABASE_URI'] = DEV_DATABASE_URI
        case EnvMode.PRODUCTION:
            app.config.from_object(config.ProdConfig)
            app.config['SQLALCHEMY_DATABASE_URI'] = PROD_DATABASE_URI

    Path(app.instance_path).mkdir(exist_ok = True)

    # Initialize the Admin application
    init_admin(app)

    # @app.route('/register/', methods=('POST',))
    # def register():
    #     data = request.get_json()

    return app
