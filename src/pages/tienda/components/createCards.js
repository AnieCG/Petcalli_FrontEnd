export default function createCards(producto) {
  return `
    <div class="col-md-4 my-1" >
      <div class="wrapperProduct card h-100 flex-md-column flex-row justify-content-center align align-items-center border border-light">
        <figure class="mb-0">
          <img src="${producto.image}" class="card-img-top rounded img-fluid" alt="Imagen de producto ${producto.title}" id="image" />
        </figure>
        <div class="card-body">
          <h5 class="card-title" id="nombre-producto">${producto.title}</h5>
          <p class="description">${producto.description}</p>
          <p id="precio">${producto.price}</p>
          <div class="d-flex flex-column">
            <button type="button" class="btn mt-2 comprar-button" producto-id="#${producto.id}" >
              Comprar ahora
            </button>
            <div class="d-flex justify-content-between">
              <button type="button" class="btn mt-2" data-bs-toggle="modal" data-bs-target="#${producto.id}">
                Ver producto
              </button>
              <button class="btn mt-2" type="button" href="#">
                <img src="/public/images/like-products.svg" alt="icono de favoritos">
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
