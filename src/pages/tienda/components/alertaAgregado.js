const $alertaCompra = document.getElementById("alerta-compra");

export default function alertaAgregado() {
  $alertaCompra.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" class="d-none">
    <symbol id="check-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
    </symbol>
  </svg>
  <div class="alert alert-success alerta-flotante d-flex align-items-center" role="alert">
    <svg class="bi flex-shrink-0 me-2" width="24" height="24" fill="currentColor" role="img" aria-label="Success:">
      <use xlink:href="#check-circle-fill"/>
    </svg>
    <span>Producto agregado al carrito</span>
  </div>`;

  const alerta = document.querySelector(".alerta-flotante");
  setTimeout(() => {
    alerta.style.opacity = "0";
    setTimeout(() => {
      alerta.remove();
    }, 500);
  }, 2000);
}
