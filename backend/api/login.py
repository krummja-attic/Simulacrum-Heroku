from __future__ import annotations
from typing import *

if TYPE_CHECKING:
    from flask import Flask

import flask_login as login

from wtforms import form, fields
from wtforms.validators import DataRequired, ValidationError
from werkzeug.security import check_password_hash

from .model import DB, User


class LoginForm(form.Form):
    login = fields.StringField(validators=[DataRequired()])
    password = fields.PasswordField(validators=[DataRequired()])

    def validate_login(self, field):
        user: User = self.get_user()
        if user is None:
            raise ValidationError("Invalid user")
        if not check_password_hash(str(user.password), self.password.data):
            raise ValidationError("Invalid password")
        
    def get_user(self):
        return DB.session.query(User).filter_by(username=self.login.data).first()


class RegistrationForm(form.Form):
    login = fields.StringField(validators=[DataRequired()])
    email = fields.StringField()
    password = fields.PasswordField(validators=[DataRequired()])
    
    def validate_login(self, field):
        if DB.session.query(User).filter_by(username=self.login.data).count() > 0:
            raise ValidationError("Duplicate username")


def init_login(app: Flask) -> None:
    login_manager = login.LoginManager()
    login_manager.init_app(app)
    
    @login_manager.user_loader
    def load_user(user_id):
        try:
            user: User = DB.session.query(User).get(user_id)
            return user
        except:
            return None
