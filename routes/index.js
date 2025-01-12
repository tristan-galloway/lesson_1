const routes = require('express').Router();
const lesson1Controller = require('./controllers/nameController')

routes.get('/', (req, res) => {
    res.send('Hello, Render!');
  });
  
routes.get('/name', lesson1Controller.getName);

module.exports = routes;