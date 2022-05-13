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
from flask import Flask
from enum import Enum

from .config import BASE_DIR


load_dotenv(os.path.join(BASE_DIR, '../../.env'))


class EnvMode(Enum):
    DEVELOPMENT = 0
    PRODUCTION = 1


def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY = 'dev',
        SQLALCHEMY_DATABASE_URI = 'sqlite:///' + str(Path(app.instance_path) / 'database.sqlite'),
        SQLALCHEMY_TRACK_MODIFICATIONS = False
    )

    if test_config is None:
        app.config.from_pyfile('config.py', silent = True)
    else:
        app.config.update(test_config)
        
    Path(app.instance_path).mkdir(exist_ok = True)
    
    @app.route('/hello')
    def hello():
        return 'Hello, world!'
    
    return app
