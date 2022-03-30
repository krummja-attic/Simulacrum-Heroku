from __future__ import annotations
from typing import *

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


DB = SQLAlchemy()


class Post(DB.Model):
    __tablename__ = 'post'
    id = Column(Integer, Sequence('user_id_seq'), primary_key = True)
    title = Column(String)
    created = Column(DateTime, server_default = func.now())

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

    def __repr__(self) -> str:
        return repr(f'<User: {self.username}')
