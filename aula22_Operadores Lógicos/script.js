/*
Operadores Lógicos
&& -> AND -> E     Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR  -> OU    Apenas uma das expressões precisam ser true
!  -> NOT -> NÃO   Inverte a expressão
*/
/*
console.log(true && true && true);
console.log(true || false || false);
console.log(!false);
*/

const usuario = 'Andreo';
const senha = '12345';

const vaiLogar = usuario === 'Andreo' && senha === '12345';
console.log(vaiLogar)