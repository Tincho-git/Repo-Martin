// Este archivo contiene el código JavaScript para la funcionalidad de la página de comercio electrónico.

document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Producto 1', price: 10.00 },
        { id: 2, name: 'Producto 2', price: 15.00 },
        { id: 3, name: 'Producto 3', price: 20.00 }
    ];

    const productContainer = document.getElementById('product-list');
    const cart = [];

    function displayProducts() {
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <h3>${product.name}</h3>
                <p>Price: $${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productContainer.appendChild(productDiv);
        });
    }

    window.addToCart = function(productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            cart.push(product);
            alert(`${product.name} has been added to your cart.`);
        }
    };

    displayProducts();
});