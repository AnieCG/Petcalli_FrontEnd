const $seccionCards = document.getElementById("seccion-cards");
const createCards = (producto) => {
  return `
    
    <div class="card h-150 m-2" style="width:13rem;">
      <img
        src="${producto.image}"
        class="card-img-top"
        alt="Imagen de producto"
        id="image"
        />
        <div class="card-body">
        <h5 class="card-title" id="nombre-producto">${producto.title}</h5>
        <p>${producto.descripcion}</p>
        <p id="precio">${producto.price}</p>
        <button class="btn btn-warning">Añadir a carrito</button>
        </div>
    </div>
`;
};

fetch("/public/json/productos.json")
  .then((productos) => productos.json())
  .then((productos) => {
    $seccionCards.innerHTML = productos
      .map((card) => createCards(card))
      .join("");
  });
