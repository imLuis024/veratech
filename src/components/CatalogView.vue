<script setup>
import { computed } from 'vue'
import CatalogSidebar from "./CatalogSidebar.vue"
import Breadcrumbs from "./Breadcrumbs.vue"
import ProductCard from "./ProductCard.vue"
import { useProductStore } from '../stores/product'

const productStore = useProductStore()
const products = computed(() => productStore.products)

const breadcrumbs = [
  "Laptops",
  "Everyday Use Notebooks",
  "MSI Prestige Series",
  "MSI WS Series",
]
</script>

<template>
  <div class="catalog-view">
    <div class="container">
      <!-- Top Promo Banner -->
      <div class="catalog-banner">
        <div class="banner-text">
          <span>ASUS TUF GAMING FX505</span>
          <h2>HIGH PERFORMANCE AT AN AFFORDABLE PRICE</h2>
          <button class="shop-now-sm">Shop Now</button>
        </div>
      </div>

      <Breadcrumbs :items="breadcrumbs" />

      <h1>MSI PS Series (20)</h1>

      <div class="layout-grid">
        <CatalogSidebar />

        <main class="main-content">
          <!-- Toolbar -->
          <div class="toolbar">
            <div class="toolbar-left">
              <button class="back-link">‹ Back</button>
              <span class="items-count">Items 1-35 of 61</span>
            </div>
            <div class="toolbar-right">
              <div class="select-group">
                <label>Sort By</label>
                <select>
                  <option>Position</option>
                </select>
              </div>
              <div class="select-group">
                <label>Show</label>
                <select>
                  <option>35 per page</option>
                </select>
              </div>
              <div class="view-toggles">
                <button class="active">Grid</button>
                <button>List</button>
              </div>
            </div>
          </div>

          <!-- Active Filters -->
          <div class="active-filters">
            <div class="tag">CUSTOM PCS (24) <button class="x">×</button></div>
            <div class="tag">
              HP/COMPAQ PCS (24) <button class="x">×</button>
            </div>
            <button class="clear-all">Clear All</button>
          </div>

          <!-- Product Grid - 5 Columns -->
          <div class="catalog-grid">
            <ProductCard v-for="p in products" :key="p.id" :product="p" />
          </div>

          <!-- Pagination -->
          <div class="pagination">
            <button class="page-btn active">1</button>
            <button class="page-btn">2</button>
            <button class="page-btn">3</button>
            <span>...</span>
            <button class="page-btn">15</button>
            <button class="page-btn">></button>
          </div>

          <div class="seo-text">
            <p>
              MSI has unveiled the Prestige Series line of business-class and
              gaming notebooks. Tuned for color accuracy, the Prestige Series
              also leverages True Color Technology.
            </p>
            <br />
            <button class="more-btn">More</button>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<style scoped>
.catalog-view {
  padding-bottom: 4rem;
  background: white; /* Clean white background */
}

.catalog-banner {
  background: black;
  color: white;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  background-image: url("https://placehold.co/1200x120/000000/333333?text=ASUS+TUF+GAMING+BANNER");
  background-size: cover;
}

.banner-text {
  text-align: center;
}

.banner-text h2 {
  font-weight: 800;
  color: #fbbf24; /* Gold/Yellow accent */
  font-style: italic;
}

.layout-grid {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
}

.main-content {
  flex: 1;
}

h1 {
  font-size: 1.5rem;
  margin: 1rem 0;
}

/* Toolbar */
.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.toolbar-left {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.85rem;
  color: #666;
}

.back-link {
  font-weight: 700;
}

.toolbar-right {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.select-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid #e5e7eb;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
}

.select-group select {
  border: none;
  outline: none;
  font-weight: 600;
}

.view-toggles {
  display: flex;
  gap: 0.25rem;
}

/* Active Filters */
.active-filters {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tag {
  border: 1px solid #e5e7eb;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.tag .x {
  color: red;
  font-weight: bold;
}

.clear-all {
  border: 1px solid #e5e7eb;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.75rem;
}

/* Grid */
.catalog-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  margin-bottom: 3rem;
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 3rem;
}

.page-btn {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  color: #666;
}

.page-btn.active {
  background: #f3f4f6;
  color: black;
  font-weight: bold;
}

.seo-text {
  text-align: center;
  color: #666;
  font-size: 0.85rem;
  max-width: 800px;
  margin: 0 auto;
}

.more-btn {
  border: 1px solid #ccc;
  padding: 0.25rem 1rem;
  border-radius: 20px;
}

@media (max-width: 1200px) {
  .catalog-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .layout-grid {
    flex-direction: column;
  }
  .catalog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .sidebar {
    width: 100%;
    border-right: none;
  }
}
</style>
