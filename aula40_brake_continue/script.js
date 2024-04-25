// brake and continue

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros){
    if (numero === 2 || numero === 7){
        continue;
    }

    if (numero === 4){
        break;
    }
    console.log(numero);
}