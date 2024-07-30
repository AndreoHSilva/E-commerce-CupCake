const mongoose = require('mongoose');
const validator = require('validator');

const ContatoSchema = new mongoose.Schema({
    nome: {type: String, require: true},
    email: {type: String, require: false, default: ''},
    telefone: {type: String, require: false, default: ''},
    estado: {type: String, require: false, default: ''},
    cidade: {type: String, require: false, default: ''},
    cep: {type: String, require: false, default: ''},
    logradouro: {type: String, require: false, default: ''},
    numero: {type: String, require: false, default: ''},
    criadoEm: {type: Date, require: true, dafault: Date.now}
});

const ContatoModel = mongoose.model('Contato', ContatoSchema);

function Contato (body) {
    this.body = body;
    this.errors = [];
    this.contato = null;
}

Contato.prototype.register = async function(){
    this.valida();
    if(this.errors.length > 0) return;
    this.contato = await ContatoModel.create(this.body);
};

Contato.prototype.valida = function(){
    // Validação 
    this.cleanUP();
    // O e-mail precisa ser válido 
    if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('e-mail inválido.');
    if(!this.body.nome) this.errors.push('Nome é um campo obrigatório.');
    //if(!this.body.estado) this.errors.push('Estado é um campo obrigatório.');
    if(!this.body.cidade) this.errors.push('Cidade é um campo obrigatório.');
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
        telefone: this.body.telefone,
        estado: this.body.estado,
        cidade: this.body.cidade,
        cep: this.body.cep,
        logradouro: this.body.logradouro,
        numero: this.body.numero,
        criadoEm: Date.now(),
    };
}

Contato.prototype.edit = async function(id){
    if(typeof id !== 'string') return;
    this.valida();
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

module.exports = Contato;
