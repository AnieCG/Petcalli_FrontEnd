const $seccionCards = document.getElementById("seccion-cards");
const createCards = (producto) => {
  return `
    <div class="card h-100 m-2" style="width: 14rem;background-color: #E07A5F;">
        <img
        src="${producto.imagen}"
        class="card-img-top"
        alt="Imagen de producto"
        id="image"
        />
        <div class="card-body">
        <h5 class="card-title" id="nombre-producto">${
          producto.nombre.length > 30
            ? producto.nombre.slice(0, 24) + "..."
            : producto.nombre
        }</h5>
        <p id="precio">${producto.precio}</p>
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
