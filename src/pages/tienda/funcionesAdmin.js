const product = [];
const getProdutcs = async (URL) => {
    const plainProducts = await fetch(URL)
    const objectProducts = await plainProducts.json();
    product = objectProducts;
    return product;
};

const addProduct = (id, title, marca, petType, image, price, description, category, color, size) =>{
    const newProduct ={
        id,
        title,
        marca,
        petType,
        image,
        price,
        description,
        category,
        color,
        size
    }
    product.push(newProduct);
    return newProduct;
};

const deleteProdut = (id) =>{
    const productDeleted = product.filter((product)=>Number(product.id) === Number(id));
    return productDeleted;
};

const modifyProduct = (id, title, marca, petType, image, price, description, category, color, size) =>{
    product.map((product)=>{
        if(product.id === id){
            {
          /* product.title = title,
            product.marca: marca,
            product.petType: petType,
            product.image: image,
            product.price: price,
            product.description: description,
            product.category: category,
            product.color: color,
            product.size: size */
        }
           /*  {...product,[title]: title, [marca]:marca, []} */
        }
    })
    product.push(newProduct);
    return newProduct;
};

getProdutcs("/public/json/productos.json");
console.log(product);
addProduct(45,"Gorra de playa", "Adidas", "Perros", "", 153, "Para el sol", "Juguetes", "Azul", "N/A" );
deleteProdut(1);





/* fetch("/public/json/productos.json")
    .then((productos) => productos.json())
    .then((productos) => {
        $seccionCards.innerHTML = productos
      .map((card) => createCards(card))
      .join("");
      });  */