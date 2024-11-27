const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController.js');
const produtosController = require('./src/controllers/produtosController.js');
const produtosController_ = require('./src/controllers/produtosController_.js');
const loginController = require('./src/controllers/loginController.js');
const cadastroController = require('./src/controllers/cadastroController.js');
const cadastroProdutoController = require('./src/controllers/cadastroProdutoController.js');
const clientesController = require('./src/controllers/clientesController.js');
const carrinhoController = require('./src/controllers/carrinhoController.js');
const { loginRequired } = require('./src/middlewares/middleware.js');

// Rotas da home
route.get('/', produtosController.index);

// Rotas de login
route.get('/login/index', loginController.index);
route.get('/login/index/:id', loginController.index);
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);

// Rotas de cadastro
route.get('/cadastro/index', cadastroController.index); 
route.post('/cadastro/register', cadastroController.register); 
route.get('/cadastro/index/:id', cadastroController.editIndex); 
route.post('/cadastro/edit/:id', loginRequired, cadastroController.edit); 
route.get('/cadastro/delete/:id', loginRequired, cadastroController.delete);

// Rotas de produto
route.get('/produtos/index', produtosController_.index);
route.get('/cadastro-produto/index', loginRequired, cadastroProdutoController.index);
route.post('/cadastro-produto/register', loginRequired, cadastroProdutoController.register);
route.get('/cadastro-produto/index/:id', loginRequired, cadastroProdutoController.editIndex);
route.post('/cadastro-produto/edit/:id', loginRequired, cadastroProdutoController.edit);
route.get('/cadastro-produto/delete/:id', loginRequired, cadastroProdutoController.delete);

// Rotas de carrinho
route.get('/carrinho/index', loginRequired, carrinhoController.index);
route.post('/carrinho/adicionar/:id', loginRequired, carrinhoController.adicionarAoCarrinho);
route.post('/carrinho/atualizar/:id', loginRequired, carrinhoController.atualizarQuantidade);
route.get('/carrinho/remover/:id', loginRequired, carrinhoController.removerDoCarrinho);
route.post('/carrinho/pagamento', carrinhoController.pagarCompra);

// Rotas de compra (após pagamento)
route.get('/compracerta', (req, res) => {
    res.render('compracerta', { message: 'Compra realizada com sucesso!' });
});

route.get('/compraerrada', (req, res) => {
    res.render('compraerrada', { message: 'Houve um erro no pagamento, tente novamente.' });
});

// Rotas clientes
route.get('/clientes/index', loginRequired, clientesController.index);

module.exports = route;
