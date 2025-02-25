const createCards = (producto) => {
  return `
      
      <div class="card h-150 m-2" style="width:16rem;">
        <img
          src="${producto.image}"
          class="card-img-top"
          alt="Imagen de producto"
          id="image"
          />
          <div class="card-body">
          <h5 class="card-title" id="nombre-producto">${producto.title}</h5>
          <p>${producto.description}</p>
          <p id="precio">${producto.price}</p>
          <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#${producto.id}"
          >Ver producto</button>
          </div>
      </div>
  
  `;
};

export default function filtradoPorPrecio(seccionCards, inputs, priceValue) {
  Array.from(inputs).forEach((input, index) => {
    input.addEventListener("input", function () {
      let maxPrice = parseInt(this.value);
      Array.from(priceValue)[index].textContent = `$ ${maxPrice}`;
      console.log(Array.from(priceValue)[index]);

      fetch("/public/json/productos.json")
        .then((products) => products.json())
        .then((products) => {
          const productsToShow = products.filter((product) => {
            let productPrice = parseFloat(product.price.replace(/[$,]/g, ""));
            return productPrice <= maxPrice;
          });

          const productsMayorMenor = productsToShow.sort(
            (a, b) =>
              parseFloat(b.price.replace(/[$,]/g, "")) -
              parseFloat(a.price.replace(/[$,]/g, ""))
          );

          return (seccionCards.innerHTML = productsMayorMenor
            .map((card) => createCards(card))
            .join(""));
        });
    });
  });
}
