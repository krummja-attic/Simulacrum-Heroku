from __future__ import annotations
from typing import *

# SQLAlchemy
from sqlalchemy import (
    Column,
    Integer,
    String,
    Sequence,
    Text,
    DateTime,
    ForeignKey,
)
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from flask_sqlalchemy import SQLAlchemy

# Security
from werkzeug.security import generate_password_hash, check_password_hash


DB = SQLAlchemy()


class Post(DB.Model):
    __tablename__ = 'post'

    id = Column(Integer, Sequence('user_id_seq'), primary_key = True)
    title = Column(String)
    created = Column(DateTime, server_default = func.now())
    body = Column(Text)

    author_id = Column(Integer, ForeignKey('user.id'))
    user = relationship('User', back_populates = 'posts')

    def __repr__(self) -> str:
        return repr(f'<Post: {self.title}>')


class User(DB.Model):
    __tablename__ = 'user'

    id = Column(Integer, Sequence('user_id_seq'), primary_key = True)
    username = Column(String)
    password = Column(String)

    posts = relationship('Post', order_by = Post.id, back_populates = 'user')

    @classmethod
    def authenticate(cls, **kwargs):
        email = kwargs.get('email')
        password = kwargs.get('password')

        if not email or not password:
            return None

        user = cls.query.filter_by(email=email).first()
        if not user or not check_password_hash(user.password, password):
            return None

        return user

    def to_dict(self):
        return dict(id=self.id, email=self.email)

    def __init__(self, email, password) -> None:
        self.email = email
        self.password = generate_password_hash(password, method='sha256')

    def __repr__(self) -> str:
        return repr(f'<User: {self.username}>')
