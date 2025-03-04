const categoryCounter = document.getElementsByClassName("categoryCounter");

let selectedCategories = [];

export default function filterProductsByCategory(products, input, index) {
  if (input.checked) {
    selectedCategories.push(input.value);
  } else {
    selectedCategories = selectedCategories.filter((category) => category !== input.value);
  }

  const count = products.filter(
    (product) => product.category === input.value
  ).length;

  categoryCounter[index].textContent = selectedCategories.includes(input.value)
    ? count
    : 0;
  return (products = products.filter((product) => {
    return selectedCategories.includes(product.category);
  }));
}

//Inicializar contadores en 0
Array.from(categoryCounter).forEach((counter) => {
  counter.textContent = 0;
});