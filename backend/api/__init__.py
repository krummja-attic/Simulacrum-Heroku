from __future__ import annotations
from typing import *

import os
from pathlib import Path
from flask import Flask

from api.admin import init_admin

if TYPE_CHECKING:
    from flask import Config


DATABASE_URL = os.environ['DATABASE_URI']
if DATABASE_URL.startswith("postgres://"):
    DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql://", 1)


def create_app(test_config: Dict[str, Any] | None = None) -> Flask:

    app = Flask(__name__, instance_relative_config = True)
    app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URL
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    if test_config is None:
        app.config.from_pyfile('config.py', silent = True)
    else:
        app.config.update(test_config)

    Path(app.instance_path).mkdir(exist_ok = True)

    init_admin(app)

    @app.route('/hello')
    def hello():
        return 'Hello, World!'

    return app
