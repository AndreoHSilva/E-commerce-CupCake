/*
Diferença entre criar uma variavel com let e var.
*Quando uma variavel é criada com a instrução let 
isso impossibilita de você declarar a variavel mais
de uma vez.
*Quando você cria uma variavel utilizando a instrução
var, pode ocorrer a declaração novamente da variavel
já criada anteriormente.
*Também não criar variavel sem identificar o tipo de
variavel desejado, exemplo const ou let.
*/

//Tipos de dados Primitivos String, number, undefined, null, boolean

const nome = 'Andreo'; // string
const nome1 = "Andreo"; // string
const nome2 = `Andreo`; // string
const num = 10; // number
const num1 = 10.52; // number
let nomeAluno; //undefined -> Não aponta pra local nenhum na memória
let SobrenomeAluno = null; // Nulo não aponta pra local nenhum na memória
const aprovado = true; // Boolean = true, false (lógico)

//verifica o tipo da variavel
console.log(typeof nome, nome);
console.log(typeof nome1, nome1);
console.log(typeof nome2, nome2);
console.log(typeof num, num);
console.log(typeof num, num1);
console.log(typeof nomeAluno, nomeAluno);
console.log(typeof SobrenomeAluno, SobrenomeAluno);
console.log(typeof aprovado, aprovado);