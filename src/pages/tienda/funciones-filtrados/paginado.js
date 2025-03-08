// Este módulo se encarga de la paginación
export function showPage(page, itemsPerPage, filteredProducts) {
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredProducts.slice(start, end);
}

export function updatePagination(page, filteredProducts, itemsPerPage, $prevPageButton, $nextPageButton, $pageNumberDisplay) {
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  $pageNumberDisplay.textContent = page;

  $prevPageButton.disabled = page === 1;
  $nextPageButton.disabled = page * itemsPerPage >= filteredProducts.length;

  return totalPages;
}
