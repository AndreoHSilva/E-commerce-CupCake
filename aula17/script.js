// funções

//**** ex 01 ********************************************************
// função Simples
function saudacao(nome){
    console.log(`Good Morning, ${nome}!`);
}

for (let index = 0; index < 1; index++) {
    console.log('************************  inicio ex 01  *******************************')
}
saudacao('Andreo');

for (let index = 0; index < 2; index++) {
    if (index < 1 ) {
        console.log('******************************  FIM  **********************************')       
    }
    console.log('');    
}

//**** ex 02 ********************************************************
// função retornado um valor
function soma(x, y){
    const result = x + y;
    return result;
}

for (let index = 0; index < 1; index++) {
    console.log('************************  inicio ex 02  *******************************')
}
console.log(`A soma entre 4,  6 é = ${soma(4,6)}`);
console.log(`A soma entre 9,  6 é = ${soma(9,6)}`);
console.log(`A soma entre 8, 12 é = ${soma(8,12)}`);

for (let index = 0; index < 1; index++) {
    if (index < 1 ) {
        console.log('******************************  FIM  **********************************')       
    }
    console.log('');
}

//**** ex 03 ********************************************************
// função com parametros pré selecionados
function soma1(x=1, y=1){
    const result = x + y;
    return result
}

/*
Como a função está com os parametros pré setado no campo 
vazio será calculado 1 caso não seja enviado o parametro
*/
for (let index = 0; index < 1; index++) {
    console.log('************************  inicio ex 03  *******************************')
}
const resultado = soma1(9,); 
console.log(resultado);
for (let index = 0; index < 1; index++) {
    if (index < 1 ) {
        console.log('******************************  FIM  **********************************')       
    }
    console.log('');
}

//**** ex 04 ********************************************************
// função que gera a raíz quadrada de um número

const raiz = function (n){
    return n ** 0.5;
}

for (let index = 0; index < 1; index++) {
    console.log('************************  inicio ex 04  *******************************')
}
console.log(`A raíz quadrada de 09 é: ${raiz(9)}`);
console.log(`A raíz quadrada de 25 é: ${raiz(25)}`);
for (let index = 0; index < 1; index++) {
    if (index < 1 ) {
        console.log('******************************  FIM  **********************************')       
    }
    console.log('');
}