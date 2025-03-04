export default function filterProductsByPetType(productos, button) {
  return (productos = productos.filter(
    (product) => product.petType === button.value
  ));
}
