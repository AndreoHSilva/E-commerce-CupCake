// Condição para mostrar a aspas "" com \" \" em uma String
let string_1 = "Um \"texto\"";
console.log(string_1.length);

let string_2 = 'Um "texto"';
console.log(string_2);

// As strings contém um índice
//         pos  01234567
let string_3 = 'Um texto';
console.log(string_3[3]);  //retorna o que tem na posição 3 da string

console.log(string_3.length); //retorna a quantidade de caracteres na String

console.log(string_3.replace('Um', 'Dois')); //substituí algo dentro do texto

console.log(string_3.toUpperCase()); //modifica todas as letras para maiuscula

console.log(string_3.toLowerCase()); //modifica todas as letras para minuscula

console.log(string_3.indexOf('texto')); //encontra a posição que inicia a palavra "texto"

console.log(string_3.lastIndexOf('m')); //encontra a posição da letra solicitada de trás para frente

console.log(string_3.lastIndexOf('m', 3)); //encontra a posição da letra de "m" de trás pra frente a partir do index 3

console.log(string_3.slice(4,6)); //fatiamento com indice de inicio e final

