const mongoose = require('mongoose');
const validator = require('validator');

const ProdutoSchema = new mongoose.Schema({
    nomeProduto: {type: String, require: true},
    preco: {type: String, require: true},
    categoria: {type: String, require: true},
    igredientes: {type: String, require: true},
    produto: {type: String, require: true},
    criadoEm: {type: Date, require: true, dafault: Date.now}
});

const ProdutoModel = mongoose.model('Produto', ProdutoSchema);

function Produto (body) {
    this.body = body;
    this.errors = [];
    this.produto = null;
}

Produto.prototype.register = async function(){
    this.valida();
    if(this.errors.length > 0) return;
    this.produto = await ProdutoModel.create(this.body);
};

Produto.prototype.valida = function(){
    // Validação 
    this.cleanUP();
    // O
    if(!this.body.nomeProduto) this.errors.push('Nome do produto é um campo obrigatório.');
    if(!this.body.preco) this.errors.push('O preço do produto é um campo obrigatório.');
    if(!this.body.categoria) this.errors.push('categoria é um campo obrigatório.');
    if(!this.body.igredientes) this.errors.push('Igredientes do produto é um campo obrigatório.');
    if(!this.body.produto) this.errors.push('Produto é um campo obrigatório.');
    if(!this.body.nomeProduto || !this.body.preco || !this.body.categoria || !this.body.igredientes || !this.body.produto){ 
        this.errors.push('Os campos: Nome do Produto, preço, categoria, igredientes e produto são obrigatórios.');
    };
}

Produto.prototype.cleanUP = function(){
    for(const key in this.body){
        if(typeof this.body[key] !== 'string'){
            this.body[key] = '';
        }
    }

    this.body = {
        nomeProduto: this.body.nomeProduto,  
        preco: this.body.preco, 
        categoria: this.body.categoria,
        igredientes: this.body.igredientes,
        produto: this.body.produto,
        criadoEm: Date.now(),
    };
}

Produto.prototype.edit = async function(id){
    if(typeof id !== 'string') return;
    this.valida();
    if(this.errors.length > 0) return;
    this.produto = await ProdutoModel.findByIdAndUpdate(id, this.body, {new: true});
};

// Metodos estáticos 
Produto.buscaPorId = async function(id){
    if(typeof id !== 'string') return;
    const produto = await ProdutoModel.findById(id);
    return produto;
};

Produto.buscaProdutos = async function(){
    const produtos = await ProdutoModel.find()
        .sort({criadoEm: -1});
    return produtos;
};

Produto.delete = async function(id){
    if(typeof id !== 'string') return;
    const produto = await ProdutoModel.findOneAndDelete({_id: id});
    return produto;
}; 

module.exports = Produto;
