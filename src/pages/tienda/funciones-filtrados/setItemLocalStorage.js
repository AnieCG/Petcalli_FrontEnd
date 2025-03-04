export default function setItemLocalStorage(event, products) {
  const productId = event.target.getAttribute("producto-id").replace("#", "");

  // Buscar el producto como un objeto individual
  const producto = products.find(
    (product) => product.id === parseInt(productId)
  );

  if (producto) {
    // Verifica que el producto exista
    let productosArr = JSON.parse(localStorage.getItem("productos")) || [];

    productosArr.push(producto); // Agregar producto al array
    localStorage.setItem("productos", JSON.stringify(productosArr)); // Guardar en localStorage
  }
}
