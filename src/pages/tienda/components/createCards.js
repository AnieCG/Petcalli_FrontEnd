export default function createCards(producto) {
  return `
    <div class="h-150 col-md-4" >
      <div class="card m-1  flex-md-column flex-row justify-content-center align align-items-center border border-light">
        <figure class="mb-0">
          <img src="${producto.image}" class="card-img-top rounded img-fluid" alt="Imagen de producto ${producto.title}" id="image" />
        </figure>
        <div class="card-body">
          <h5 class="card-title" id="nombre-producto">${producto.title}</h5>
          <p>${producto.description}</p>
          <p id="precio">${producto.price}</p>
          <button type="button" class="btn mt-2 comprar-button" producto-id="#${producto.id}" >
          Comprar ahora
          </button>
          <button type="button" class="btn mt-2" data-bs-toggle="modal" data-bs-target="#${producto.id}">
            Ver producto
          </button>
        </div>
      </div>
    </div>
  `;
}
