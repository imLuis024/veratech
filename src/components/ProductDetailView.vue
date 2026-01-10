<script setup>
import { computed } from 'vue'
import Breadcrumbs from './Breadcrumbs.vue'
import ServiceIcons from './ServiceIcons.vue'
import { useProductStore } from '../stores/product'
import { useCartStore } from '../stores/cart'

const breadcrumbs = ['Laptops', 'MSI WS Series', 'MSI MPG Trident 3']

const productStore = useProductStore()
const cartStore = useCartStore()

// Get Product (ID 999 is the default mock PDP product)
const product = computed(() => productStore.getProductById(999))

const addToCart = () => {
  if (product.value) {
    cartStore.addToCart(product.value, 1)
    // Optional: Feedback (e.g. alert or toast)
    // for now just simple action
  }
}

const features = [
  { title: 'Intel® Core™ i7', desc: 'processor with the upmost computing power to bring you an unparalleled gaming experience.', icon: 'https://placehold.co/80x80/000/fff?text=Intel' },
  { title: 'GeForce® RTX SUPER™', desc: 'Series has more cores and higher clocks for superfast performance compared to previous-gen GPUs.', icon: 'https://placehold.co/80x80/000/fff?text=RTX' },
  { title: 'SSD Data', desc: 'Unleash the full potential with the latest SSD technology, the NVM Express, 6 times faster than traditional SATA SSD.', icon: 'https://placehold.co/80x80/000/fff?text=SSD' },
  { title: 'DDR4 RAM', desc: 'Featuring the latest 10th Gen Intel® Core™ processors, memory support up to DDR4 2933MHz.', icon: 'https://placehold.co/80x80/000/fff?text=DDR4' }
]
</script>

<template>
  <div class="product-view">
    
    <!-- Top Sticky Bar -->
    <div class="sticky-bar">
      <div class="container sticky-content">
        <nav class="sticky-nav">
          <a href="#" class="active">About Product</a>
          <a href="#">Details</a>
          <a href="#">Specs</a>
        </nav>
        
        <div class="sticky-actions">
           <span class="sale-price">On Sale from <strong>${{ product?.price.toLocaleString() }}</strong></span>
           <div class="qty-control">
             <button>-</button>
             <span>1</span>
             <button>+</button>
           </div>
           <button class="btn btn-primary add-cart" @click="addToCart">Add to Cart</button>
           <button class="btn paypal-btn">PayPal</button>
        </div>
      </div>
    </div>

    <!-- Hero Section -->
    <section class="pdp-hero">
      <div class="container has-grid">
        <div class="hero-details">
          <Breadcrumbs :items="breadcrumbs" />
          
          <h1 class="pdp-title">{{ product?.name }}</h1>
          <a href="#" class="review-link">Be the first to review this product</a>
          
          <p class="pdp-desc">
            {{ product?.description }}
          </p>
          
          <div class="color-picker">
            <span class="color-dot black active"></span>
            <span class="color-dot gold"></span>
            <span class="color-dot silver"></span>
          </div>
          
          <div class="pdp-meta">
            <a href="#">Have a Question? <strong>Contact Us</strong></a>
            <span class="sku">SKU: {{ product?.sku || 'D5515AI' }}</span>
          </div>
          
          <div class="more-info-link">+ MORE INFORMATION</div>
        </div>
        
        <div class="hero-gallery">
           <div class="gallery-tools">
              <button>♥</button>
              <button>📊</button>
              <button>✉</button>
           </div>
           <img :src="product?.image" :alt="product?.name" class="main-img" />
           <div class="zip-promo">
              <span class="zip-logo">zip</span> own it now, pay in 4, interest free.
           </div>
        </div>
      </div>
    </section>
    
    <!-- Dark Marketing Banner -->
    <section class="marketing-banner">
       <div class="container banner-grid">
          <div class="banner-text-content">
             <h2>Outplay the<br>Competition</h2>
             <p>Experience a 40% boost in computing from last generation. MSI Desktop equips the 10th Gen. Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.</p>
             <p class="disclaimer">*Performance compared to i7-9700. Specs varies by model.</p>
          </div>
          <div class="banner-visual">
             <img src="https://placehold.co/400x300/000/3b82f6?text=Intel+Core+ i7" alt="Processor" />
          </div>
       </div>
    </section>
    
    <!-- Support Section -->
    <section class="support-section">
       <div class="container support-container">
          <div class="support-links">
             <button class="support-tab">Product Support →</button>
             <button class="support-tab">FAQ →</button>
             <button class="support-tab">Our buyer guide →</button>
          </div>
          <div class="support-visual">
             <img src="https://placehold.co/600x400/f5f5f5/ccc?text=Support+Person" alt="Support" />
          </div>
       </div>
    </section>
    
    <!-- Features Grid (Black) -->
    <section class="features-section">
       <div class="container">
          <h2 class="features-title">Features</h2>
          <p class="features-subtitle">The MPG series brings out the best in gamers by allowing full expression in color with advanced RGB lighting control and synchronization.</p>
          
          <div class="features-grid">
             <div class="feature-item" v-for="(f, i) in features" :key="i">
                <div class="icon-circle">
                   <img :src="f.icon" alt="icon" />
                </div>
                <p><strong>{{ f.title }}</strong> {{ f.desc }}</p>
             </div>
          </div>
       </div>
    </section>
    
    <!-- Bottom Services -->
    <ServiceIcons />

  </div>
</template>

<style scoped>
.product-view {
  background: white;
}

/* Sticky Bar */
.sticky-bar {
  position: sticky;
  top: 0;
  z-index: 900;
  background: white;
  border-bottom: 1px solid #e5e7eb;
  padding: 1rem 0;
}

.sticky-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sticky-nav {
  display: flex;
  gap: 2rem;
  font-size: 0.9rem;
  font-weight: 600;
}

.sticky-nav a {
  color: #666;
  text-decoration: none;
  padding-bottom: 0.25rem;
}

.sticky-nav a.active {
  color: var(--color-primary);
  border-bottom: 2px solid var(--color-primary);
}

.sticky-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.sale-price {
  font-size: 0.9rem;
  color: #666;
}

.sale-price strong {
  font-weight: 800;
  color: black;
  font-size: 1.1rem;
}

.qty-control {
  background: #f3f4f6;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 0.25rem;
}

.qty-control button {
  padding: 0 0.75rem;
  font-weight: bold;
}

.add-cart {
  padding: 0.5rem 1.5rem;
  border-radius: 20px; /* Rounded per style */
  font-size: 0.9rem;
}

.paypal-btn {
  background: #fbbf24;
  color: black;
  font-weight: bold;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
}

/* Hero */
.pdp-hero {
  padding: 2rem 0 4rem;
  background: #fff;
}

.has-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.pdp-title {
  font-size: 2rem;
  font-weight: 800;
  margin: 1rem 0 0.5rem;
}

.review-link {
  color: #0066cc;
  font-size: 0.8rem;
  margin-bottom: 1.5rem;
  display: block;
}

.pdp-desc {
  line-height: 1.6;
  color: #333;
  margin-bottom: 2rem;
  max-width: 90%;
}

.color-picker {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.color-dot {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid transparent;
}

.color-dot.active {
  border-color: var(--color-primary);
  padding: 2px;
  background-clip: content-box;
}

.color-dot.black { background-color: #000; }
.color-dot.gold { background-color: #d4af37; }
.color-dot.silver { background-color: #c0c0c0; }

.pdp-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 4rem;
}

.more-info-link {
  font-weight: 800;
  font-size: 0.8rem;
}

.hero-gallery {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.main-img {
  max-width: 100%;
  height: auto;
}

.gallery-tools {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.gallery-tools button {
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.zip-promo {
  margin-top: 1rem;
  font-size: 0.85rem;
  color: #666;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.zip-logo {
  font-weight: 900;
  font-style: italic;
  color: #4f46e5;
  background: #eef2ff;
  padding: 0 4px;
}

/* Marketing Banner */
.marketing-banner {
  background: black;
  color: white;
  padding: 4rem 0;
  position: relative;
  overflow: hidden;
}

.banner-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
}

.banner-text-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
}

.banner-text-content p {
  color: #ccc;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.disclaimer {
  font-size: 0.8rem;
  color: #666 !important;
}

/* Support Section */
.support-section {
  background: #f0f2f5;
  padding: 4rem 0;
}

.support-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.support-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 300px;
}

.support-tab {
  background: white;
  padding: 1rem;
  text-align: left;
  border: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  border-radius: 4px;
}

.support-visual {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.support-visual img {
  border-radius: 8px;
}

/* Features Features */
.features-section {
  background: black;
  color: white;
  padding: 4rem 0;
  text-align: center;
}

.features-title {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.features-subtitle {
  color: #999;
  max-width: 600px;
  margin: 0 auto 4rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.icon-circle {
  width: 100px;
  height: 100px;
  background: #111;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-circle img {
  width: 50px;
}

.feature-item p {
  font-size: 0.85rem;
  color: #ccc;
  line-height: 1.5;
}

.feature-item strong {
  display: block;
  color: white;
  margin-bottom: 0.5rem;
}

/* Bottom Services */
.bottom-services {
  padding: 3rem 0;
  background: #f9fafb;
}

.services-row {
  display: flex;
  justify-content: center;
  gap: 4rem;
  text-align: center;
}

.service-item {
  max-width: 250px;
}

.srv-icon {
  width: 50px;
  height: 50px;
  background: var(--color-primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin: 0 auto 1rem;
}

.service-item h4 {
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.service-item p {
  font-size: 0.85rem;
  color: #666;
}

@media (max-width: 768px) {
  .has-grid, .banner-grid, .support-container, .features-grid, .services-row {
    grid-template-columns: 1fr;
    flex-direction: column;
    gap: 2rem;
  }
  
  .sticky-content {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
