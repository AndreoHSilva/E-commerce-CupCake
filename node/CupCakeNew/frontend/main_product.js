 // Simulação de dados dos produtos (você pode substituir por dados reais do seu banco de dados).

 const products = [
    { id: 1, name: "Bolo de Chocolate", price: 25.00, image: "CoopCake_Choco.png" },
    { id: 2, name: "Bolo de Morango", price: 20.00, image: "CoopCake_Morango.png" },
    { id: 3, name: "Bolo de Limão", price: 22.00, image: "CoopCake_Lemon.png" },
    { id: 4, name: "Bolo de Cenoura", price: 18.00, image: "CoopCake_Cenoura.png" },
    { id: 5, name: "Bolo de Brigadeiro", price: 18.00, image: "CoopCakeCenoura.png" }
    // Adicione mais produtos conforme necessário
];



// Função para exibir os produtos na página
function displayProducts() {
    const productListDiv = document.getElementById('product-list');
    productListDiv.innerHTML = '';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = 
        `   
            <img  src="./assets/img/${product.image}" alt="${product.name}" id="${product.id}">
            <h3>${product.name}</h3>
            <p><strong>Preço:</strong> R$ ${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
        `;
        productListDiv.appendChild(productDiv);
    });
}

 /*btnAddProduct.addEventListener('click', function{
    if (!productName.value) return;

 })*/
// Função para adicionar um produto ao carrinho (você pode implementar esta função)
function addToCart(productId) {
    // Implemente a lógica para adicionar o produto ao carrinho
    console.log(`Produto com ID ${productId} adicionado ao carrinho.`);
}

// Exibir os produtos quando a página carregar
window.onload = displayProducts;

