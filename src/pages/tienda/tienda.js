const $img = document.getElementById("image");
const $descripcion = document.getElementById("descripcion");
const $precio = document.getElementById("precio");
const $nombreProducto = document.getElementById("nombre-producto");

fetch("/public/json/productos.json")
  .then((productos) => productos.json())
  .then((productos) => {
    for (producto of productos) {
      $img.src = producto.imagen;
      $descripcion.innerText = producto.descripcion;
      $precio.innerText = producto.precio;
      $nombreProducto.innerText = producto.nombre;
    }
  });
