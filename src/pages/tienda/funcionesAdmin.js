let Arrayproducts = [];

class Producto {
  constructor(
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
  ) {
    this.id = id;
    this.title = title;
    this.marca = marca;
    this.petType = petType;
    this.image = image;
    this.price = price;
    this.description = description;
    this.category = category;
    this.color = color;
    this.size = size;
  }
}

// Funciones para modificar la clase producto

async function getJson(URL) {
  const plainProducts = await fetch(URL);
  const objectProducts = await plainProducts.json();
  Arrayproducts = objectProducts;
}
const getProducts = () => {
  return Arrayproducts;
};

const addProduct = (
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
) => {
  const newProduct = {
    id,
    title,
    marca,
    petType,
    image,
    price,
    description,
    category,
    color,
    size,
  };
  Arrayproducts.push(newProduct);
  return newProduct;
};

const deleteProdut = (id) => {
  const productoEliminado = Arrayproducts.find((product) => product.id == id);
  Arrayproducts = Arrayproducts.filter((product) => product.id !== id);
  return productoEliminado;
};

const modifyProduct = (
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
) => {
  Arrayproducts = Arrayproducts.map((producto) => {
    if (producto.id == id) {
      return (producto = {
        id,
        title,
        marca,
        petType,
        image,
        price,
        description,
        category,
        color,
        size,
      });
    } else {
      return producto;
    }
  });
  return Arrayproducts.find((product) => product.id == id);
};
 
getJson("/public/json/productos.json").then(() => {
  console.log(getProducts());
  console.log(
    addProduct(
      45,
      "pollo",
      "sin titulo",
      "pollo",
      "https:",
      "$1200",
      "pollo cama",
      "pollo",
      "gris",
      "grande"
    )
  );
  console.log(getProducts());
  console.log(deleteProdut(34));
  console.log(getProducts());
  console.log(
    modifyProduct(
      2,
      "cuyo",
      "sin titulo",
      "cuyo",
      "https:",
      "$1500",
      "cuyo cama",
      "cuyo",
      "gris",
      "grande"
    )
  );
  console.log(getProducts());
});
export{
  addProduct, getJson, getProducts, deleteProdut, modifyProduct
};
