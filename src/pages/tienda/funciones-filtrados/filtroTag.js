export default function filtradoTag(products, input) {
  const buttonTag = input.id.slice(3);

  return (products = products.filter(
    (product) =>
      product.description.includes(buttonTag) ||
      product.title.includes(buttonTag) ||
      product.category.includes(buttonTag)
  ));
}
