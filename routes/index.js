const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Hello, Render!');
  });
  
routes.get('/name', getName);

module.exports = routes;