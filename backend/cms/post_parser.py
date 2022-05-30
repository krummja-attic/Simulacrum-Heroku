from __future__ import annotations
from typing import *

if TYPE_CHECKING:
    pass

from dataclasses import dataclass

from datetime import datetime
import marko


@dataclass
class PostData:
    id: int
    title: str
    tags: str
    created: datetime
    body: str


class PostParser:
    
    def __init__(self, post_data: Dict[str, Any]) -> None:
        self.post_data = PostData(**post_data)
        
    def to_markdown(self):
        pass
        # return marko.convert(self.body)
