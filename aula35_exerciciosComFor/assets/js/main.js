const elementos = [
    {tag: 'p', texto: 'Frase 1'},  //indice 0
    {tag: 'div', texto: 'Frase 2'}, //indice 1
    {tag: 'section', texto: 'Frase 3'}, //indice 2
    {tag: 'footer', texto: 'Frase 4'}, //indice 3
    ];


const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i ; i < elementos.length; i++){
    console.log(elementos[i]);
}