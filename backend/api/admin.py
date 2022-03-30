from __future__ import annotations
from typing import *

import click
from flask.cli import with_appcontext
from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView
from flask_sqlalchemy import SQLAlchemy

from api.model import DB, User, Post

if TYPE_CHECKING:
    from flask import Flask


def init_admin(app: Flask) -> None:
    DB.init_app(app)
    admin = Admin(app, name = 'simulacrum-space', template_mode = 'bootstrap3')
    admin.add_view(ModelView(User, DB.session))
    admin.add_view(ModelView(Post, DB.session))
    app.cli.add_command(init_db_command)


@click.command('init-db')
@with_appcontext
def init_db_command() -> None:
    """Clear existing data and create new tables."""

    DB.create_all()
    # with open('data.sql') as inf:
    #     for statement in inf:
    #         DB.engine.execute(statement)
    # click.echo('Initialized the database.')
