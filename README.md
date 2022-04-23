# Simulacrum Heroku

This is my personal web space, now deployed to Heroku!

## Application Structure

As this is my first full-stack application, I wanted to provide some notes on how this thing is put together for future reference.

### Backend

Flask-powered minimal backend. Provides access to Heroku PostgreSQL Database.

#### WSGI Configuration

The Web Server Gateway Interface (WSGI) specification is a standard Python server protocol. The protocol specifies two sides: the "server" or "gateway" and the "application" or "framework" (cf. [PEP 3333](https://peps.python.org/pep-3333/#specification-overview)). The server invokes a callable object that the application side provides.

In the current terms of this application, I use Green Unicorn for the server implementation and Werkzeug middlewares for the application implementation.

##### Green Unicorn

Flask features a built-in web server; however, it is a blocking server, meaning it can only process a single request at a time. Deploying this type of server on Heroku is inefficient, and it can lead to applications that do not feel snappy or responsive. [Gunicorn](https://gunicorn.org/) is a pure-Python HTTP server for WSGI applications. It lets you run Python applications concurrently by running multiple Python processes on a single Heroku dyno.

Additional Reading:  
	- [Deploying Python Applications with Gunicorn](https://devcenter.heroku.com/articles/python-gunicorn)

##### Werkzeug Middlewares

[Werkzeug](https://werkzeug.palletsprojects.com/en/2.1.x/#) is a WSGI application utility library. 

I use the `SharedDataMiddleware` class to pull together all of the paths that make up the static front end. 

I use the `DispatcherMiddleware` to pull together the front end along with the different WSGI applications that are mounted on different URL paths. For this application, it dispatches requests to `/api` to an API application. Arbitrary applications can be added as separate paths.

These middleware objects implement their `__call__` methods with the required `environ` and `start_response` parameters defined in the WSGI specification for the application side of the protocol.

Additional Reading:  
	- [Serve Shared Static Files](https://werkzeug.palletsprojects.com/en/2.1.x/middleware/shared_data/)  
	- [Application Dispatcher](https://werkzeug.palletsprojects.com/en/2.1.x/middleware/dispatcher/)

### Frontend

The frontend is built in Vue.js. I have recently started converting my Vue workflow to use the Composition API, which has improved readability and maintainability of my components immensely.

#### Router

The router module provides a simple configuration for SPA views.

## Deployment

When deploying an app on Heroku, you must provide a `Procfile` that specifies the commands that are executing by the app on startup. Alternatively, you can provide a `heroku.yml` file that has the commands specified. For this application, I use the latter to export a `FLASK_APP` environ variable, initialize the database backend, and finally start up the WSGI server by passing our backend application to Green Unicorn.
