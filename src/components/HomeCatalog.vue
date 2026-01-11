<script setup>
import ProductCard from "./ProductCard.vue";

// Mock Data
const newProducts = [
  { id: 1, name: "MSI Katana GF66 11UE", price: 1199, rating: 5, isNew: true },
  {
    id: 2,
    name: "GeForce RTX 3080 Gaming Z",
    price: 699,
    rating: 4.8,
    isNew: true,
  },
  {
    id: 3,
    name: "Optix MAG274QRF-QD",
    price: 349,
    oldPrice: 429,
    rating: 4.9,
    isNew: false,
  },
  { id: 4, name: "Vigor GK50 Elite", price: 69, rating: 4.5, isNew: false },
  {
    id: 5,
    name: "Clutch GM41 Lightweight",
    price: 49,
    rating: 4.7,
    isNew: true,
  },
  { id: 6, name: "Immerse GH50", price: 89, rating: 4.2, isNew: false },
];

const customBuilds = [
  { id: 11, name: "Creator P50 11th", price: 2499, rating: 5, isNew: true },
  {
    id: 12,
    name: "MAG Codex X5",
    price: 1899,
    oldPrice: 2099,
    rating: 4.9,
    isNew: false,
  },
  { id: 13, name: "MEG Aegis Ti5", price: 3999, rating: 5, isNew: false },
  { id: 14, name: "Trident X 11th", price: 1599, rating: 4.6, isNew: false },
];

const laptopSeries = [
  {
    id: 21,
    name: "Titan GT77",
    price: 4599,
    rating: 5,
    specs: ["i9-12900HX", "RTX 3080 Ti"],
    isNew: true,
  },
  {
    id: 22,
    name: "Raider GE76",
    price: 2999,
    rating: 4.8,
    specs: ["i7-12700H", "RTX 3070 Ti"],
    isNew: false,
  },
  {
    id: 23,
    name: "Vector GP76",
    price: 2299,
    rating: 4.7,
    specs: ["i7-12700H", "RTX 3060"],
    isNew: false,
  },
  {
    id: 24,
    name: "Stealth 15M",
    price: 1399,
    rating: 4.5,
    specs: ["i7-11375H", "RTX 3060 Max-Q"],
    isNew: false,
  },
  {
    id: 25,
    name: "Pulse GL66",
    price: 1099,
    rating: 4.4,
    specs: ["i7-11800H", "RTX 3050 Ti"],
    isNew: false,
  },
];
</script>

<template>
  <div class="home-catalog">
    <!-- Section 1: New Products -->
    <section class="catalog-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Productos Nuevos</h2>
          <a href="#" class="see-all">Ver Todos los Productos Nuevos ></a>
        </div>
        <div class="product-grid-6">
          <ProductCard v-for="p in newProducts" :key="p.id" :product="p" />
        </div>
      </div>
    </section>

    <!-- Section 2: Custom Builds (Banner + Grid) -->
    <section class="catalog-section bg-secondary">
      <div class="container">
        <!-- Banner Header -->
        <div class="zip-banner">
          <span class="zip-logo">Zip</span>
          <span
            >Cómpralo ahora, paga después. <strong>Zip disponible ahora.</strong></span
          >
        </div>

        <div class="split-layout">
          <div class="category-banner-card">
            <div class="cat-content">
              <h3>Ensambles<br />Personalizados</h3>
              <a href="#">Ver Todos los Productos</a>
            </div>
            <!-- Background Image via CSS -->
          </div>
          <div class="product-grid-4">
            <ProductCard v-for="p in customBuilds" :key="p.id" :product="p" />
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: Laptop Series -->
    <section class="catalog-section">
      <div class="container">
        <div class="section-tab-nav">
          <button class="tab active">Laptops MSI</button>
          <button class="tab">Escritorios MSI</button>
          <button class="tab">Monitores MSI</button>
        </div>

        <div class="split-layout">
          <div class="category-banner-card laptops-banner">
            <div class="cat-content">
              <h3>Laptops<br />MSI</h3>
              <a href="#">Ver Todos los Productos</a>
            </div>
          </div>

          <div class="product-grid-5">
            <ProductCard v-for="p in laptopSeries" :key="p.id" :product="p" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-catalog {
  padding-bottom: 4rem;
}

.catalog-section {
  padding: 3rem 0;
}

.bg-secondary {
  background-color: var(--color-surface-secondary);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.section-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-text-main);
}

.see-all {
  color: #0066cc;
  font-size: 0.85rem;
  text-decoration: none;
}

/* Grids */
.product-grid-6 {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
}

.product-grid-5 {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  flex: 1;
}

.product-grid-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  flex: 1;
}

/* Split Layout with Banner Card */
.split-layout {
  display: flex;
  gap: 1rem;
}

.category-banner-card {
  width: 240px;
  flex-shrink: 0;
  background-color: #000;
  color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url("https://placehold.co/240x350/111/444?text=Builds");
  background-size: cover;
}

.laptops-banner {
  background-image: url("https://placehold.co/240x350/800000/fff?text=Laptops");
}

.cat-content {
  position: relative;
  z-index: 2;
}

.cat-content h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.cat-content a {
  text-decoration: underline;
  font-size: 0.85rem;
}

.zip-banner {
  background: #eef2ff;
  padding: 0.75rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: #4f46e5;
  font-size: 0.9rem;
}

.section-tab-nav {
  display: flex;
  gap: 2rem;
  border-bottom: 2px solid #e5e7eb;
  margin-bottom: 2rem;
}

.tab {
  font-size: 1rem;
  font-weight: 600;
  padding-bottom: 0.5rem;
  color: var(--color-text-muted);
  border-bottom: 2px solid transparent;
  margin-bottom: -2px;
}

.tab.active {
  color: black;
  border-bottom-color: var(--color-primary);
}

@media (max-width: 1200px) {
  .product-grid-6 {
    grid-template-columns: repeat(4, 1fr);
  }
  .product-grid-5 {
    grid-template-columns: repeat(3, 1fr);
  }
  .product-grid-4 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .split-layout {
    flex-direction: column;
  }
  .category-banner-card {
    width: 100%;
    height: 150px;
  }
  .product-grid-6,
  .product-grid-5,
  .product-grid-4 {
    grid-template-columns: 2fr 2fr; /* simple mobile grid */
  }
}
</style>
