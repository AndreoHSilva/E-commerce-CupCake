const Produtos = require('../models/ProdutoModel');

exports.index = async (req, res) => {
    const produtos = await Produtos.buscaProdutos();
    res.render('index', { produtos });
};

