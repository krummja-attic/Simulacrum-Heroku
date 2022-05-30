from __future__ import annotations
from typing import *

import click
from flask import redirect, request, url_for
import flask_admin as admin
import flask_login as login
from flask.cli import with_appcontext
from flask_admin import Admin, helpers
from flask_admin.contrib import sqla

from api.model import DB, User, Post
from api.login import init_login, LoginForm, RegistrationForm
from werkzeug.security import generate_password_hash

if TYPE_CHECKING:
    from flask import Flask


class ModelView(sqla.ModelView):
    
    def is_accessible(self):
        current_user: User = cast(User, login.current_user)
        return current_user.is_authenticated


class AdminIndexView(admin.AdminIndexView):

    @admin.expose('/')
    def index(self):
        # Uh-oh! Throw user into the login page
        current_user: User = cast(User, login.current_user)
        if not current_user.is_authenticated:
            return redirect(url_for('.login_view'))
        
        # We're good - welcome to the admin space
        return super(AdminIndexView, self).index()
    
    @admin.expose('/login/', methods=('GET', 'POST'))
    def login_view(self):
        form = LoginForm(request.form)
        
        # Validate login form submission and log in if valid
        if helpers.validate_form_on_submit(form):
            user: User = form.get_user()
            login.login_user(user)
            
        # Bounce back to the index now that we're authenticated ^o^
        current_user: User = cast(User, login.current_user)
        if current_user.is_authenticated:
            return redirect(url_for('.index'))
        
        self._template_args['form'] = form
        return super(AdminIndexView, self).index()
    
    @admin.expose('/logout')
    def logout_view(self):
        login.logout_user()
        return redirect(url_for('.index'))


def init_admin(app: Flask) -> None:
    
    DB.init_app(app)
    env_mode = app.config.get('ENV')
    
    if env_mode == 'development':
        DB.create_engine(
            app.config.get('SQLALCHEMY_DATABASE_URI'),
            app.config.get('SQLALCHEMY_ENGINE_OPTIONS')
        )

    init_login(app)

    admin = Admin(
        app,
        name = 'simulacrum-space',
        index_view = AdminIndexView(),
        base_template='master.html',
        template_mode = 'bootstrap4'
    )
    
    admin.add_view(ModelView(User, DB.session))
    admin.add_view(ModelView(Post, DB.session))
    
    if env_mode == 'development':
        with app.app_context():
            DB.drop_all()
            DB.create_all()

            test_user = User(id=1, username="Test", password=generate_password_hash("12345"))
            
            DB.session.add(test_user)
            DB.session.commit()
            
    else:
        app.cli.add_command(init_db_command)


@click.command('init-db')
@with_appcontext
def init_db_command() -> None:
    """Clear existing data and create new tables."""
    DB.create_all()
    click.echo('Initialized the database.')
