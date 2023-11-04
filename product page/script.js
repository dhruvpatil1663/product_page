const product = {
    name: "Product Name",
    description: "Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 99.99,
   };
   // Shopping cart data
   const cart = {
    items: [],
    total: 0,
   };
   // Selecting elements
   const addToCartButton = document.querySelector('.add-to-cart');
   const viewCartButton = document.querySelector('.view-cart');
   const cartItemsList = document.getElementById('cart-items');
   const cartTotal = document.getElementById('cart-total');
   // Add the product to the cart
   addToCartButton.addEventListener('click', () => {
    // Clone the product and add it to the cart
    const cartItem = { ...product };
    cart.items.push(cartItem);
    // Update the cart UI
    const cartItemElement = document.createElement('li');
    cartItemElement.textContent = `${cartItem.name} - $${cartItem.price.toFixed(2)}`;
    cartItemsList.appendChild(cartItemElement);
    // Update the total price
    cart.total += cartItem.price;
    cartTotal.textContent = `$${cart.total.toFixed(2)}`;
   });
   // View Cart button functionality (you can implement cart view logic here)
   viewCartButton.addEventListener('click', () => {
    // Implement cart view logic here
    // You can show a modal or navigate to a cart page, for example.
   });