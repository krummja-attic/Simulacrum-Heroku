from __future__ import annotations
from typing import *

import click
from flask.cli import with_appcontext
from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView

from api.model import DB, User, Post, Test

if TYPE_CHECKING:
    from flask import Flask


def init_admin(app: Flask) -> None:
    
    DB.init_app(app)
    env_mode = app.config.get('ENV')
    
    if env_mode == 'development':
        DB.create_engine(
            app.config.get('SQLALCHEMY_DATABASE_URI'),
            app.config.get('SQLALCHEMY_ENGINE_OPTIONS')
        )

    admin = Admin(app, name = 'simulacrum-space', template_mode = 'bootstrap3')
    admin.add_view(ModelView(Test, DB.session))
    admin.add_view(ModelView(User, DB.session))
    admin.add_view(ModelView(Post, DB.session))

    if env_mode == 'development':
        with app.app_context():
            DB.create_all()
    else:
        app.cli.add_command(init_db_command)


@click.command('init-db')
@with_appcontext
def init_db_command() -> None:
    """Clear existing data and create new tables."""
    DB.create_all()
    click.echo('Initialized the database.')
