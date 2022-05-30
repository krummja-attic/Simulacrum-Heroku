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

if TYPE_CHECKING:
    from flask import Flask


DB = SQLAlchemy()


class Post(DB.Model):
    __tablename__ = 'posts'

    id = Column(Integer, Sequence('post_id_seq'), primary_key = True)
    title = Column(String)
    created = Column(DateTime, server_default = func.now())
    body = Column(Text)

    # author_id = Column(Integer, ForeignKey('user.id'))
    # user = relationship('User', back_populates = 'posts')

    def __repr__(self) -> str:
        return repr(f'<Post: {self.title}>')


class User(DB.Model):
    __tablename__ = 'users'
    id = Column(Integer, primary_key = True)
    username = Column(String(80), unique=True)
    password = Column(String(128))
    # posts = relationship('Post', order_by = Post.id, back_populates = 'user')

    @property
    def is_authenticated(self) -> bool:
        return True

    @property
    def is_active(self) -> bool:
        return True
    
    @property
    def is_anonymous(self) -> bool:
        return False
    
    def get_id(self):
        return self.id
    
    def __unicode__(self):
        return self.username
    
