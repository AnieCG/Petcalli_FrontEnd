const $span = document.getElementsByClassName("price-value");

export default function filtradoPorPrecio(productos, input) {
  let maxPrice = parseInt(input.value);
  $span[1].innerHTML = `$ ${maxPrice}`;

  productos = productos.filter((product) => {
    let productPrice = parseFloat(product.price.replace(/[$,]/g, ""));
    return productPrice <= maxPrice;
  });

  productos = productos.sort(
    (a, b) =>
      parseFloat(b.price.replace(/[$,]/g, "")) -
      parseFloat(a.price.replace(/[$,]/g, ""))
  );

  return productos;
}
