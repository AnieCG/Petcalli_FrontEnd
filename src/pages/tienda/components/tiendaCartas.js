const $seccionCards = document.getElementById("seccion-cards2");
const createCards = (producto) => {
  //console.log(`menos${producto.id}`);
  return `



      <!-- Modal -->
<div >
    <div class="modal fade ventanasModales" id="${producto.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true ">
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">${producto.title}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

            <h4>${producto.title}</h4>
                <img src="${producto.image}" class="card-img-top modal-img" alt="Imagen de producto" />
                <div class="card-body">
                    <h5 class="card-title" id="nombre-producto">${producto.title}</h5>
                    <p>${producto.description}</p>
                    <p id="precio">${producto.price}</p>
                </div>

    <!-- Botones -->
                        <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                            <div class="btn-group me-2" role="group" aria-label="First group">
                                <button type="button" class="btn btn-primary modal-btn mas-menos 
                                menos"
                                    id="menos">
                                    <h3 class="mt-2"><strong>-</strong></h3>
                                </button>

                            </div>

                            <div class="btn-group me-2 text-center " role="group" aria-label="Third group">
                                <span
                                    class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2 text-center 
                                    numero contador">
                                    <h2 class="mt-2 m-1"><strong> 1 </strong></h2>
                                </span>
                            </div>

                            <div class="btn-group me-2" role="group" aria-label="Second group">

                                <button type="button" class="btn btn-primary modal-btn mas-menos 
                                mas"
                                    id="mas ">
                                    <h3 class="mt-2"><strong>+</strong></h3>
                                </button>
                            </div>
                            <div class="btn-group me-2" role="group" aria-label="Third group">
                                <button type="button " class="btn btn-primary modal-btn carrito"><strong>Agregar al
                                        carrito</strong></button>
                            </div>


                        </div>


            </div>
            <div class="modal-footer" >
            <button type="button" class="btn btn-secondary modal-btn cerrar" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary modal-btn" ><a href="#">Ver carrito</a></button>
            </div>
        </div>
        </div>
    </div>
</div>


`;
};

fetch("/public/json/productos.json")
  .then((productos) => productos.json())
  .then((productos) => {
    /*      console.log(typeof(productos));
        console.log((productos)); */
    $seccionCards.innerHTML = productos
      .map((card) => createCards(card))
      .join("");
  });
