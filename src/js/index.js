// en el index se agrega el id a las cards
// hay que declarar el mini json
const productos = [
    {
      id: 20,
      title: "Alimento Seco Natural Salmón Libre de Granos para Todas las Edades",
      marca: "Instinct Original",
      petType: "Perro",
      image:
        "https://www.petco.com.mx/medias/114128.jpg-1200ftw?context=bWFzdGVyfHJvb3R8NTI5NjE3fGltYWdlL2pwZWd8aGNhL2gwZi85ODM1NDE4NjE1ODM4LzExNDEyOC5qcGdfMTIwMGZ0d3xlYTQ5N2Y0NWRiZDBmMGYyNjBjNTE0NTM4MWM0Njc4MzcxMmFjZWNjMzIxOTg4Njc1NzIyN2M3NjhkN2JlYTI5",
      price: "$2,700.00",
      description:
        "Receta de Salmón, alimentación Premium 100% natural. 70% de ingredientes animales y 30% de verduras, frutas y otros ingredientes saludables. No contiene granos ni gluten. ",
      category: "Alimento",
      color: "NA",
      size: "9 kg",
    },
    {
      id: 87,
      title: "Premium Alimento para Conejo Adulto",
      marca: "Cunipic",
      petType: "Conejo",
      image:
        "https://www.petco.com.mx/medias/300ftw-114755.jpg?context=bWFzdGVyfHJvb3R8NjcwOTF8aW1hZ2UvanBlZ3xoYTIvaGY1LzEwNjQ2MTIxNzA5NTk4LzMwMGZ0d18xMTQ3NTUuanBnfGNmN2EyMjY5YzY1ZGY5NmZkNDNkMTAzNWU5ZGZmODFhOWVlOTIxMjFmZGEyMjFmMTZiZDZhNmY4OTU0Y2E2NjM",
      price: "$463.25",
      description:
        "Formula especial para satisfacer las necesidades nutricionales de los conejos adultos, promoviendo su salud general.",
      category: "Alimento",
      color: "NA",
      size: "5kg",
    },
    {
      id: 190,
      title:
        "Ultra Fresh Pellet Premium Alimento Natural Tipo Pellet Flotante para Peces Dorados",
      marca: "Azoo",
      petType: "Peces",
      image:
        "https://www.petco.com.mx/medias/?context=bWFzdGVyfGltYWdlc3w2Mzc2NnxpbWFnZS9qcGVnfGltYWdlcy9oNmMvaGY4Lzk0MDAwNzIzMDY3MTguanBnfDRlYjVmZDk5NGQ4Mjg0MjAzNzk2MDdhNWQ1ZDgxYzVjY2Y3MzYyZDY3NWU2NzE5MTk5ZmJmYWFmY2E4OTliNTA",
      price: "$517.75",
      description: "Proporciona una dieta rica y balanceada.",
      category: "Alimento",
      color: "NA",
      size: "425 g",
    },
    {
      id: 9,
      title: "Cuidado De Peso Comida Seca",
      marca: "Royal Canin",
      petType: "Gato",
      image:
        "https://cdn.royalcanin-weshare-online.io/fOd3TYcBaPOZra8qUPya/v64/00030111442703f-cf-gs1?w=640&fm=jpg&auto=format,compress",
      price: "$590.00",
      description:
        "Nutrición completa y balanceada para gatos adultos, formulada para ayudar a mantenerles saludable el tracto urinario.",
      category: "Alimento",
      color: "NA",
      size: "1.5 kg",
    },
    {
      id: 31,
      title: "Tortoise Diet",
      marca: "Mazuri",
      petType: "Otros",
      image:
        "https://www.petco.com.mx/medias/127514.jpg-300ftw?context=bWFzdGVyfHJvb3R8NTAyMzl8aW1hZ2UvanBlZ3xoOGYvaDY5LzEwMDg1MDM3OTk4MTEwLzEyNzUxNC5qcGdfMzAwZnR3fGY2ODdiN2EzOWY2YTlhZDY0Y2QyNTFmNzcxMjQwMTk2YmQ2YzY0Yzk3ZWZkMGIxY2IwNzFlZmFjOWIyNTcwNmQ",
      price: "$232.75",
      description: "Alimento en Pellet para Tortuga, 500 g.",
      category: "Alimento",
      color: "NA",
      size: "500 g",
    },
    {
      id: 45,
      title: "Bolas Rodadoras para Pequeñas Mascotas",
      marca: "Oxbow",
      petType: "Conejo",
      image:
        "https://www.petco.com.mx/medias/133191.jpg-300ftw?context=bWFzdGVyfHJvb3R8NjI5MTV8aW1hZ2UvanBlZ3xoYjcvaDVmLzk1NzU1MzcwNDk2MzAuanBnfDcxYTU3NmQ0Y2U4MzA2NjFiZGJmMGFlYTg5ODY0OTliZDJlNzFjOGU5YzJmMzRkYTVjZThlNTkxODYwZTMyNTA",
      price: "$161.50",
      description: "Oxbow Enriched Life Bolas Rodadoras para Pequeñas Mascotas.",
      category: "Juguetes",
      color: "NA",
      size: "NA",
    },
    {
      id: 68,
      title: "NutriBird G14 Alimento para Loros Medianos",
      marca: "Versele-Laga",
      petType: "Aves",
      image:
        "https://www.petco.com.mx/medias/118334.jpg-300ftw?context=bWFzdGVyfHJvb3R8Mjc1NjV8aW1hZ2UvanBlZ3xoMGYvaDA3LzEwMzc0MzExNjczODg2LzExODMzNC5qcGdfMzAwZnR3fGZmZGVjMWE0NWRhNjRjZjJhZTlhYmQ5MjBlYzE2NjNmZDJjMmI0MWYyZGM2OTQ3Y2JjN2ViOGM3ODJiMWRmYjU",
      price: "$441.75",
      description:
        "NutriBird G14 es un alimento balanceado especialmente formulado para loros medianos, asegurando una nutrición completa y equilibrada",
      category: "Alimento",
      color: "NA",
      size: "1kg",
    },
    {
      id: 112,
      title: "Mueble para Gato Tipo Árbol Múltiples Texturas",
      marca: "EveryYay",
      petType: "Gato",
      image:
        "https://www.petco.com.mx/medias/300ftw-132572.jpg?context=bWFzdGVyfHJvb3R8MzEyMjd8aW1hZ2UvanBlZ3xoYTkvaGJkLzEwNjA2NDM2NzEyNDc4LzMwMGZ0d18xMzI1NzIuanBnfDZhOGRkZjIxOWQ2YTgwNTIwZTI0NmQ1YWJmNzVlY2M2ZDNjNTAxM2U1ZTg3YWRiNGMzMjNiZGQ0OWNkODMxMjA",
      price: "$2,024.25",
      description:
        "Un árbol para gatos con múltiples texturas que mantendrá a tu felino entretenido y feliz.",
      category: "Accesorios",
      color: "NA",
      size: "NA",
    },
    {
      id: 132,
      title: "Shampoo Terapéutico para Perro y Gato",
      marca: "Vetriderm",
      petType: "Perro",
      image:
        "https://www.petco.com.mx/medias/300ftw-116477.jpg?context=bWFzdGVyfHJvb3R8MTg5MjJ8aW1hZ2UvanBlZ3xoZjAvaDE0LzEwODk2NTA2OTQ1NTY2LzMwMGZ0d18xMTY0NzcuanBnfDVlNjI5ZDgxN2Y2M2Q2YWJkNzQ3YmIyYzEzMzliZTM1ZjAxNTU2NzI2YmQ4YWU0MWU4NWU1MGExZWUzYTVhZWI",
      price: "$227.29",
      description:
        "Shampoo terapéutico para perros y gatos. Ayuda a tratar problemas de piel y mantiene el pelaje saludable.",
      category: "Medicamentos",
      color: "NA",
      size: "350 ml",
    },
    {
      id: 157,
      title: "Tronco de Madera Decorativa para Terrarios",
      marca: "Zoo Med",
      petType: "Otros",
      image:
        "https://www.petco.com.mx/medias/300ftw-115301.jpg?context=bWFzdGVyfHJvb3R8NDU2MzR8aW1hZ2UvanBlZ3xoYzgvaGQ5LzEwNjA2Mzg1MTY4NDE0LzMwMGZ0d18xMTUzMDEuanBnfDA3NzQyZTc4ZDlhNDZmNzI4ZmQwNGMyZDdlYWFiNjAwY2UwZDA0MmNjMWNiY2JmZGMzNzc3NmE5OGRjMGJjOGE",
      price: "$259.00",
      description:
        "Tronco de madera decorativa para terrarios en tamaño mediano. Añade un toque natural al hábitat de tus reptiles.",
      category: "Accesorios",
      color: "NA",
      size: "30.40 cm Largo x 25.40 cm Ancho",
    },
    {
      id: 223,
      title: "Pelota Ultra de Goma para Perro",
      marca: "Chuckit!",
      petType: "Perro",
      image:
        "https://www.petco.com.mx/medias/104312.jpg-300ftw?context=bWFzdGVyfHJvb3R8MTE4MzM1fGltYWdlL2pwZWd8aGYwL2hjZi8xMDAxNzA2MTczMjM4Mi8xMDQzMTIuanBnXzMwMGZ0d3xmM2NlMTMxZDdjMTY2YjRhODVhZmE1OWJhZDdhZmYxMTFmOGIzYzI4N2EzMTM0ZjlmMmIyZWZlODA4OTk0MzAy",
      price: "$179.00",
      description:
        "Pelota Ultra de goma Chuckit!, ideal para juegos de lanzar y recoger, con un rebote alto y material duradero.",
      category: "Juguetes",
      color: "NA",
      size: "Grande",
    },
  ];
  
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".btn-comprar").forEach((boton) => {
      boton.addEventListener("click", function () {
        boton.textContent = "Añadido";
        boton.style.backgroundColor = "#3d405b";
        boton.style.color = "white";
        boton.style.margin = "0 30px 0 0";
      });
    });
  }); 
  
  //Función para insertar los productos premium en index.html
  const insertPremiumCards = () => {
  // Buscar el contenedor donde estarán los productos
  const premiumCardsContainer = document.querySelector(".cardsPremium");
  //Si exiten los productos, entonces...
  if (premiumCardsContainer) {
  //Solo me va a mostrar los 3 primeros productos del miniJson
  const productsPremium = productos.slice(0, 3);
  // Crear una tarjeta de producto de forma dinámica
  productsPremium.forEach((producto) => {
  //Creación de la etiqueta div para insertar las cartas
  const productCard = document.createElement("div");
  //Creación de las clases con los atributos de bootstrap
  productCard.classList.add("col", "pb-5");
  //Insertar el html en el DOM
     productCard.innerHTML = `
          <div class="card mx-auto product">
            <img src="${producto.image}" class="card-img-top bg-white cards-products openModalImage" alt="${producto.title}">
            <div class="card-body row container-body-product">
              <div class="col-12">
                <h5 class="card-title text-dark title-product">${producto.title}</h5>
                <div class="d-flex justify-content-between">
                  <p class="card-text text-start price-text">${producto.price}</p>
                 <button type="button" data-producto='${JSON.stringify(producto)}'producto-id="#${producto.id}" class="  comprar-button btn-comprar agregar-carrito">Añadir a carrito</button>
                </div>
              </div>
            </div>
          </div>
        `; 
  // En mi contendedor estoy insertando después del último cada una de mis cartas
       premiumCardsContainer.appendChild(productCard);
      });
    } 
  // fuera de mi IF en la función insertPremiumCards, inserto el modal(popup)
  //Llamando a su respectivo producto como lo hace la función createModal
     createModal(productos);
  }; 
  // Se manda a llamar a la función insertPremiumCards pa' que funcione
   insertPremiumCards();
  
  // Crear una función que detecte el click para que abra el modal e inserte el contenido en el DOM
  function createModal(productos) {
  // Variable de bootstrap para traer al contenedor del modal con una instancia
  const modal = new bootstrap.Modal(document.getElementById("cardModal"));
  // Busca todos los elementos del DOM que contengan la clase openModalImage línea 268 de este JS
  const openModalImages = document.querySelectorAll(".openModalImage");
  
  // Iterar sobre cada imagen
  openModalImages.forEach((image, index) => {
  //La imagen tiene un escuchador de evento que al hacer click...
  image.addEventListener("click", () => {
  // Selecciona el producto correspondiente al índice en el JSON que es igual al de la imagen
  const producto = productos[index];
  
  // Buscar el contenedor con la clase popup para poder generar el contenido en el DOM
  const modalBody = document.querySelector(".popup");
  // Se inserta el html
         modalBody.innerHTML = `
          <div class="card mx-auto popup-card">
            <img src="${producto.image}" class="card-img-top bg-white image-products" alt="${producto.title}">
            <div class="card-body">
              <h5 class="card-title title">${producto.title}</h5>                       
              <p class="card-text text-start text-products"><strong class="text-strong">Descripción:</strong> ${producto.description}</p>  
              <div class="container"> 
                <div class="row">               
                  <p class="card-text col text-start text-products"><strong class="text-strong">Precio:</strong> ${producto.price}</p>
                  <p class="card-text col text-start text-products"><strong class="text-strong">Marca:</strong> ${producto.marca}</p> 
                </div>
                <div class="row">         
                  <p class="card-text col text-start text-products"><strong class="text-strong">Mascota:</strong> ${producto.petType}</p>
                  <p class="card-text col text-start text-products"><strong class="text-strong">Categoría:</strong> ${producto.category}</p>
                </div>
                <div class="row"> 
                  <p class="card-text col text-start text-products"><strong class="text-strong">Color:</strong> ${producto.color}</p>
                  <p class="card-text col text-start text-products"><strong class="text-strong">Tamaño:</strong> ${producto.size}</p>
                </div>
              </div>
            </div>
          </div>
        `; 
  
  // Mostrar el modal de bootstrap, con su método show() de bootstrap para mostrarlos
        modal.show();
      });
    });
  } 
  
  //Función para insertar los productos más vendidos en index.html
  const insertBestCardsProducts = () => {
  // Buscar el contenedor donde estarán los productos
    const premiumCardsContainer = document.querySelector(".best-card-products");
  //Si exiten los productos, entonces...
   if (premiumCardsContainer) {
  //Solo me va a mostrar a partir del 3ro al último
    const productsPremium = productos.slice(3, 11);
  // Crear una tarjeta de producto de forma dinámica
  productsPremium.forEach((producto) => {
  //Creación de la etiqueta div para insertar las cartas
   const productCard = document.createElement("div");
  //Creación de las clases con los atributos de bootstrap
  productCard.classList.add("col", "pb-5");
  //Insertar el html en el DOM
         productCard.innerHTML = `
          <div class="card mx-auto product">
            <img src="${producto.image}" class="card-img-top bg-white cards-products openModalImage" alt="${producto.title}">
            <div class="card-body row container-body-product">
              <div class="col-12">
                <h5 class="card-title text-dark title-product">${producto.title}</h5>
                <div class="d-flex justify-content-between">
                  <p class="card-text text-start price-text">${producto.price}</p>
                  <button type="button" data-producto='${JSON.stringify(producto)}'producto-id="#${producto.id}" class="  comprar-button btn-comprar agregar-carrito">Añadir a carrito</button>
        
                  </div>
              </div>
            </div>
          </div>
        `; 
  // En mi contendedor estoy insertando después del último cada una de mis cartas
         premiumCardsContainer.appendChild(productCard);
      });
    } 
  // fuera de mi IF en la función insertPremiumCards, inserto el modal(popup)
  //Llamando a su respectivo producto como lo hace la función createModal
     createModal(productos);
  }; 
  // Se manda a llamar a la función insertPremiumCards pa' que funcione
  insertBestCardsProducts();