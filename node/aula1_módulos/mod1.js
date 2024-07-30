
/*
const nome = 'Andreo';
const sobrenome = 'Silva';

const falaNome = () => nome + ' ' + sobrenome;

// console.log(module); //Mostra estrutura do módulo

module.exports.nome = nome;  // exporta a variavel nome
module.exports.sbrenome = sobrenome;  // exporta a variavel sobrenome
module.exports.falaNome = falaNome; // exporta a function falaNome

console.log(module.exports);


// Atalho do metodo acima
exports.nome = nome;  // exporta a variavel nome
exports.sbrenome = sobrenome;  // exporta a variavel sobrenome
exports.falaNome = falaNome; // exporta a function falaNome

//console.log(module.exports);
*/

class Pessoa {
    constructor(nome){
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa; 