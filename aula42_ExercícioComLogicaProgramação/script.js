/*
Escreva uma função chamada ePaisagem que recebe dois argumentos,largura
e altura de uma imagem (number).
Retorne true se a imagem estiver no modo paisagem.
*/

function ePaisagem(largura, altura){
    return largura >= altura ? true : false;
}

console.log(ePaisagem(1080, 1920));


const ePaisagem1 = (largura, altura) => largura >= altura ? true : false;
console.log(ePaisagem1(1080, 1920));