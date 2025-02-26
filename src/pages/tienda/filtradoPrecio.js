import createCards from "./createCards.js";
export default function filtradoPorPrecio(seccionCards, inputs, priceValue) {
  Array.from(inputs).forEach((input, index) => {
    input.addEventListener("input", function () {
      let maxPrice = parseInt(this.value);
      Array.from(priceValue)[index].textContent = `$ ${maxPrice}`;
      console.log(Array.from(priceValue)[index]);

      fetch("/public/json/productos.json")
        .then((products) => products.json())
        .then((products) => {
          const productsToShow = products.filter((product) => {
            let productPrice = parseFloat(product.price.replace(/[$,]/g, ""));
            return productPrice <= maxPrice;
          });

          const productsMayorMenor = productsToShow.sort(
            (a, b) =>
              parseFloat(b.price.replace(/[$,]/g, "")) -
              parseFloat(a.price.replace(/[$,]/g, ""))
          );

          return (seccionCards.innerHTML = productsMayorMenor
            .map((card) => createCards(card))
            .join(""));
        });
    });
  });
}
