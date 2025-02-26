export default function createCards(producto) {
  return `
      <div class="card h-150 m-2" style="width:16rem;">
        <img src="${producto.image}" class="card-img-top" alt="Imagen de producto" id="image" />
        <div class="card-body">
          <h5 class="card-title" id="nombre-producto">${producto.title}</h5>
          <p>${producto.description}</p>
          <p id="precio">${producto.price}</p>
          <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#${producto.id}">
            Ver producto
          </button>
        </div>
      </div>
    `;
}
