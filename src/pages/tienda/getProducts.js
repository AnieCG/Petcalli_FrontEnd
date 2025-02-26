
export default async function getJson(URL) {
    const plainProducts = await fetch(URL);
    const objectProducts = await plainProducts.json();
    return objectProducts;
  }
 
