const { Carrinho } = require('../models/CarrinhoModel'); 
const Produto = require('../models/ProdutoModel'); 
const { MercadoPagoConfig, Preference } = require('mercadopago');

// Configuração do Mercado Pago
const client = new MercadoPagoConfig({
    accessToken: 'APP_USR-6283873860657963-110719-249e8619cddb1cb4308497738cd9a86c-2084085598'
});
const preference = new Preference(client);

exports.index = async (req, res) => {
    const user = req.session.user || null; 
    let produtos = [];
    let totalCarrinho = 0;

    if (user) {
        produtos = await Carrinho.buscaProdutos(user._id); 
        totalCarrinho = await Carrinho.totalCarrinho(user._id); 
    }

    res.render('carrinho', { user, produtos, totalCarrinho });
};

exports.adicionarAoCarrinho = async (req, res) => {
    try {
        const produtoId = req.params.id;
        const userId = req.session.user._id;
        const quantidade = parseInt(req.body.quantidade, 10);

        const produto = await Produto.buscaPorId(produtoId);
        if (!produto) {
            req.flash('errors', ['Produto não encontrado.']);
            return res.redirect('back');
        }

        const carrinho = new Carrinho();
        const mensagem = await carrinho.adicionaItemCarrinho(produtoId, produto.nomeProduto, produto.preco, userId, quantidade);
        
        if(mensagem === 'adicionado') {
            req.flash('success', 'Produto adicionado ao carrinho com sucesso.');
        } else {
            req.flash('errors', ['Produto já está no carrinho.']);
        }
        
        res.redirect('/produtos/index'); 
        
    } catch (e) {
        console.log(e);
        req.flash('errors', ['Erro ao adicionar produto ao carrinho.']);
        res.redirect('back');
    }
};

exports.atualizarQuantidade = async (req, res) => {
    try {
        const produtoId = req.params.id;
        const userId = req.session.user._id;
        const novaQuantidade = parseInt(req.body.quantidade, 10);

        const carrinho = new Carrinho();
        const mensagem = await carrinho.atualizaQuantidade(produtoId, userId, novaQuantidade);
        
        if (mensagem === 'atualizado') {
            req.flash('success', 'Quantidade atualizada com sucesso.');
        } else {
            req.flash('errors', ['Produto não encontrado no carrinho.']);
        }
        
        res.redirect('/carrinho/index');
        
    } catch (e) {
        console.log(e);
        req.flash('errors', ['Erro ao atualizar quantidade no carrinho.']);
        res.redirect('back');
    }
};

exports.removerDoCarrinho = async (req, res) => {
    try {
        const produtoId = req.params.id; 
        const userId = req.session.user._id; 

        const carrinho = new Carrinho();
        await carrinho.removeItemCarrinho(produtoId, userId);

        req.flash('success', 'Produto removido do carrinho com sucesso.');
        res.redirect('/carrinho/index'); 
    } catch (e) {
        console.log(e);
        req.flash('errors', ['Erro ao remover produto do carrinho.']);
        res.redirect('back');
    }
};

exports.pagarCompra = async (req, res) => {
    try {
        const userId = req.session.user._id;
        const produtos = await Carrinho.buscaProdutos(userId);

        const response = await preference.create({
            body: {
                items: produtos.map(produto => ({
                    title: produto.nomeProduto,
                    quantity: produto.quantidade,
                    currency_id: 'BRL',
                    unit_price: parseFloat(produto.preco.replace(',','.'))
                })),
                back_urls: {
                    success: 'http://localhost:3000/compracerta',  
                    failure: 'http://localhost:3000/compraerrada', 
                    pending: 'http://localhost:3000/compraerrada'  
                },
                auto_return: 'all'
            }
        });

        console.log(response);
        const initPoint = response.init_point;

        res.redirect(initPoint);
        
    } catch (e) {
        console.error(e);
        req.flash('errors', ['Erro ao realizar o pagamento.']);
        res.redirect('/carrinho/index');
    }
};
