const validator = require('validator');
const { ContatoModel } = require('./ContatoModel');
const bcryptjs = require('bcryptjs');

class Login {
    constructor(body){
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    async login(){
        this.valida();
        if(this.errors.length > 0) return;
        this.user = await ContatoModel.findOne({ email: this.body.email })

        if(!this.user){
            this.errors.push('Usuário não existe.');
            return;
        }

        if(!bcryptjs.compareSync(this.body.password, this.user.senha)){
            this.errors.push('Senha inválida.');
            this.user = null;
        } 
    }

    valida(){
        // Validação 
        this.cleanUP();
        // O e-mail precisa ser válido 
        if(!validator.isEmail(this.body.email)) this.errors.push('e-mail inválido.');

        // A senha precisa ter 3 e 50 caracteres
        if(this.body.password.length < 3 || this.body.password.length > 50){
            this.errors.push('A senha precisa ter entre 3 e 50 caracteres.');
        }
    }
    
    cleanUP(){
        for(const key in this.body){
            if(typeof this.body[key] !== 'string'){
                this.body[key] = '';
            }
        }

        this.body = {
            email: this.body.email, 
            password: this.body.password
        };
    }
}

module.exports = Login;
