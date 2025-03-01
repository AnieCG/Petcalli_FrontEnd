export default function filterProductsByPetType(productos, button) {
  return (productos = productos.filter(
    (product) => product.petType === button.className.split(" ")[0]
  ));
}
