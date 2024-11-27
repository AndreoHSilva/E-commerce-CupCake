const { Contato } = require('../models/ContatoModel');
const { Carrinho } = require('../models/CarrinhoModel');

exports.index = (req, res) => {
    res.render('cadastro', {
        contato: {}
    });
};

exports.register = async (req, res) => {
    try {
        const usuarioData = req.body; 

        const contato = new Contato(usuarioData);
        await contato.register(); 

        if (contato.errors.length > 0) {
            req.flash('errors', contato.errors);
            req.session.save(() => res.redirect('back'));
            return;
        }

        req.flash('success', 'Contato registrado com sucesso.');
        req.session.save(() => res.redirect(`/login/index/${contato.contato._id}`));
        return;
    } catch (e) {
        console.log(e);
        return res.render('404');
    }
};

exports.editIndex = async (req, res) => {
    if (!req.params.id) return res.render('404');

    const contato = await Contato.buscaPorId(req.params.id);

    if (!contato) return res.render('404');
    res.render('cadastro', { contato });
};

exports.edit = async function (req, res) {
    try {
        if (!req.params.id) return res.render('404');
        const contato = new Contato(req.body);
        await contato.edit(req.params.id);

        if (contato.errors.length > 0) {
            req.flash('errors', contato.errors);
            req.session.save(() => res.redirect('back'));
            return;
        }

        req.flash('success', 'Contato editado com sucesso.');
        req.session.save(() => res.redirect(`/cadastro/index/${contato.contato._id}`));
        return;
    } catch (e) {
        console.log(e);
        res.render('404');
    }
};

// essa control precisa chamar o carrinho delete
exports.delete = async function (req, res) {
    if (!req.params.id) return res.render('404');

    const carrinho = await Carrinho.deletaCarrinho(req.params.id);
    if (!carrinho) return res.render('404');

    const contato = await Contato.delete(req.params.id);
    if (!contato) return res.render('404');

    req.flash('success', 'Contato apagado com sucesso.');

    if (!req.session.user.isAdmin) {
        req.session.save(() => res.redirect('../../login/logout'));
    } else {
        req.session.save(() => res.redirect('back'));
    }
    return;
};
