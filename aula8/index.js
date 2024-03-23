/*
Andreo Herval Silva tem 38 anos, pesa 81Kg
tem 1.81 de altura e seu IMC é de 24.724520008546747
Andreo nasceu em 1986
*/
const data = new Date()

const nome ='Andreo';
const sobrenome = 'Silva';
const anoNascimento = 1986
let idade = data.getFullYear() - anoNascimento;
const peso = 81;
const altura = 1.81;
let indiceMassaCoprporal = peso/(altura*altura)
let anoDeNascimento = data.getFullYear() - idade;
console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso}Kg,`);
console.log(`tem ${altura} M de altura e seu IMC é de ${indiceMassaCoprporal}.`);
console.log(`${nome} nasceu em ${anoDeNascimento}`);