//Atribuição via desestruturação
/* let a = 'A'; //B
let b = 'B'; //C
let c = 'C'; //A

const inversão = ['B', 'C', 'A'];
console.log(a, b, c);
[a, b, c] = inversão;

console.log(a, b, c); */

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [Primeiro, Segundo, Terceiro, Quarto, Quinto, Sexto, Sétimo, Oitavo, Nono] = numeros;

console.log(Primeiro, Segundo);