const $seccionCards = document.getElementById("seccion-cards");
const createCards = (producto) => {
  return `
 <div class="col mb-3">
    <div class="card h-100 p-2" style="width: 14rem">
        <img
        src="${producto.imagen}"
        class="card-img-top"
        alt="Imagen de producto"
        id="image"
        />
        <div class="card-body">
        <h5 class="card-title" id="nombre-producto">${producto.nombre}</h5>
        <p id="precio">${producto.precio}</p>
        <a href="#" class="btn btn-primary">me gusta</a>
        </div>
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
