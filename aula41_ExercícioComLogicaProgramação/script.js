// Escreva uma função que recebe 2 números e retorna o maior deles
function maiorNumero ( x, y){
    return valor = Number(x) > Number(y) ? x : y;
}

console.log(maiorNumero(1500,219));

// Arrow function

const maiorNumero2 = ( x, y) => Number(x) > Number(y) ? x : y;
console.log(maiorNumero2(1500,219));