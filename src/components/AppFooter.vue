<template>
  <footer class="footer">
    <div class="container">
      <!-- Newsletter Section -->
      <div class="newsletter-row">
        <div class="newsletter-content">
          <h3>Sign Up To Our Newsletter.</h3>
          <p>Be the first to hear about the latest offers.</p>
        </div>
        <div class="newsletter-form">
          <input type="email" placeholder="Your Email Address" />
          <button class="btn btn-primary subscribe-btn">Subscribe</button>
        </div>
      </div>

      <div class="footer-grid">
        <div class="footer-col">
          <h4>Information</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">About Zip</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Search</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Orders and Returns</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Advanced Search</a></li>
            <li><a href="#">Newsletter Subscription</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>PC Parts</h4>
          <ul>
            <li><a href="#">CPUs</a></li>
            <li><a href="#">Add On Cards</a></li>
            <li><a href="#">Hard Drives (Internal)</a></li>
            <li><a href="#">Graphic Cards</a></li>
            <li><a href="#">Keyboards / Mice</a></li>
            <li><a href="#">Cases / Power Supplies / Cooling</a></li>
            <li><a href="#">RAM (Memory)</a></li>
            <li><a href="#">Software</a></li>
            <li><a href="#">Speakers / Headsets</a></li>
            <li><a href="#">Motherboards</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Desktop PCs</h4>
          <ul>
            <li><a href="#">Custom PCs</a></li>
            <li><a href="#">Servers</a></li>
            <li><a href="#">MSI All-In-One PCs</a></li>
            <li><a href="#">HP/Compaq PCs</a></li>
            <li><a href="#">ASUS PCs</a></li>
            <li><a href="#">Tecs PCs</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Laptops</h4>
          <ul>
            <li><a href="#">Evryday Use Notebooks</a></li>
            <li><a href="#">MSI Workstation Series</a></li>
            <li><a href="#">MSI Prestige Series</a></li>
            <li><a href="#">Tablets and Pads</a></li>
            <li><a href="#">Netbooks</a></li>
            <li><a href="#">Infinity Gaming Notebooks</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Address</h4>
          <p>Address: 1234 Street Adress City Address, 1234</p>
          <p>Phones: (00) 1234 5678</p>
          <p>We are open: Monday-Thursday: 9:00 AM - 5:30 PM</p>
          <p>Friday: 9:00 AM - 6:00 PM</p>
          <p>Saturday: 11:00 AM - 5:00 PM</p>
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
          Copyright © 2026 TechStore Inc. All rights reserved.
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
