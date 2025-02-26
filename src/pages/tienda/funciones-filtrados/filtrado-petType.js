import createCards from "../createCards.js";
const carruselElements = document.getElementsByClassName("carrusel-btn");
const $seccionCards = document.getElementById("seccion-cards");

export default function filterProductsByPetType(productos) {
  Array.from(carruselElements).forEach((button) => {
    button.addEventListener("click", () => {
      const productsToShow = productos.filter((product) => {
        return product.petType === button.className.split(" ")[0];
      });

      $seccionCards.innerHTML = productsToShow
        .map((card) => createCards(card))
        .join("");
    });
  });
}
