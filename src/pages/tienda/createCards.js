export default function createCards(producto) {
  return `
    <div class="card h-150 m-1" id="product-card">
      <img
        src="${producto.image}"
        class="card-img-top img-fluid"
        alt="Imagen de producto"
        id="image" 
        />
        <div class="card-body" id="body">
          <h6 class="card-title" id="nombre-producto">${producto.title}</h6>
          <p id="description" ><small>${producto.description}</small></p>
          <p id="precio" >${producto.price}</p>
          <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#${producto.id}"
          >Ver producto</button>
        </div>
    </div>
    `;
}
