from __future__ import annotations
from math import dist
from typing import *

import os
from flask import send_from_directory

# import sys
# from pathlib import Path
from werkzeug.exceptions import NotFound
from werkzeug.middleware.shared_data import SharedDataMiddleware
from werkzeug.middleware.dispatcher import DispatcherMiddleware
# from werkzeug.wrappers import Request, Response

from api import create_app, EnvMode

if TYPE_CHECKING:
    pass

# Get the current file path
script_path = os.path.dirname(os.path.realpath(__file__))

# Switch working dir to that path
os.chdir(script_path)

# Join the dist folder with the working path
dist_folder = os.path.join(os.getcwd(), '../frontend/dist')

# frontend = SharedDataMiddleware(NotFound(), {
#     '/js/'  : os.path.join(dist_folder, '/js/'      ),
#     '/css/' : os.path.join(dist_folder, '/css/'     ),
#     '/img/' : os.path.join(dist_folder, '/img/'     ),
#     '/'     : os.path.join(dist_folder, '/index.html'),
# })

frontend = SharedDataMiddleware(NotFound(), {
    '/js/': '../frontend/dist/js/',
    '/css/': '../frontend/dist/css/',
    '/img/': '../frontend/dist/img/',
    '/': '../frontend/dist/index.html'
})

app = DispatcherMiddleware(frontend, { 
    '/api': create_app()
})

if __name__ == '__main__':
    from werkzeug.serving import run_simple
    run_simple('127.0.0.1', 5000, app, use_debugger = True, use_reloader = True)
