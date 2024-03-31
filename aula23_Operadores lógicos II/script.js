/*
Operadores Lógicos
&& -> AND -> E     Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR  -> OU    Apenas uma das expressões precisam ser true
!  -> NOT -> NÃO   Inverte a expressão

FALSY
*false
0
'' "" ``
null / undefined
NaN
*/
//console.log(true && 0);
const corUsuario = null;
const corPadrao = 'Red';

const corDefinida = corUsuario || corPadrao;
console.log(corDefinida);