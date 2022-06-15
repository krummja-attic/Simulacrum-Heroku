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
    Boolean,
)
from sqlalchemy.sql import func
from flask_sqlalchemy import SQLAlchemy

if TYPE_CHECKING:
    pass


DB = SQLAlchemy()


class Post(DB.Model):
    __tablename__ = 'posts'

    id = Column(Integer, Sequence('post_id_seq'), primary_key = True)
    draft = Column(Boolean)
    title = Column(String)
    created = Column(DateTime, server_default = func.now())
    tags = Column(String)
    body = Column(Text)

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}

    def __repr__(self) -> str:
        return repr(f'<Post: {self.title}>')


class User(DB.Model):
    __tablename__ = 'users'
    
    id = Column(Integer, Sequence('user_id_seq'), primary_key = True)
    username = Column(String(80), unique=True)
    password = Column(String(128))

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
    
