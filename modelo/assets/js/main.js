/*
Capturar evento de submit do formulário
*/

const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e){
    e.preventDefault();
    console.log('Evento Prevenido');
});