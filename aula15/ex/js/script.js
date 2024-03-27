const numero = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Raiz quadrada do seu número é ${numero ** 0.5}.</p>`;
texto.innerHTML += `${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>É NAN : ${Number.isNaN()}.</p>`;
texto.innerHTML += `<p>Arredondando para baixo ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para cima ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;