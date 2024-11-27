const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');
const { Carrinho } = require('./CarrinhoModel'); 

const ContatoSchema = new mongoose.Schema({
    nome: {type: String, require: true},
    email: {type: String, require: false, default: ''},
    senha: {type: String, require: true},
    isAdmin: {type: Boolean, default: false},
    telefone: {type: String, require: false, default: ''},
    estado: {type: String, require: false, default: ''},
    cidade: {type: String, require: false, default: ''},
    cep: {type: String, require: false, default: ''},
    logradouro: {type: String, require: false, default: ''},
    numero: {type: String, require: false, default: ''},
    criadoEm: {type: Date, require: true, default: Date.now},
    idCarrinho: {type: mongoose.Schema.ObjectId, ref: 'Carrinho'}
});

const ContatoModel = mongoose.model('Contato', ContatoSchema);

function Contato (body) {
    this.body = body;
    this.errors = [];
    this.contato = null;
}

Contato.prototype.register = async function() {
    this.valida();
    if (this.errors.length > 0) return;

    await this.userExists();
    if (this.errors.length > 0) return;

    const salt = bcryptjs.genSaltSync();
    this.body.senha = bcryptjs.hashSync(this.body.senha, salt); // Hash da senha

    this.contato = await ContatoModel.create(this.body);

    if (this.contato) {
        if (this.contato.isAdmin === false) {
            const carrinho = new Carrinho({ produtos: [] }); // para iniciar o carrinho vazio
            await carrinho.register(this.contato._id); 

            if (carrinho.errors.length === 0) {
                this.contato.idCarrinho = carrinho.carrinho._id; 
                await this.contato.save(); 
            } else { 
                this.errors.push(...carrinho.errors);
            }
        } 
    }
};

Contato.prototype.userExists = async function () {
    this.user = await ContatoModel.findOne({ email: this.body.email })
    if(this.user) this.errors.push('Usuário já existe.');
}

Contato.prototype.valida = function(){
    // Validação 
    this.cleanUP();
    // O e-mail precisa ser válido 
    if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('e-mail inválido.');
    if(!this.body.nome) this.errors.push('Nome é um campo obrigatório.');
    if(!this.body.senha) this.errors.push('Senha é um campo obrigatório.');
    if(!this.body.estado) this.errors.push('Estado é um campo obrigatório.');
    if(this.body.senha.length < 3 || this.body.senha.length > 50){
        this.errors.push('A senha precisa ter entre 3 e 50 caracteres.');
    }
    if(!this.body.cep) this.errors.push('Endereço é um campo obrigatório.');
    if(!this.body.logradouro) this.errors.push('Endereço é um campo obrigatório.');
    if(!this.body.email || !this.body.telefone || !this.body.logradouro){ 
        this.errors.push('Os campos: e-mail, telefone e endereço, são obrigatórios.');
    };
}

Contato.prototype.cleanUP = function(){
    for(const key in this.body){
        if(typeof this.body[key] !== 'string'){
            this.body[key] = '';
        }
    }

    this.body = {
        nome: this.body.nome,  
        email: this.body.email, 
        senha: this.body.senha,
        telefone: this.body.telefone,
        estado: this.body.estado,
        cidade: this.body.cidade,
        cep: this.body.cep,
        logradouro: this.body.logradouro,
        numero: this.body.numero,
        criadoEm: Date.now(),
    };
}

// precisa validar quando editar
Contato.prototype.edit = async function(id){
    if(typeof id !== 'string') return;
    this.valida();
    
    const salt = bcryptjs.genSaltSync();
    this.body.senha = bcryptjs.hashSync(this.body.senha, salt); // Hash da senha
    if(this.errors.length > 0) return;
    this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, {new: true});
};

// Metodos estáticos 
Contato.buscaPorId = async function(id){
    if(typeof id !== 'string') return;
    const contato = await ContatoModel.findById(id);
    return contato;
};

Contato.buscaContatos = async function(){
    const contatos = await ContatoModel.find()
        .sort({criadoEm: -1});
    return contatos;
};

Contato.delete = async function(id){
    if(typeof id !== 'string') return;
    const contato = await ContatoModel.findOneAndDelete({_id: id});
    return contato;
}; 

module.exports = {Contato, ContatoModel};