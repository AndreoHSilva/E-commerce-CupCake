/*
 Tipos de dados Primitivos (imutáveis)
 string, number, boolean, undefined, null (bigint, symbol), valor

 Referência (mutável)
 array, object, function (Passados por referência)
*/

const a = {
    nome: 'Andreo',
    sobrenome: 'Silva'
};

/*
const b = a;  // Nessa condição o "b" aponta para mesma posição
a.nome = 'João'; //Aqui estarei mudando o valor de nome porém b também sofrera alteração
console.log(b); // Aqui b printa a mesma modificação que teve em a.nome
*/

const b = {...a};  // Nessa condição eu crio uma cópia de "a" em "b" assim b é independente de a.
a.nome = 'João'; // Aqui estarei mudando o valor de a.nome, porém b nã sofrera alteração.
console.log(b); // Aqui "b" printa o nome sem alteração sofrida na linha anterior.
console.log(a)