const createCards = (producto) => {
    return `
      
      <div class="card h-150 m-2" style="width:16rem;">
        <img
          src="${producto.image}"
          class="card-img-top"
          alt="Imagen de producto"
          id="image"
          />
          <div class="card-body">
          <h5 class="card-title" id="nombre-producto">${producto.title}</h5>
          <p>${producto.description}</p>
          <p id="precio">${producto.price}</p>
          <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#${producto.id}"
          >Ver producto</button>
          </div>
      </div>
  
  `;
  };
// Seccion de filtrado por tags

//      Botones de los tags
const tagJuguetes = document.getElementById("tagjuguetes");
const tagAlimento = document.getElementById("tagAlimento");
const tagNatural = document.getElementById("tagNatural");
const tagSalmón = document.getElementById("tagSalmón");
const tagCatnip = document.getElementById("tagCatnip");
const tagArnés = document.getElementById("tagArnés");
const tagCachorro = document.getElementById("tagCachorro");
const tagRueda = document.getElementById("tagRueda");

//     Funcion que me selecciona crea una lista
function lista(url) {
  ///"public/json/productos.json"
  let listaDeTodo = [];
  fetch(url)
    .then((productos) => productos.json())
    .then((productos) => {
      listaDeTodo.unshift(productos);
    });
  return listaDeTodo;
}

const listaProductos = lista("/public/json/productos.json");
//console.log(listaProductos);

// funcion que filtrado
const filtroTag = (tag, lista = []) => {
  let listaFiltrada = lista.filter(
    (product) =>
      product.description.includes(tag) ||
      product.title.includes(tag) ||
      product.category.includes(tag)
  );
  return listaFiltrada;
};

//   Acciones de los tags
tagJuguetes.addEventListener("click", () => {
  let juguetes = filtroTag("Juguetes", listaProductos[0]);
  $seccionCards.innerHTML = juguetes.map((card) => createCards(card)).join("");
});
tagAlimento.addEventListener("click", () => {
  let tag = filtroTag("Alimento", listaProductos[0]);
  $seccionCards.innerHTML = tag.map((card) => createCards(card)).join("");
});
tagNatural.addEventListener("click", () => {
  let tag = filtroTag("Natural", listaProductos[0]);
  $seccionCards.innerHTML = tag.map((card) => createCards(card)).join("");
});
tagSalmón.addEventListener("click", () => {
  let tag = filtroTag("Salm", listaProductos[0]);
  $seccionCards.innerHTML = tag.map((card) => createCards(card)).join("");
});
tagCatnip.addEventListener("click", () => {
  let tag = filtroTag("Catnip", listaProductos[0]);
  $seccionCards.innerHTML = tag.map((card) => createCards(card)).join("");
});
tagArnés.addEventListener("click", () => {
  let tag = filtroTag("Arn", listaProductos[0]);
  $seccionCards.innerHTML = tag.map((card) => createCards(card)).join("");
});
tagCachorro.addEventListener("click", () => {
  let tag = filtroTag("Cachorro", listaProductos[0]);
  $seccionCards.innerHTML = tag.map((card) => createCards(card)).join("");
});
tagRueda.addEventListener("click", () => {
  let tag = filtroTag("Rueda", listaProductos[0]);
  $seccionCards.innerHTML = tag.map((card) => createCards(card)).join("");
});