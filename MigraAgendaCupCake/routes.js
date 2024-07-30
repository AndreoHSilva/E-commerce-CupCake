const express = require('express');
const route = express.Router();
//const homeController = require('./src/controllers/homeController');
const produtosController = require('./src/controllers/produtosController');
const produtosController_ = require('./src/controllers/produtosController_');
const loginController = require('./src/controllers/loginController');
const cadastroController = require('./src/controllers/cadastroController.js');
const cadastroProdutoController = require('./src/controllers/cadastroProdutoController.js');
const clientesController = require('./src/controllers/clientesController.js');
const { loginRequired } = require('./src/middlewares/middleware.js');

// Rotas da home
//route.get('/', homeController.index);
route.get('/', produtosController.index);

// Rotas de login
route.get('/login/index', loginController.index);

route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);

// Rotas de contato
route.get('/cadastro/index', loginRequired, cadastroController.index);
route.post('/cadastro/register', loginRequired, cadastroController.register);
route.get('/cadastro/index/:id', loginRequired, cadastroController.editIndex);
route.post('/cadastro/edit/:id', loginRequired, cadastroController.edit);
route.get('/cadastro/delete/:id', loginRequired, cadastroController.delete);

// Rotas de Produto
route.get('/produtos/index', produtosController_.index);
route.get('/cadastro-produto/index', loginRequired, cadastroProdutoController.index);
route.post('/cadastro-produto/register', loginRequired, cadastroProdutoController.register);
route.get('/cadastro-produto/index/:id', loginRequired, cadastroProdutoController.editIndex);
route.post('/cadastro-produto/edit/:id', loginRequired, cadastroProdutoController.edit);
route.get('/cadastro-produto/delete/:id', loginRequired, cadastroProdutoController.delete);


// Rotas clientes
route.get('/clientes/index', loginRequired, clientesController.index);

module.exports = route;