//para leer local para convertirlo a array
//funcion 
//create cards esat en el archivo
//const productos= JSON.parse(localStorage.getItem(producto));
//console.log(productos);
//recuperar informacion
//hacer las cartas
//funcion para que muestre en el DOM
//otro archivo creat cards

//para obtener la referancia con el Id del html, y guardarla en la constante
const contenedorTarjetas = document.getElementById("productos-container");
/* funcion para actualizar el contador de un prodcuto existente */
function updateCounter(productId, increment = true) {
    const counterElement = document.querySelector(`#counter-value-${productId}`

    );

    if (counterElement) {
        let curretValue = parseInt(counterElement.textContent, 10);
        curretValue = increment ? curretValue + 1 : curretValue - 1;
        counterElement.textContent = curretValue;
    }
}
// Función para manejar la eliminación de un producto
function handleDelete(productId) {
    const productElement = document.querySelector(`#product-${productId}`);
    if (productElement) {
        productElement.remove(); // Elimina la tarjeta del DOM
    }
}


//funcion para recibir el array de productos/objetos
function crearTarjetasProductos() {
    //leer en el local storach
    const productos = JSON.parse(localStorage.getItem("cart"));//talvez no es producto?
    /* Efectivamente no era prodcuto es "cart" */
    console.log(productos);
    //condicion para que no carge todas las tarjetas
    if (productos && productos.length > 0) {
        //itera sobre el producto, se asigna a la variable Element
        productos.forEach(element => {
            /* Primero hay que revisar si ya hay un producto existente */
            const productId = element.id;
            const existingProduct = document.querySelector(`#product-${productId}`);
            if (existingProduct) {
                /* Si ya existe */
                updateCounter(productId, true);
            } else {
                /*  */

                //para crear un contenedor por cada producto, una tarjeta individual
                const nuevoProducto = document.createElement("div");
                nuevoProducto.id = `product-${productId}`;
                nuevoProducto.classList = "tarjeta-producto mb-4 w-100 border rounded p-3"; //para asignar la clase al div
                //para insertar un bloque dentro del div, imagen,titulo, descripcion y el precio 
                //no aparece la seccion en el html, 
                /* Como decias llamas mal a los atributos, ponias producto, y es con el metodo element */


                nuevoProducto.innerHTML = `
                <div class="container-fluid p-0">
                    <div class="row g-3 justify-content-center align-items-center">
                        <div class="col-12 col-md-3 text-center">
                            <img src="${element.image}" class="img-fluid mx-auto d-block" style="max-height: 120px;" alt="${element.title}"/>
                        </div>
                        <div class="col-12 col-md-3 text-center">
                            <h5 class="mb-0">${element.title}</h5>
                        </div>
                        <div class="col-12 col-md-2 text-center">
                            <p class="mb-0">${element.price}</p> 
                        </div>
                        <div class="col-12 col-md-2 text-center">
                            <div class="d-flex justify-content-center align-items-center">
                                <button id="decrease-btn-${productId}" class="btn btn-outline-secondary" onclick="updateCounter('${productId}', false)"><i class="fas fa-arrow-down"></i></button>
                                <span id="counter-value-${productId}" class="mx-2">1</span>
                                <button id="increase-btn-${productId}" class="btn btn-outline-secondary" onclick="updateCounter('${productId}', true)"><i class="fas fa-arrow-up"></i></button>
                            </div>
                        </div>
                        <div class="col-12 col-md-2 text-center">
                            <button class="btn btn-danger btn-delete" onclick="handleDelete('${productId}')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                </svg>
                            </button>    
                        </div>
                    </div>
                </div>
            `;
                contenedorTarjetas.appendChild(nuevoProducto); //cuando la tarjeta este lista de nuevoProducto se deb agregar al contenedor principal, contenedorTarjetas
                //nuevoProducto
                //la funcion de los botones
            }

        });
    }
}
/* Solo debes llamar la funcion sin darle parametros */
//se ejecuta el crear productos
crearTarjetasProductos();
