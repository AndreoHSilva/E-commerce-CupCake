/*
************************************
*    Operadores Aritméticos        *
*    + Soma or Concatenação        *
*    - Subtração                   *
*    / Divisão                     *
*    * Multiplicação               *
*    ** Potenciação                * 
*    % Resto da Divisão            *
*    Ordem de precedencia          *
*    1º ()                         *
*    2º **                         *
*    3º * / %                      *
*    4º + -                        *
*    Incremento = ++               *
*    Decremento = --               *
************************************
*/

 const num1 = parseInt('2'); // Converte String para Inteiro parseFloat('5.2') converte para number de ponto flutuante
 const num2 = 10;
 console.log(num1 + num2);
 console.log(num1 - num2);
 console.log(num1 * num2);
 console.log(num1 / num2);
 console.log(num1 ** num2);
 console.log(num1 % num2);

 console.log('');
 let contador = 0;
 
 for (let index = 0; index <= 10; index ++) {
    console.log(contador);
    if (contador==10) {
        break;
    }
    contador ++ ;
 }

 while (contador >= 0 ) {
    console.log(contador);
    contador --;    
 }
 