from __future__ import annotations
from typing import *

import click
from flask import redirect, request, url_for
import flask_admin as admin
import flask_login as login
from flask.cli import with_appcontext
from flask_admin import Admin, helpers
from flask_admin.contrib import sqla
from werkzeug.security import generate_password_hash

from cms.model import DB, User, Post
from cms.login import init_login, LoginForm
from cms.post_parser import PostParser

if TYPE_CHECKING:
    from flask import Flask


class ModelView(sqla.ModelView):
    
    def is_accessible(self):
        current_user: User = cast(User, login.current_user)
        return current_user.is_authenticated


class AdminIndexView(admin.AdminIndexView):

    @admin.expose('/')
    def index(self):
        current_user: User = cast(User, login.current_user)
        if not current_user.is_authenticated:
            return redirect(url_for('.login_view'))
        return super(AdminIndexView, self).index()
    
    @admin.expose('/login/', methods=('GET', 'POST'))
    def login_view(self):
        form = LoginForm(request.form)
        
        if helpers.validate_form_on_submit(form):
            user: User = form.get_user()
            login.login_user(user)
            
        current_user: User = cast(User, login.current_user)
        if current_user.is_authenticated:
            return redirect(url_for('.index'))
        
        self._template_args['form'] = form
        return super(AdminIndexView, self).index()
    
    @admin.expose('/logout/')
    def logout_view(self):
        login.logout_user()
        return redirect(url_for('.index'))
    
    @admin.expose('/api/')
    def api_view(self):
        posts = DB.session.query(Post).all()
        payload = {}
        for post in posts:
            post_data = post.as_dict()
            # PostParser(post_data)
            # post_data['body'] = PostParser(post_data['body']).to_markdown()
            payload[post.id] = post_data
        return payload


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
    
    app.cli.add_command(init_db_command)
    
    if env_mode == 'development':
        with app.app_context():
            DB.drop_all()
            DB.create_all()

            test_user = User(username="Test", password=generate_password_hash("12345"))
            DB.session.add(test_user)
            
            test_post = Post(
                title = 'Test Title',
                tags = 'Test, Vue Development',
                body = '''This is some test content to see if I can automatically create a new blog post.'''
            )
            DB.session.add(test_post)
            
            DB.session.commit()


@click.command('init-db')
@with_appcontext
def init_db_command() -> None:
    """Clear existing data and create new tables."""
    DB.create_all()
    click.echo('Initialized the database.')
