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
    console.log("Producto agregado:", producto);
};

// Cargar el carrito desde localStorage al iniciar la página
document.addEventListener("DOMContentLoaded", () => {
    const carritoGuardado = localStorage.getItem("cart");
    if (carritoGuardado) {
        try {
            cart = JSON.parse(carritoGuardado); // Cargar el carrito desde localStorage
            updateCartCounter(); // Actualizar el contador
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

const productos = JSON.parse(localStorage.getItem("productos")) || [];



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
};

/* Ejecutar la función cuando el DOM esté completamente cargado */
document.addEventListener("DOMContentLoaded", updateQuantityText);