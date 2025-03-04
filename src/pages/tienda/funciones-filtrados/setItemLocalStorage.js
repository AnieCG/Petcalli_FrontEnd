export default function setItemLocalStorage(event, products) {
  if (event.target.classList.contains("comprar-button")) {
    const productId = event.target
      .getAttribute("data-bs-target")
      .replace("#", "");

    // Buscar el producto como un objeto individual
    const producto = products.find(
      (product) => product.id === parseInt(productId)
    );

    if (producto) {
      // Verifica que el producto exista
      let productosArr = JSON.parse(localStorage.getItem("productos")) || [];

      productosArr.push(producto); // Agregar producto al array
      localStorage.setItem("productos", JSON.stringify(productosArr)); // Guardar en localStorage

      console.log(JSON.parse(localStorage.getItem("productos"))); // Verificar almacenamiento
    }
  }
}
