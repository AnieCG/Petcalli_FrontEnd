import createCards from "../components/createCards.js";
const $seccionCards = document.getElementById("seccion-cards");

export default function mostrarProductos(lista) {
  if(lista.length != 0){
    $seccionCards.innerHTML = lista.map((card) => createCards(card)).join("");
  }else{
    console.log("No hay productos");
    $seccionCards.innerText=`No hay resultados para esta búsqueda`;
  }
}
