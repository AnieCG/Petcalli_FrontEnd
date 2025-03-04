/* Funcion para agregar el contador al icono de carrito */
let cartCounter = 0;

// Función para actualizar el contador del carrito
const updateCartCounter = () => {
    const cartCounter = document.getElementById("cart-counter");
    if (cartCounter) {
        let currentCount = parseInt(localStorage.getItem("cartCount")) || 0; // Obtener el valor actual del localStorage
        currentCount += 1; // Incrementar el contador
        localStorage.setItem("cartCount", currentCount); // Guardar el el nuevo valor
        cartCounter.textContent = currentCount; // Acutalizar el texto en el DOM
    }
};

/* Hay que llamar la funcion siempre que se agruegue un producto */
const addToCart = (product) => {
    console.log("Producto agregado:", product);
    updateCartCounter();
};

document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll(".add-to-cart-button");
    addToCartButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const product = button.getAttribute("data-product");
            addToCart(product);
        });
    });
});