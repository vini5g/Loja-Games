const routes = require('express').Router();

const Usuario = require('./Controller/Usuario');
const Games = require('./Controller/Games');

routes.post('/usuario', Usuario.create);
routes.get('/usuario', Usuario.index);

routes.post('/games', Games.create);
routes.get('/games', Games.index);

module.exports = routes;