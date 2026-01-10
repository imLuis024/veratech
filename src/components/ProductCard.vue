<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="product-card">
    <div class="image-wrapper">
      <!-- Placeholder for product image -->
      <div class="placeholder-img"></div>

      <!-- Hover Actions -->
      <div class="hover-actions">
        <button class="action-btn" title="Quick View">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <eye-icon></eye-icon>
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </div>

      <div class="badge-new" v-if="product.isNew">NEW</div>
    </div>

    <div class="card-info">
      <!-- Rating (Stars) -->
      <div class="rating">
        <span
          v-for="i in 5"
          :key="i"
          class="star"
          :class="{ filled: i <= Math.round(product.rating) }"
          >★</span
        >
      </div>

      <h3 class="title">
        <a href="#">{{ product.name }}</a>
      </h3>

      <div class="specs" v-if="product.specs">
        <span v-for="spec in product.specs" :key="spec">{{ spec }}</span>
      </div>

      <div class="price-row">
        <div class="price-box">
          <span class="old-price" v-if="product.oldPrice"
            >${{ product.oldPrice }}</span
          >
          <span class="price">${{ product.price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  background: var(--color-surface);
  border: 1px solid transparent;
  padding: 1rem;
  transition: all 0.2s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  border-color: var(--color-border);
  box-shadow: var(--shadow-md);
}

.image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  margin-bottom: 1rem;
  background: #f9fafb;
}

.placeholder-img {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: url("https://placehold.co/300x300/e5e7eb/a3a3a3?text=Product");
}

.badge-new {
  position: absolute;
  top: 0;
  left: 0;
  background: var(--color-primary);
  color: white;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 2px 6px;
  text-transform: uppercase;
}

.hover-actions {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 0.5rem;
  opacity: 0;
  transition: opacity 0.2s;
}

.product-card:hover .hover-actions {
  opacity: 1;
}

.action-btn {
  background: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-sm);
  color: var(--color-text-main);
}

.action-btn:hover {
  background: var(--color-primary);
  color: white;
}

.card-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.rating {
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  color: #d1d5db;
}

.rating .star.filled {
  color: #fbbf24;
}

.title {
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 0.5rem;
  color: var(--color-text-main);
}

.title a {
  text-decoration: none;
}

.title a:hover {
  text-decoration: underline;
}

.price-row {
  margin-top: auto;
  padding-top: 0.5rem;
  border-top: 1px solid #f3f4f6;
}

.price {
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--color-text-main);
}

.old-price {
  text-decoration: line-through;
  color: var(--color-text-muted);
  font-size: 0.85rem;
  margin-right: 0.5rem;
}
</style>
