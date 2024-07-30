/*
const mod1 = require('./mod1'); //Importa modulo
console.log(mod1.falaNome());
*/

const {Pessoa} = require('./mod1'); //Importa modulo
const p1 = new Pessoa('Andreo');
console.log(p1);