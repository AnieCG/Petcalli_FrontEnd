import { createCards } from "../tienda/components/tiendaCartas.js";

let cart = [];

// Función para actualizar el contador del carrito
const updateCartCounter = () => {
    const cartCounter = document.getElementById("cart-counter");
    if (cartCounter) {
        cartCounter.textContent = cart.length; // Actualizar el contador con la longitud del carrito
    }
};

// Función para guardar el carrito en el localStorage
const saveCartInLocalStorage = () => {
    localStorage.setItem("cart", JSON.stringify(cart)); // Guardar el carrito completo en localStorage
};

// Función para agregar un producto al carrito
const addToCart = (producto) => {
    cart.push(producto); // Agregar el producto al carrito
    updateCartCounter(); // Actualizar el contador
    saveCartInLocalStorage(); // Guardar el carrito en localStorage
    updateCartTotals();
    console.log("Producto agregado:", producto);
};

// Función para calcular y mostrar el subtotal y total

const updateCartTotals = () => {

    const subtotalElement = document.getElementById("subtotal-price");

    const totalElement = document.getElementById("total-price");

    

    let subtotal = 0;

    cart.forEach(producto => {

        // Convertir el precio de string a número

        const price = parseFloat(producto.price.replace(/[$,]/g, '')); // Eliminar el símbolo de dólar y las comas

        subtotal += price; // Sumar el precio al subtotal

    });


    const total = subtotal; // Aquí va la lógica para aplicar descuentos, spoiler, no funciona


    if (subtotalElement) {

        subtotalElement.textContent = subtotal.toFixed(2);

    }

    if (totalElement) {

        totalElement.textContent = total.toFixed(2);

    }

};
// Cargar el carrito desde localStorage al iniciar la página
document.addEventListener("DOMContentLoaded", () => {
    const carritoGuardado = localStorage.getItem("cart");
    if (carritoGuardado) {
        try {
            cart = JSON.parse(carritoGuardado); // Cargar el carrito desde localStorage
            updateCartCounter(); // Actualizar el contador
            updateCartTotals();
        } catch (error) {
            console.error("Error al cargar el carrito desde localStorage:", error);
            cart = []; // Reiniciar el carrito en caso de error
        }
    }

    // Cargar productos y agregar eventos a los botones "Agregar al carrito"
    fetch("/public/json/productos.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Error al cargar el archivo JSON: ${response.status}`);
            }
            return response.json();
        })
        .then((productos) => {
            console.log("Productos cargados:", productos); // Depuración
            const $seccionCards = document.getElementById("seccion-cards2");
            if ($seccionCards) {
                $seccionCards.innerHTML = productos.map((card) => createCards(card)).join("");
            }

            // Asignar eventos a los botones "Agregar al carrito" después de cargar los modales
            const addToCartButtons = document.querySelectorAll(".agregar-carrito");
            addToCartButtons.forEach((button) => {
                button.addEventListener("click", () => {
                    const producto = JSON.parse(button.dataset.producto);
                    console.log("Producto obtenido del botón:", producto); // Depuración
                    addToCart(producto);
                });
            });
        })
        .catch((error) => {
            console.error("Error al cargar el archivo JSON:", error);
        });
});


/* Funcion para actualizar el texto del parrafo segun la canitidad de productos en el carrito */
const updateQuantityText = ( ) => {
    /* Leer el local storage */
    const carritoGuardado = localStorage.getItem("cart");

    /* Hay que verificar si hay algo en el carrito */
    if (carritoGuardado) {
        try {
            /* Convertir el Json del carrito en un arreglo */
            cart = JSON.parse(carritoGuardado);
            /* Obtener la cantidad de productos */
            const cantidad = cart.length;
            /* Seleccionar la parte del DOM */
            const parrafoCantidad = document.querySelector(".text-gray-600.mb-6")
            /* Actualizar el texto */
            if (parrafoCantidad) {
                parrafoCantidad.textContent = `Tienes ${cantidad} productos en tu carrito.`;
                }
            }catch (error) {
                console.log("Error al cargar el carrito")
}
    }else {
        const parrafoCantidad = document.querySelector(".text-gray-600.mb-6");
        if (parrafoCantidad) {
            parrafoCantidad.textContent = "No hay productos en tu carrito.";
    }
}

let isCouponUsed = false; // Variable para verificar si el cupón ya ha sido canjeado

document.getElementById('apply-coupon').addEventListener('click', function() {
    let couponCode = document.getElementById('coupon-code').value.trim();

    if (couponCode && !isCouponUsed) {
        // Lógica para aplicar el cupón si no ha sido usado antes
        // Aquí iría el código para aplicar el descuento, actualizar precios, etc.
        
        isCouponUsed = true; // Marcamos el cupón como usado

        // Mostrar mensaje de éxito o aplicar descuento
        document.getElementById('coupon-message').innerText = 'Cupón aplicado correctamente';

    } else if (isCouponUsed) {
        // Si el cupón ya fue canjeado, mostramos el popup
        showPopup();
    } else {
        // Si el campo está vacío o el código es incorrecto
        document.getElementById('coupon-message').innerText = 'Por favor ingresa un cupón válido';
    }
});

// Función para mostrar el popup de "Cupón canjeado"
function showPopup() {
    document.getElementById('coupon-popup').style.display = 'flex';
}

// Función para cerrar el popup
document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('coupon-popup').style.display = 'none';
});

document.getElementById('checkout-button').addEventListener('click', function() {
    // Obtener el método de pago seleccionado
    let selectedPaymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
    
    // Verificar el método de pago y mostrar un mensaje
    if (selectedPaymentMethod === 'credit-card') {
        alert('¡Gracias por elegir tarjeta de crédito! Procederemos con el pago.');
        // Aquí puedes agregar lógica adicional para procesar el pago con tarjeta de crédito
    } else if (selectedPaymentMethod === 'paypal') {
        alert('¡Gracias por elegir PayPal! Serás redirigido a la página de pago de PayPal.');
        // Aquí puedes agregar la lógica para redirigir a PayPal o procesar el pago
    }
});
    

};

/* Ejecutar la función cuando el DOM esté completamente cargado */
document.addEventListener("DOMContentLoaded", updateQuantityText);
updateQuantityText();
    updateCartTotals();