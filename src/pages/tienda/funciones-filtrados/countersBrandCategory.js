export default function counters(filteredProducts) {
    let categoryCounter = {};
    let brandCounter = {};
    
    filteredProducts.forEach(product => {
      categoryCounter  [product.category] = (categoryCounter [product.category] || 0) + 1;
      brandCounter[product.marca] = (brandCounter[product.marca] || 0) + 1;
    });
    //console.log(categoryCounter,brandCounter);

    document.querySelectorAll(".category").forEach((checkbox) => {
      let count = categoryCounter  [checkbox.value] || 0;
      //console.log(count);
      let counterElement = checkbox.parentElement.querySelector(".categoryCounter");
      //console.log(counterElement);
      if (counterElement) {
        counterElement.textContent = `${count}`;
      }
    });
  
    document.querySelectorAll(".brand").forEach((checkbox) => {
      let count = brandCounter[checkbox.value] || 0;
      let counterElement = checkbox.parentElement.querySelector(".brandCounter");
      if (counterElement) {
        counterElement.textContent = `${count}`;
      }
    });
  }