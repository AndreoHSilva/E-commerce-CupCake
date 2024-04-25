//For in estrutura de repetição => Lê os índices ou chaves do objeto

/* const frutas = ['Pera', 'Maça', 'Uva'];

for (let i in frutas){
    console.log(frutas[i]);
} */

const pessoa = {
    nome: 'Andreo',
    sebrenome: 'Silva',
    idade: 38
}

for (let key in pessoa){
    console.log(key, pessoa[key]);
}
