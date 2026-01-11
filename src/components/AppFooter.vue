<template>
  <footer class="footer">
    <div class="container">
      <!-- Newsletter Section -->
      <div class="newsletter-row">
        <div class="newsletter-content">
          <h3>Suscríbete a nuestro Boletín.</h3>
          <p>Sé el primero en enterarte de las últimas ofertas.</p>
        </div>
        <div class="newsletter-form">
          <input type="email" placeholder="Tu Correo Electrónico" />
          <button class="btn btn-primary subscribe-btn">Suscribirse</button>
        </div>
      </div>

      <div class="footer-grid">
        <div class="footer-col">
          <h4>Información</h4>
          <ul>
            <li><a href="#">Sobre Nosotros</a></li>
            <li><a href="#">Sobre Zip</a></li>
            <li><a href="#">Privacidad</a></li>
            <li><a href="#">Buscar</a></li>
            <li><a href="#">Términos</a></li>
            <li><a href="#">Pedidos y Devoluciones</a></li>
            <li><a href="#">Contáctanos</a></li>
            <li><a href="#">Búsqueda Avanzada</a></li>
            <li><a href="#">Suscripción al Boletín</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Partes de PC</h4>
          <ul>
            <li><a href="#">CPUs</a></li>
            <li><a href="#">Tarjetas de Expansión</a></li>
            <li><a href="#">Discos Duros (Internos)</a></li>
            <li><a href="#">Tarjetas Gráficas</a></li>
            <li><a href="#">Teclados / Ratones</a></li>
            <li><a href="#">Gabinetes / Fuentes / Ventilación</a></li>
            <li><a href="#">Memoria RAM</a></li>
            <li><a href="#">Software</a></li>
            <li><a href="#">Altavoces / Auriculares</a></li>
            <li><a href="#">Placas Base</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>PCs de Escritorio</h4>
          <ul>
            <li><a href="#">PCs Personalizadas</a></li>
            <li><a href="#">Servidores</a></li>
            <li><a href="#">PCs MSI All-In-One</a></li>
            <li><a href="#">PCs HP/Compaq</a></li>
            <li><a href="#">PCs ASUS</a></li>
            <li><a href="#">PCs Tecs</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Portátiles</h4>
          <ul>
            <li><a href="#">Portátiles de Uso Diario</a></li>
            <li><a href="#">Workstations MSI</a></li>
            <li><a href="#">Serie MSI Prestige</a></li>
            <li><a href="#">Tablets y Pads</a></li>
            <li><a href="#">Netbooks</a></li>
            <li><a href="#">Portátiles Gaming Infinity</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Dirección</h4>
          <p>Dirección: Calle Falsa 1234, Ciudad, 1234</p>
          <p>Teléfonos: (00) 1234 5678</p>
          <p>Horario: Lunes-Jueves: 9:00 AM - 5:30 PM</p>
          <p>Viernes: 9:00 AM - 6:00 PM</p>
          <p>Sábado: 11:00 AM - 5:00 PM</p>
          <p>
            <a href="mailto:shop@email.com" class="email-link"
              >shop@email.com</a
            >
          </p>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="socials">
          <!-- Social Icons Mock -->
          <span>FB</span> <span>IG</span>
        </div>
        <div class="payments">
          <!-- Payment Icons Mock -->
          <span>Visa</span> <span>Mastercard</span> <span>Paypal</span>
        </div>
        <p class="copyright">
          Copyright © 2026 TechStore Inc. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #000000;
  color: #ffffff;
  padding: 4rem 0 2rem;
  margin-top: auto;
  font-size: 0.85rem;
}

.newsletter-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid #333;
}

.newsletter-content h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.newsletter-content p {
  color: #999;
}

.newsletter-form {
  display: flex;
  gap: 1rem;
}

.newsletter-form input {
  padding: 0.75rem 1rem;
  border: 1px solid #333;
  background: black;
  color: white;
  width: 300px;
  border-radius: 4px;
}

.subscribe-btn {
  padding: 0 2rem;
  border-radius: 50px;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

.footer-col h4 {
  color: #666; /* Muted header color as per ref */
  font-weight: 700;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  text-transform: uppercase;
}

.footer-col ul {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-col a,
.footer-col p {
  color: #ffffff;
  text-decoration: none;
  line-height: 1.6;
}

.footer-col a:hover {
  text-decoration: underline;
}

.email-link {
  color: var(--color-primary) !important;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5rem;
  border-top: 1px solid #333;
  color: #666;
}

.payments,
.socials {
  display: flex;
  gap: 1rem;
  font-weight: 700;
  color: white;
}
</style>
