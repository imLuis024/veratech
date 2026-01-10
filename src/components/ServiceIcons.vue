<script setup>
</script>

<template>
  <section class="bottom-services">
     <div class="container services-row">
        <div class="service-item">
           <div class="srv-icon">🎧</div>
           <h4>Product Support</h4>
           <p>Up to 3 years on-site warranty available for your peace of mind.</p>
        </div>
        <div class="service-item">
           <div class="srv-icon">👤</div>
           <h4>Personal Account</h4>
           <p>With big discounts, free delivery and a dedicated support specialist.</p>
        </div>
        <div class="service-item">
           <div class="srv-icon">🏷️</div>
           <h4>Amazing Savings</h4>
           <p>Up to 70% off new Products, you can be sure of the best price.</p>
        </div>
     </div>
  </section>
</template>

<style scoped>
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
  color: var(--color-text-main);
}

.service-item p {
  font-size: 0.85rem;
  color: #666;
}

@media (max-width: 768px) {
  .services-row {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
}
</style>
