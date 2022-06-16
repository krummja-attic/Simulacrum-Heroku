const express = require('express');
const compression = require('compression');
const { createPageRenderer } = require('vite-plugin-ssr');

const root= `${__dirname}/..`;
const fetch = require('cross-fetch');

const { 
  ApolloClient, 
  createHttpLink, 
  InMemoryCache 
} = require('@apollo/client');


startServer();


async function startServer () {
  const app = express();

  app.use(compression());

  let viteDevServer;

  app.use(express.static(`${root}/dist/client`));

  const renderPage = createPageRenderer({
    root: root 
  });

  app.get('*', async (req, res, next) => {
    const url = req.originalUrl;
    const apolloClient = makeApolloClient();
    const pageContextInit = {
      url,
      apolloClient,
    };
    
    const pageContext = await renderPage(pageContextInit);
    const { httpResponse } = pageContext;

    if (!httpResponse) return next();

    const { body, statusCode, contentType } = httpResponse;
    res.status(statusCode).type(contentType).send(body);
  })

  const port = process.env.PORT || 3000;
  app.listen(port);
  console.log(`Server running at http://localhost:${port}`);
}


function makeApolloClient () {
  const apolloClient = new ApolloClient({
    ssrMode: true,
    cache: new InMemoryCache(),
  });

  return apolloClient;
}
