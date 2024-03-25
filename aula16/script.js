// Array
const alunos = ['Luiz', 'Maria', 'João'];

// Opções para adicionar itens em uma array.
alunos[alunos.length] = 'Vitor';  // Adiciona na ultima posição.
alunos.push('Dimas'); // Adicona na ultima posição.
alunos.unshift('Miguel'); // Adiciona no inicio da Array.
alunos.pop(); //remove da ultima posição da Array.
alunos.shift(); //remove do inicio da Array.
delete alunos[1]; //Apaga o item dentro da Array, porém mamtém o index.

for (let index = 0; index < alunos.length; index++) {
    console.log(alunos[index]);
    
};