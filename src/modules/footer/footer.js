const header = document.getElementById("footer");

const insertFooter = () => {
    const footer = document.getElementById("footer");
    footer.innerHTML = `


        <section>
        <div class="row">
            <div class="col-1">
                <!-- <p>Petcalli</p> -->
            </div>
            <div class="col" d-none d-sm-block>
                <img src="/public/images/Logo-shape.svg" alt="logo petcalli">
                <p style="font-size:12px" >"Porque en el corazón de nuestra tienda está el compromiso 
                    de cuidar a tu mascota tanto como tú lo haces”</p>
                <img src="/public/images/facebook.png" alt="logo facebook" class="redes-sociales">
                <img src="/public/images/instagram.png" alt="logo instagram" class="redes-sociales">
                <img src="/public/images/x.png" alt="logo x" class= "redes-sociales">
                <img src="/public/images/youtube.png" alt="logo youtube" class= "redes-sociales"> 
            </div>
            <div class="col d-none d-sm-block">
                <p><strong>Compañía</strong></p>
                <a href="#">Sobre Nosotros</a> <br>
                <a href="#">Reseñas</a> <br>
                <a href="#">Categorias</a>  <br>
                <a href="/src/pages/terminosyaviso/terminos.html"> Términos y Condiciones.</a>  <br>
                <a href="/src/pages/terminosyaviso/aviso.html"> Aviso de privacidad.</a>
            </div>
            <div class="col d-none d-sm-block">
                <p><strong>Links</strong></p>
                <a href="#">Productos Premium</a> <br>
                <a href="#">Productos más vendidos</a> <br>
                <a href="#">Servicios</a> <br>
                <a href="/src/pages/login/login_admi.html">Vendedor Petcalli</a>
                
            </div>
            <div class="col d-none d-sm-block">
                <p><strong>Servicio al cliente</strong></p>
                <a href="#">Contáctanos</a><br>
                <a href="#">Compras</a> <br>
                <a href="#">Devoluciones</a>
            </div>
            <div class="col d-none d-sm-block">
                <p><strong>Tienda</strong></p>
                <a href="#">Categoría por mascotas</a>
                <br>
                <a href="#">Más populares</a><br>
                <img src="/public/images/visa.png" alt="logo visa" class = "metodos-pago">
                <img src="/public/images/americanexpress.png" alt="logo americanexpress" class = "metodos-pago" >
                <img src="/public/images/mastercard.png" alt="logo mastercard" class = "metodos-pago"  >
                <img src="/public/images/paypal.png" alt="logo paypal" class = "metodos-pago" >
            </div>
            <div class="col-12 d-none d-sm-block">
        <p class= "copyright" >&copy; Copyright Pet Shop  2025. Design by Figma. guru</p>
    </div>
           
            </div>
        </div>
    </section>
    
    `;
};

insertFooter();
