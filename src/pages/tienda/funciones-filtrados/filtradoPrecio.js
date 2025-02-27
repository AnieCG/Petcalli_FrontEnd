import createCards from "../components/createCards.js";
const $seccionCards = document.getElementById("seccion-cards");
const $inputFiltradoPrecios = document.getElementsByClassName("form-range");
const $priceValue = document.getElementsByClassName("price-value");

export default function filtradoPorPrecio(productos) {
  Array.from($inputFiltradoPrecios).forEach((input, index) => {
    input.addEventListener("input", function () {
      let maxPrice = parseInt(this.value);
      Array.from($priceValue)[index].textContent = `$ ${maxPrice}`;

      const productsToShow = productos.filter((product) => {
        let productPrice = parseFloat(product.price.replace(/[$,]/g, ""));
        return productPrice <= maxPrice;
      });

      const productsMayorMenor = productsToShow.sort(
        (a, b) =>
          parseFloat(b.price.replace(/[$,]/g, "")) -
          parseFloat(a.price.replace(/[$,]/g, ""))
      );

      return ($seccionCards.innerHTML = productsMayorMenor
        .map((card) => createCards(card))
        .join(""));
    });
  });
}
