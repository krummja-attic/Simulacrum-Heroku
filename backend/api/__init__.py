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
    
    
POSTS = [
    {
        'title': 'A Title Served From Database',
        'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'date': 'May 9, 2022 at 8:11pm'
    }
]


def create_app(env: EnvMode = EnvMode.DEVELOPMENT) -> Flask:

    app = Flask(__name__, instance_relative_config = True)
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    # Check the environment type, then load appropriate config.
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

    # Define a registration endpoint
    @app.route('/register', methods=('POST', 'GET'))
    def register():
        return "Hello world!"
    
    # Define a blog posts endpoint
    @app.route('/posts', methods=['GET', 'POST'])
    def all_posts():
        response_object = {'status': 'success'}
        if request.method == 'POST':
            post_data = request.get_json()
            POSTS.append({
                'title': post_data.get('title'),
                'body': post_data.get('body'),
                'date': post_data.get('date')
            })
            response_object['message'] = 'Post added!'
        else:
            response_object['posts'] = POSTS
        return jsonify(response_object)

    return app
