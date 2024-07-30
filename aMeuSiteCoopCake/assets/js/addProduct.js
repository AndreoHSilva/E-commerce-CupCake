/*
Formulario add Product
*/
const productName = document.querySelector('.product-name');
const productPrice = document.querySelector('.product-price')
const btnAddProduct = document.querySelector('.add-product');
const productDescription = document.getElementsByClassName(".product-description");

// Script JavaScript para lidar com o envio do formulário
document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Coletar os dados do formulário
    const productName = document.getElementById('productName').value;
    const productDescription = document.getElementById('productDescription').value;
    const productPrice = document.getElementById('productPrice').value;

    // Aqui você pode fazer algo com os dados, como enviá-los para um servidor, armazená-los localmente etc.
    console.log("Nome do Produto:", productName);
    console.log("Descrição:", productDescription);
    console.log("Preço:", productPrice);

    // Limpar os campos do formulário após o envio
    document.getElementsByClassName('.product-name').value = '';
    document.getElementsByClassName('.product-description').value = '';
    document.getElementsByClassName('.product-price').value = '';
});

// Função para atualizar o contador de caracteres

document.getElementById("productDescription").addEventListener("input", updateCharCount);

function updateCharCount() {
    const maxLength = document.getElementById("productDescription").maxLength;
    console.log(maxLength);
    let currentLength = document.getElementById("productDescription").value;
    console.log(currentLength.length,'hi');      
    let remaining = maxLength - currentLength.length;
    document.getElementById("charCount").innerHTML = `Caracteres restantes:   ${remaining}`;  
    console.log('Sai da function',remaining)
}
// Adiciona um ouvinte de evento para o evento 'input' no textarea


// Chama a função inicialmente para exibir o contador de caracteres restantes
updateCharCount();

// Função para adicionar um novo item
/*
addNewItem()
function addNewItem(nome, price, image){
    products.push = {id: products.length + 1, name: nome, price: price, image: image}; 

}*/