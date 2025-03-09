// lo que se añade se va al local y si no hay, se queda en array vacio, carrito lo declaro directo en vacio
//let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// actualiza el contador del carrito llamando el id que se puso en la navbar.
// fusilada de carrito.js
/* const updateCartCounter = () => {
  const cartCounter = document.getElementById("cart-counter");
  if (cartCounter) {
    cartCounter.textContent = carrito.length;
  }
}; */

// agrega los productos del json bajo la const producto y las busca por el id de cada producto del json
// si hay un producto se agrega otro ahi mismo sin tener que agregar otra tarjeta del mismo producto
// si no se tiene pues se agrega
/* function agregarAlCarrito(idProducto) {
  const producto = productos.find((p) => p.id === idProducto);

  if (producto) {
    const productoEnCarrito = carrito.find((p) => p.id === idProducto);
    if (productoEnCarrito) {
      productoEnCarrito.cantidad++;
    } else {
      carrito.push({ ...producto, cantidad: 1 });
    }

    localStorage.setItem("productos", JSON.stringify(productos));
    localStorage.setItem("carrito", JSON.stringify(carrito));

    actualizarCarrito();
    updateCartCounter();
  }
} */
// se mandan a llamar del json y se mandan a llamar las funciones para que se actualice

// evento que activa los botones de las cards de inicio al click y con el data id que tienen
/* document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".btn-comprar").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = parseInt(e.target.getAttribute("data-id"));
      agregarAlCarrito(id);
    });
  });

  updateCartCounter();
}); */

// funcion que actualiza el contador del carrito, id que esta en carrito html para colocarlos
// faltan estilos
/* function actualizarCarrito() {
  const carritoContainer = document.getElementById("carrito-container");
  carritoContainer.innerHTML = "";

  carrito.forEach((producto) => {
    const item = document.createElement("div");
    item.classList.add("carrito-item");
    item.innerHTML = `
            <img src="${producto.image}" width="50">
            <span>${producto.title}</span>
            <span>${producto.cantidad} x $${producto.price}</span>
            <button class="btn-remove" data-id="${producto.id}">Eliminar</button>
        `;
    carritoContainer.appendChild(item);
  });
  // evento para borrar los productos del carrito pero es temporal porque se hara con botones de incremento y decremento
  document.querySelectorAll(".btn-remove").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(e.target.getAttribute("data-id"));
      eliminarDelCarrito(id);
    });
  });
} */
// funcion que elimina y actualiza el contador
/* function eliminarDelCarrito(idProducto) {
  carrito = carrito.filter((p) => p.id !== idProducto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarCarrito();
  updateCartCounter();
} */
