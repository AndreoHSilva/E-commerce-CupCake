//atribuição via desestruturação Objetos
const pessoa = {
    nome: 'Andreo',
    sobrenome: 'Silva',
    idade: 38,
    endereco: {
        rua: 'Francisco Claudino Ferreira',
        numero: 376
    }
};

//Atribuição via desestruturação
const {nome, sobrenome, idade} = pessoa;
console.log(nome, sobrenome, 'tem', idade, 'anos');

const{endereco:{rua, numero}} = pessoa;
console.log(rua, numero);