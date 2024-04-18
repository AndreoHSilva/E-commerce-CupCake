/* 
705.484.450-52 070.987.720-03

7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2 
70  0  40 28 48 20 16 15 0
11 - (237 % 11) = 5 (Primeiro Digito)
Se o número digito for maior que 9, consideramos 0.


7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10

11 - (284 % 11) = 5 (Primeiro Digito)
 */

let cpf = '705.484.450-52';  // Cria uma variavel do tipo String para receber o CPF 
let cpfLimpo = cpf.replace(/\D+/g, '');  // (/\D+/g)=> representação numérica de tudo que é dif de num. Substitui tudo que não é um número por espaço vazio 70548445052
cpfArray = Array.from(cpfLimpo); 
console.log(cpfArray.reduce((ac, val) => ac + Number(val)), 0);