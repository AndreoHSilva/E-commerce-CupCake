/*
Escreva uma função que recebe um número e retorna o seguinte:
Número é divisivel por 3 =  Fizz
Número é divisivel por 5 =  Buzz
Número é divisivel por 3 e 5 =  FizzBuzz
Número NÃO é divisivel por 3 e 5 = Retona o própio número
Use a função com números de 0 a 100 
*/

function valor(x){
    if (x % 3 === 0 && x % 5 === 0) return 'FizzBuzz';
    if (x % 3 === 0) return 'Fizz';
    if (x % 5 === 0) return 'Buzz';
    return x
    }

for (let i = 0; i <= 100; i++){
    console.log(i, valor(i));
}
