import createCards from "../components/createCards.js";
const $seccionCards = document.getElementById("seccion-cards");
const $buttons = document.getElementsByClassName("tags");

export default function filtradoTag(products) {
  Array.from($buttons).forEach((button) => {
    const buttonTag = button.id.slice(3);
    button.addEventListener("click", () => {
      console.log(buttonTag);

      const productsToShow = products.filter(
        (product) =>
          product.description.includes(buttonTag) ||
          product.title.includes(buttonTag) ||
          product.category.includes(buttonTag)
      );
      if (productsToShow.length === 0) {
        $seccionCards.innerHTML = `<h1>No hay productos para mostrar</h1>`;
      } else {
        $seccionCards.innerHTML = productsToShow
          .map((card) => createCards(card))
          .join("");
      }
    });
  });
}
// Seccion de filtrado por tags

//      Botones de los tags
// const tagJuguetes = document.getElementById("tagjuguetes");
// const tagAlimento = document.getElementById("tagAlimento");
// const tagNatural = document.getElementById("tagNatural");
// const tagSalmón = document.getElementById("tagSalmón");
// const tagCatnip = document.getElementById("tagCatnip");
// const tagArnés = document.getElementById("tagArnés");
// const tagCachorro = document.getElementById("tagCachorro");
// const tagRueda = document.getElementById("tagRueda");

// const filtroTag = (tag, lista = []) => {
//   let listaFiltrada = lista.filter(
//     (product) =>
//       product.description.includes(tag) ||
//       product.title.includes(tag) ||
//       product.category.includes(tag)
//   );
//   return listaFiltrada;
// };

//   Acciones de los tags
// tagJuguetes.addEventListener("click", () => {
//   let juguetes = filtroTag("Juguetes", listaProductos[0]);
//   $seccionCards.innerHTML = juguetes.map((card) => createCards(card)).join("");
// });
// tagAlimento.addEventListener("click", () => {
//   let tag = filtroTag("Alimento", listaProductos[0]);
//   $seccionCards.innerHTML = tag.map((card) => createCards(card)).join("");
// });
// tagNatural.addEventListener("click", () => {
//   let tag = filtroTag("Natural", listaProductos[0]);
//   $seccionCards.innerHTML = tag.map((card) => createCards(card)).join("");
// });
// tagSalmón.addEventListener("click", () => {
//   let tag = filtroTag("Salm", listaProductos[0]);
//   $seccionCards.innerHTML = tag.map((card) => createCards(card)).join("");
// });
// tagCatnip.addEventListener("click", () => {
//   let tag = filtroTag("Catnip", listaProductos[0]);
//   $seccionCards.innerHTML = tag.map((card) => createCards(card)).join("");
// });
// tagArnés.addEventListener("click", () => {
//   let tag = filtroTag("Arn", listaProductos[0]);
//   $seccionCards.innerHTML = tag.map((card) => createCards(card)).join("");
// });
// tagCachorro.addEventListener("click", () => {
//   let tag = filtroTag("Cachorro", listaProductos[0]);
//   $seccionCards.innerHTML = tag.map((card) => createCards(card)).join("");
// });
// tagRueda.addEventListener("click", () => {
//   let tag = filtroTag("Rueda", listaProductos[0]);
//   $seccionCards.innerHTML = tag.map((card) => createCards(card)).join("");
// });
//     Funcion que me selecciona crea una lista
// function lista(url) {
//   ///"public/json/productos.json"
//   let listaDeTodo = [];
//   fetch(url)
//     .then((productos) => productos.json())
//     .then((productos) => {
//       listaDeTodo.unshift(productos);
//     });
//   return listaDeTodo;
// }

// const listaProductos = lista("/public/json/productos.json");
//console.log(listaProductos);

// funcion que filtrado
