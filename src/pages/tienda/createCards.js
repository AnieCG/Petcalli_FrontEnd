export default function createCards(producto) {
  return `
    <div class="card  m-1" id="product-card">
      <img
        src="${producto.image}"
        class="card-img-top img-fluid d-block d-sm-none"
        alt="Imagen de producto"
        id="image2" 
        />
      <img
        src="${producto.image}"
        class="card-img-top img-fluid d-none d-sm-block"
        alt="Imagen de producto"
        id="image" 
        />
  
        <div class="card-body d-block d-sm-none" id="body2">
          <h6 class="card-title" id="nombre-producto">${producto.title}</h6>
          <p id="description" ><small>${producto.description}</small></p>
          <p id="precio" >${producto.price}</p>
          <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#${producto.id}"
          >Ver producto</button>
        </div>
        <div class="card-body d-none d-sm-block" id="body">
          <h6 class="card-title" id="nombre-producto">${producto.title}</h6>
          <p id="description" ><small>${producto.description}</small></p>
          <p id="precio" >${producto.price}</p>
          <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#${producto.id}"
          >Ver producto</button>
        </div>
    </div>
    `;
}
