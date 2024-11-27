const { parse } = require('dotenv');
const mongoose = require('mongoose');

const CarrinhoSchema = new mongoose.Schema({
    idUsuario: { type: mongoose.Schema.ObjectId, ref: 'Usuario', required: true },
    produtos: { type: [Object], default: [] },
});

const CarrinhoModel = mongoose.model('Carrinho', CarrinhoSchema);

function Carrinho(body = {}) { 
    this.body = body;
    this.errors = [];
}

Carrinho.prototype.register = async function(userId) {
    const novoCarrinho = new CarrinhoModel({ idUsuario: userId, produtos: [] });
    await novoCarrinho.save();
    this.carrinho = novoCarrinho;
};

Carrinho.prototype.adicionaItemCarrinho = async function(produtoId, nomeProduto, preco, userId, quantidade) {
    const carrinho = await CarrinhoModel.findOne({ idUsuario: userId });
    
    if (carrinho) {
        const produtoExistente = carrinho.produtos.find(item => item.idProduto.toString() === produtoId);
        if (!produtoExistente) {
            carrinho.produtos.push({ idProduto: produtoId, nomeProduto, preco, quantidade});
            await carrinho.save();
            return 'adicionado';
        } 
    }
};

Carrinho.prototype.atualizaQuantidade = async function(produtoId, userId, novaQuantidade) {
    try {
        const resultado = await CarrinhoModel.updateOne(
            { idUsuario: userId, 'produtos.idProduto': produtoId },
            { $set: { 'produtos.$.quantidade': novaQuantidade } }
        );

        if (resultado.modifiedCount > 0) {
            return 'atualizado';
        } else {
            return 'produto não encontrado';
        }
    } catch (error) {
        console.error('Erro ao atualizar quantidade:', error);
        return 'erro ao atualizar';
    }
};

Carrinho.prototype.removeItemCarrinho = async function(produtoId, userId) {
    const carrinho = await CarrinhoModel.findOne({ idUsuario: userId });

    if (carrinho) {
        carrinho.produtos = carrinho.produtos.filter(item => item.idProduto.toString() !== produtoId);
        await carrinho.save();
    }
};

Carrinho.buscaPorId = async function(userId) {
    return await CarrinhoModel.findOne({ idUsuario: userId });
};

Carrinho.buscaProdutos = async function(userId) {
    const carrinho = await Carrinho.buscaPorId(userId);
    return carrinho ? carrinho.produtos : [];
};

Carrinho.deletaCarrinho = async function(userId) {
    const resultado = await CarrinhoModel.deleteOne({ idUsuario: userId });
    return resultado;
};

Carrinho.totalCarrinho = async function(userId) {
    const carrinho = await CarrinhoModel.findOne({ idUsuario: userId });
    if (!carrinho) return 0;  

    const total = carrinho.produtos.reduce((acc, produto) => {
        return acc + parseFloat(produto.preco.replace(',', '.'))  * produto.quantidade;
    }, 0);

    return total;
};

module.exports = { CarrinhoModel, Carrinho };
