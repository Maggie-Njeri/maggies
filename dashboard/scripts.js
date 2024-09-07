// Example cart
let cart = [];

// Function to add item to cart
function addToCart(name, price) {
    cart.push({ name, price });
    alert(`${name} added to cart!`);
    updateCartDisplay();
}

// Function to update cart display
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    cart.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `<p>${item.name} - $${item.price.toFixed(2)}</p>`;
        cartItemsContainer.appendChild(div);
    });

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartItemsContainer.innerHTML += `<p>Total: $${total.toFixed(2)}</p>`;
}

// Event listener for checkout button
document.getElementById('checkout-button')?.addEventListener('click', () => {
    alert('Checkout not implemented yet.');
});

// Initialize cart display on page load
document.addEventListener('DOMContentLoaded', updateCartDisplay);
