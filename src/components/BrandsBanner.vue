<script setup>
const brands = ["MSI", "RAZER", "THERMALTAKE", "ADATA", "HP", "GIGABYTE"];
</script>

<template>
  <section class="brands-section">
    <div class="container brands-container">
      <div v-for="brand in brands" :key="brand" class="brand-item">
        <span class="brand-logo">{{ brand }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.brands-section {
  background: var(--color-surface);
  padding: 2rem 0;
  border-bottom: 1px solid var(--color-border);
}

.brands-container {
  display: flex;
  justify-content: space-between;
  opacity: 0.6;
}

.brand-item {
  font-weight: 800;
  font-size: 1.5rem;
  color: var(--color-text-muted);
  cursor: pointer;
  transition: opacity 0.2s;
}

.brand-item:hover {
  opacity: 1;
  color: var(--color-text-main);
}
</style>
