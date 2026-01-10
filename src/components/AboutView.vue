<script setup>
import Breadcrumbs from './Breadcrumbs.vue'
import ServiceIcons from './ServiceIcons.vue'

const breadcrumbs = ['About Us']
</script>

<template>
  <div class="about-view">
    <div class="container container-bread">
       <Breadcrumbs :items="breadcrumbs" />
       <h1 class="page-title">About Us</h1>
    </div>

    <!-- Section 1: Hero / Family -->
    <section class="about-section dark">
       <div class="container">
          <div class="about-grid">
             <div class="about-text">
                <h2>A Family That Keeps On Growing</h2>
                <p>We always aim to please the home market, supplying great computers and hardware at great prices to non-corporate customers, through our large nationwide delivery capabilities.</p>
                <p>Shop Management approach fosters a strong customer orientation, delivering the best value to customers and establishing close relationships with our vendors.</p>
             </div>
             <div class="about-image">
                <img src="https://placehold.co/600x400/111/fff?text=Shop+Interior" alt="Shop Interior" />
             </div>
          </div>
       </div>
    </section>

    <!-- Section 2: Shop.com -->
    <section class="about-section light">
       <div class="container">
          <div class="about-grid reverse">
             <div class="about-image">
                <img src="https://placehold.co/600x300/f5f5f5/333?text=Gaming+Keyboard" alt="Keyboard" />
             </div>
             <div class="about-text">
                <div class="icon-title">
                   <div class="icon-circle"><span>🛍️</span></div> <!-- Placeholder icon -->
                   <h3>Shop.com</h3>
                </div>
                <p>Shop.com is a proudly Australian owned, Melbourne based supplier of I.T. goods but with nearly 15 years experience. We have a huge client base that encompasses individuals, small businesses, corporate and government organizations. We create our own extensive lines of desktops, gaming, high end workstations and servers.</p>
             </div>
          </div>
       </div>
    </section>

    <!-- Section 3: Safe Hands -->
    <section class="about-section dark">
       <div class="container">
          <div class="about-grid">
             <div class="about-text">
                <div class="icon-title">
                   <div class="icon-circle"><span>💙</span></div>
                   <h3>Now You're In Safe Hands</h3>
                </div>
                <p>Experience a 40% cooler computing experience. We have a highly skilled & experienced tech team that can handle any query. We pride ourselves on quick and efficient troubleshooting and repair services.</p>
             </div>
             <div class="about-image">
                <img src="https://placehold.co/400x500/111/333?text=Green+PC" alt="Green PC" />
             </div>
          </div>
       </div>
    </section>

    <!-- Section 4: Quality -->
    <section class="about-section light">
       <div class="container">
          <div class="about-grid reverse">
             <div class="about-image">
                <img src="https://placehold.co/400x500/fff/333?text=White+PC" alt="White PC" />
             </div>
             <div class="about-text">
                <div class="icon-title">
                   <div class="icon-circle"><span>⭐</span></div>
                   <h3>The Highest Quality of Products</h3>
                </div>
                <p>We guarantee the highest quality of the products we sell. Several decades of successful operations and millions of happy customers let us know that we are on the right track. All products are tested thoroughly before being shipped.</p>
             </div>
          </div>
       </div>
    </section>

    <!-- Section 5: Delivery -->
    <section class="about-section dark">
       <div class="container">
          <div class="about-grid">
             <div class="about-text">
                <div class="icon-title">
                   <div class="icon-circle"><span>🚚</span></div>
                   <h3>We Deliver to Any Regions</h3>
                </div>
                <p>We deliver our goods all across Australia. No matter where you live, your order will be shipped in time and delivered right to your door or to any other location you have stated. The packages are handled with utmost care.</p>
             </div>
             <div class="about-image">
                 <img src="https://placehold.co/400x500/111/333?text=PC+Case" alt="Delivery" />
             </div>
          </div>
       </div>
    </section>

    <!-- Testimonial Section -->
    <section class="testimonial-section light">
       <div class="container">
          <div class="testimonial-content">
             <div class="quote-mark">“</div>
             <p class="quote-text">My first order arrived today in perfect condition. From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, folks, has stayed in touch. Such a great service. I look forward to shopping on your site in the future and would highly recommend it.</p>
             <p class="quote-author">- Tama Brown</p>
             <button class="btn btn-outline-blue">Leave Us A Review</button>
             <div class="quote-dots">
                <span class="dot active"></span>
                <span class="dot"></span>
                <span class="dot"></span>
             </div>
          </div>
       </div>
    </section>
    
    <ServiceIcons />
  </div>
</template>

<style scoped>
.about-view {
  width: 100%;
}

.container-bread {
  padding-bottom: 0;
}

.page-title {
  font-size: 2rem;
  font-weight: 700;
  margin: 1rem 0 2rem;
}

.about-section {
  padding: 4rem 0;
}

.about-section.dark {
  background-color: black;
  color: white;
}

.about-section.light {
  background-color: white;
  color: black;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
}

.about-grid.reverse .about-image {
  order: 1;
}

.about-grid.reverse .about-text {
  order: 2;
}

.about-text h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.about-text p {
  line-height: 1.6;
  margin-bottom: 1rem;
  opacity: 0.9;
}

.icon-title {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.icon-circle {
  width: 40px;
  height: 40px;
  background: #0066cc; /* Brand Blue */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.about-text h3 {
  font-size: 1.5rem;
  font-weight: 700;
}

.about-image img {
  width: 100%;
  max-width: 500px;
  height: auto;
  display: block;
  margin: 0 auto;
}

/* Testimonial */
.testimonial-section {
  text-align: center;
  padding: 4rem 0;
}

.testimonial-content {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.quote-mark {
  font-size: 4rem;
  line-height: 1;
  font-family: serif;
  color: #000;
  margin-bottom: 1rem;
  display: block;
}

.quote-text {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-style: italic;
  color: #333;
}

.quote-author {
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: right;
  display: block;
  width: 100%;
}

.btn-outline-blue {
  border: 2px solid #0066cc;
  color: #0066cc;
  padding: 0.5rem 2rem;
  border-radius: 25px;
  background: white;
  font-weight: 600;
  margin-bottom: 2rem;
}

.quote-dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.dot {
  width: 10px;
  height: 10px;
  background: #ccc;
  border-radius: 50%;
}

.dot.active {
  background: #0066cc;
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
  
  .about-grid.reverse .about-image {
    order: unset; /* Stack naturally on mobile */
  }
  
  .about-grid.reverse .about-text {
    order: unset;
  }
  
  .icon-title {
    justify-content: center;
  }
}
</style>
