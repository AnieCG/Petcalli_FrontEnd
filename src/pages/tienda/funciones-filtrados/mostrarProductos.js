import createCards from "../components/createCards.js";
const $seccionCards = document.getElementById("seccion-cards");

export default function mostrarProductos(lista) {
  $seccionCards.innerHTML = lista.map((card) => createCards(card)).join("");
}
