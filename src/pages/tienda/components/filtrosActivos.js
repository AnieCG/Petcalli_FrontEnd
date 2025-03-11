const $filtrosActivos = document.getElementById("filtros-pastillas");
export default function filtrosActivos(selectedFiltros) {
  console.log(selectedFiltros);

  return ($filtrosActivos.innerHTML = `
    <div class="d-flex flex-wrap gap-3 mb-2">
    <span class="badge bg-primary fs-5 p-2">${selectedFiltros.category}</span>
    <span class="badge bg-secondary fs-5 p-2">${
      selectedFiltros.petType !== null ? selectedFiltros.petType : ""
    }</span>
    <span class="badge bg-success fs-5 p-2"">${
      selectedFiltros.brand !== null ? selectedFiltros.brand : ""
    }</span>
    <span class="badge bg-info fs-5 p-2">${
      selectedFiltros.price !== 0 && selectedFiltros.price !== null
        ? "$" + selectedFiltros.price
        : ""
    }</span>
</div>
    `);
}
