const Clientes = require('../models/ContatoModel');

exports.index = async (req, res) => {
    const contatos = await Clientes.buscaContatos();
    res.render('clientes', { contatos });
};

