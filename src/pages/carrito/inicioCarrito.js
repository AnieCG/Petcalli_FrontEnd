// hay que declarar el mini json
const productos = [
    {
        "id": 35,
        "title": "Alimento para Tortuga Acuática",
        "marca": "Zoo Med",
        "petType":"Otros",
        "image": "https://www.petco.com.mx/medias/?context=bWFzdGVyfGltYWdlc3w3OTI5M3xpbWFnZS9qcGVnfGltYWdlcy9oNDkvaDA2LzkzNTM0NTg2MTQzMDIuanBnfGY0YWQxYjk3ZTkzMDg1MWRjNWYyMWM5ODIxNGY4NmNlMjgwOGJmODc5YzRjOTIyYjM3ZGUwNTY2ZTU5OTQxZjc",
        "price": "$360.05",
        "description": "Zoo Med Growth Formula Alimento para Tortuga Acuática, 850 g.",
        "category":"Alimento",
        "color":"NA",
        "size": "850 g"
      },
      {
        "id": 1,
        "title": "Mother & Babycat Comida Seca",
        "marca": "Royal Canin",
        "petType": "Gato",
        "image": "https://cdn.royalcanin-weshare-online.io/rz_NTIcBRYZmsWpcJPUx/v56/00030111450036-cf-gs1?w=640&fm=jpg&auto=format,compress",
        "price": "$610.00",
        "description": "Nutricion completa y balanceada para gatos en gestion y lactancia, así como para sus cachorros (de 1 a 4 meses de edad) durante el destete.",
        "category": "Alimento",
        "color": "NA",
        "size":"1.3 kg"
      },
      {
        "id": 32,
        "title": "Gourmet Reptisticks Alimento para Tortuga en Pellet",
        "marca": "Zoo Med",
        "petType":"Otros",
        "image": "https://www.petco.com.mx/medias/?context=bWFzdGVyfGltYWdlc3w5MTAyMnxpbWFnZS9qcGVnfGltYWdlcy9oMzgvaDQ3Lzk0MDAxMTYzMTQxNDIuanBnfDQ0MmM1NDlhNGE4MWU5ZjY0Mzg0MjIzOGJlNDg0ZGQ3NzFlMDMwYmQ4NzBjNjcxNWUwYzRkNDJlZTEyMDAwNGM",
        "price": "$217.55",
        "description": "Zoo Med Gourmet Reptisticks Alimento en Pellet para Tortuga Acuática, 128 g.",
        "category":"Alimento",
        "color":"NA",
        "size": "128 g"
      },
      {
        "id": 36,
        "title": "Food Topper para Tortugas",
        "marca": "Zoo Med",
        "petType":"Otros",
        "image": "https://www.petco.com.mx/medias/300ftw-127168.jpg?context=bWFzdGVyfHJvb3R8NzQ0NjB8aW1hZ2UvanBlZ3xoYTMvaDEzLzEwNzQxNDQ5NDI0OTI2LzMwMGZ0d18xMjcxNjguanBnfGRkNTgyYzYxNTViY2ZmZmRkOWViNWViMjg5Mzk4MDEwM2JiMGNkYmJlZTE3YmE3NWI2YWEwNTViMDE3ZmQ2NGE",
        "price": "$160.55",
        "description": "Zoo Med Flower Food Topper Mezcla de Flores para Tortuga, 40 g.",
        "category":"Alimento",
        "color":"NA",
        "size": "40 g"
      },
      {
        "id": 40,
        "title": "Condo con Cojín Extraíble",
        "marca": "EveryYay",
        "petType":"Gato",
        "image": "https://www.petco.com.mx/medias/133549.jpg-300ftw?context=bWFzdGVyfHJvb3R8MTI0Mzd8aW1hZ2UvanBlZ3xoM2YvaDQyLzEwMDA4NDU2MTM0Njg2LzEzMzU0OS5qcGdfMzAwZnR3fGI2NDlkZDdmZDRkMThkNjU1ZTA1ZDQ5NWQ3OGMxNDYzZGRjMGZmNDkxM2M2M2E5MzI2ZjFlYjczZDVlMjU0NDQ",
        "price": "$779.40",
        "description": "Secret Hideout Condo Century con Cojín Extraíble para Gato.",
        "category": "Accesorios",
        "color":"Gris",
        "size": "NA"
      },
      {
        "id": 45,
        "title": "Bolas Rodadoras para Pequeñas Mascotas",
        "marca": "Oxbow",
        "petType": "Conejo",
        "image": "https://www.petco.com.mx/medias/133191.jpg-300ftw?context=bWFzdGVyfHJvb3R8NjI5MTV8aW1hZ2UvanBlZ3xoYjcvaDVmLzk1NzU1MzcwNDk2MzAuanBnfDcxYTU3NmQ0Y2U4MzA2NjFiZGJmMGFlYTg5ODY0OTliZDJlNzFjOGU5YzJmMzRkYTVjZThlNTkxODYwZTMyNTA",
        "price": "$161.50",
        "description": "Oxbow Enriched Life Bolas Rodadoras para Pequeñas Mascotas.",
        "category": "Juguetes",
        "color":"NA",
        "size": "NA"
      },
      {
        "id": 47,
        "title": "Túnel",
        "marca": "Ware",
        "petType": "Conejo",    
        "image": "https://www.petco.com.mx/medias/?context=bWFzdGVyfGltYWdlc3w1MjI5MHxpbWFnZS9naWZ8aW1hZ2VzL2gwMy9oNGQvODg0ODEwMzU3MTQ4Ni5naWZ8MjYyMjhiMjJkY2U4ODY3ZTA0NjI1ZGY0YzU4N2MzMGQ2ZWE5YjVjMGZkNWQ3YzY4NzMzNzMyNzc0ODE2NzI1Nw",
        "price": "$289.75",
        "description": "Ware Túnel, XX-Grande.",
        "category": "Juguetes",
        "color":"NA",
        "size": "NA"
      },
      {
        "id": 25,
        "title": "Alimento Seco Natural Salmón Libre de Granos",
        "marca": "Bravery",
        "petType":"Gato",
        "image": "https://www.petco.com.mx/medias/300ftw-143666.jpg?context=bWFzdGVyfHJvb3R8NTg1Nzd8aW1hZ2UvanBlZ3xoM2EvaGQ1LzEwODAxNzQ1NTU5NTgyLzMwMGZ0d18xNDM2NjYuanBnfDQ2ZWIzMDlkZGM2YjdjMjhkMWI5YTUyNDdhMDkxOTAxYTlhY2I2M2M0YzAyNTNjMTE5NWYzZDZlZTY2NDdhZDY",
        "price": "$450.00",
        "description": "Alimento Seco Natural Libre de Granos para Gato Adulto Receta Salmón, 2 kg.",
        "category":"Alimento",
        "color":"NA",
        "size": "2 kg"
      },
      {
        "id": 15,
        "title": "Medium Puppy",
        "marca": "Royal Canin",
        "petType": "Perro",
        "image": "/public/images/Royal Canin.png",
        "price": "$1,505.00",
        "description": "Nutrición completa y equilibrada para cachorros de raza mediana. Hasta 12 meses.",
        "category": "Alimento",
        "color":"NA",
        "size":"7.7 kg"
      },
      {
        "id":22,
        "title": "Hill's Prescription Diet",
        "image": "/public/images/Hills.png",
        "price": "$2,080.50",
        "descripcion": "Hill's Prescription Diet i/d Alimento Seco Gastrointestinal para Perro Adulto, 8 kg"
      },
      {
        "id": 19,
        "title": "Maltés Adulto Comida Seca",
        "marca": "Diamond",
        "petType": "Perro",
        "image": "/public/images/Diamond.png",
        "price": "$510.00",
        "description": "Está formulado exclusivamente para dálmatas de pura raza mayores de 15 meses.",
        "category": "Alimento",
        "color":"NA",
        "size":"1.1 kg"
      },

];

// que guarde el carro en el local para que se pueda manipular lo que se hace
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


function agregarAlCarrito(idProducto) {
    const producto = productos.find(p => p.id === idProducto);
    
    if (producto) {
        const productoEnCarrito = carrito.find(p => p.id === idProducto);
        if (productoEnCarrito) {
            productoEnCarrito.cantidad++;  // si ya se agregó antes, se aumenta la cantidad que hay
        } else {
            carrito.push({ ...producto, cantidad: 1 });  // si no hay, lo agrega 
        }

        // Guardamos el carrito en localStorage y los productos que se seleccionan
        localStorage.setItem("productos", JSON.stringify(productos));
        localStorage.setItem("carrito", JSON.stringify(carrito));

        actualizarCarrito();
    }
}

// Capturar todos los botones de compra
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".btn-comprar").forEach(button => {
        button.addEventListener("click", (e) => {
            const id = parseInt(e.target.getAttribute("data-id"));
            agregarAlCarrito(id);
        });
    });
});

// se va a reflejar en la pag de carro
function actualizarCarrito() {
    const carritoContainer = document.getElementById("carrito-container");
    carritoContainer.innerHTML = ""; 

    carrito.forEach(producto => {
        const item = document.createElement("div");
        item.classList.add("carrito-item");
        item.innerHTML = `
            <img src="${producto.image}" width="50">
            <span>${producto.title}</span>
            <span>${producto.cantidad} x $${producto.price}</span>
            <button class="btn-remove" data-id="${producto.id}">Eliminar</button>
        `;
        carritoContainer.appendChild(item);
    });

    
    document.querySelectorAll(".btn-remove").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = parseInt(e.target.getAttribute("data-id"));
            eliminarDelCarrito(id);
        });
    });
}

// elimina pero no agrega producto o solo elimina uno*****
function eliminarDelCarrito(idProducto) {
  
    carrito = carrito.filter(p => p.id !== idProducto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarCarrito();
}
document.addEventListener("DOMContentLoaded", actualizarCarrito);







document.addEventListener("DOMContentLoaded", function () {

  const botonesComprar = document.querySelectorAll(".btn-comprar");

  botonesComprar.forEach((boton) => {
      boton.addEventListener("click", function () {
          boton.textContent = "Añadido";
          boton.style.backgroundColor = "#e07a5f"; 
          boton.style.color = "white";
      });
  });
});
