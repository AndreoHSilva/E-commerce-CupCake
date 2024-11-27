const { Carrinho } = require('../models/CarrinhoModel');

exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user;
    next();
};

exports.outroMiddleware = (req, res, next) => {
    next();
};

exports.checkCsrfError = (err, req, res, next) => {
    if(err){
        return res.render('404');
    }
    next();
};

exports.csrfMidleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};

exports.loginRequired = async (req, res, next) => {
    if (!req.session.user) {
        req.flash('errors', 'Você precisa fazer login.');
        req.session.save(() => res.redirect('/'));
        return;
    }

    const userId = req.session.user._id;

    try {
        const carrinho = await Carrinho.buscaPorId(userId); 

        // deleta carrinho se o usuario for um admin
        if (req.session.user.isAdmin) {
            if (carrinho) {
                await Carrinho.deletaCarrinho(userId); 
            }
        // adiciona carrinho se o usuario for um user
        } else {
            if (!carrinho) {
                const novoCarrinho = new Carrinho({ produtos: [] });
                await novoCarrinho.register(userId);
            }
        }
    } catch (error) {
        console.error('Erro ao gerenciar carrinho:', error);
    }

    next();
};

