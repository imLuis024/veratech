<script setup>
import { ref, computed } from 'vue'
import Breadcrumbs from './Breadcrumbs.vue'
import ServiceIcons from './ServiceIcons.vue'
import { useCartStore } from '../stores/cart'
import { useViewStore } from '../stores/view'

const breadcrumbs = ['Carrito de Compras', 'Proceso de Pago']
const cartStore = useCartStore()
const viewStore = useViewStore()

// Bind to store
const summaryItems = computed(() => cartStore.cartItems)

// Form submit handler
const placeOrder = () => {
    alert('¡Pedido realizado con éxito! Redirigiendo al Inicio...')
    cartStore.clearCart()
    viewStore.navigateTo('home')
}
</script>

<template>
  <div class="checkout-view">
    <div class="container">
      <Breadcrumbs :items="breadcrumbs" />
      
      <div class="checkout-header">
        <h1>Pago</h1>
        <button class="btn btn-outline-blue sign-in-btn">Iniciar Sesión</button>
      </div>
      
      <!-- Progress Bar -->
      <div class="checkout-progress">
          <div class="step active">
             <div class="step-circle">✓</div>
             <span>Envío</span>
          </div>
          <div class="step-line"></div>
          <div class="step">
             <div class="step-circle">2</div>
             <span>Revisión y Pagos</span>
          </div>
      </div>

      <div class="checkout-layout">
        <!-- Left: Shipping Form -->
        <div class="shipping-section">
           <h2 class="section-title">Dirección de Envío</h2>
           
           <form class="shipping-form" @submit.prevent="placeOrder">
              <div class="form-group">
                 <label>Correo Electrónico <span>*</span></label>
                 <input type="email" class="input-full" />
                 <p class="help-text">Puedes crear una cuenta después del pago.</p>
              </div>
              
              <div class="form-group">
                 <label>Nombre <span>*</span></label>
                 <input type="text" class="input-full" />
              </div>
              
              <div class="form-group">
                 <label>Apellido <span>*</span></label>
                 <input type="text" class="input-full" />
              </div>
              
              <div class="form-group">
                 <label>Compañía <span>*</span></label>
                 <input type="text" class="input-full" />
              </div>
              
              <div class="form-group">
                 <label>Dirección <span>*</span></label>
                 <input type="text" class="input-full mb-2" />
                 <input type="text" class="input-full" />
              </div>
              
              <div class="form-group">
                 <label>Ciudad <span>*</span></label>
                 <input type="text" class="input-full" />
              </div>
              
              <div class="form-group">
                 <label>Estado/Provincia <span>*</span></label>
                 <select class="input-full">
                    <option>Por favor selecciona una región, estado o provincia</option>
                 </select>
              </div>
              
              <div class="form-group">
                 <label>Código Postal <span>*</span></label>
                 <input type="text" class="input-full" />
              </div>
              
              <div class="form-group">
                 <label>País <span>*</span></label>
                 <select class="input-full"><option>México</option></select>
              </div>
              
              <div class="form-group">
                 <label>Número de Teléfono <span>*</span></label>
                 <input type="tel" class="input-full" />
              </div>
              
              <!-- Shipping Methods -->
              <div class="shipping-methods-section">
                 <div class="method-row">
                    <div class="method-label">
                       <label>Tarifa Estándar</label>
                       <div class="radio-wrap">
                          <input type="radio" name="ship-method" checked />
                          <span>El precio puede variar según el artículo/destino. El personal se contactará contigo. $21.00</span>
                       </div>
                    </div>
                    <strong>$21.00</strong>
                 </div>
                 
                 <div class="method-row">
                    <div class="method-label">
                       <label>Recoger en tienda</label>
                       <div class="radio-wrap">
                          <input type="radio" name="ship-method" />
                          <span>Calle Falsa 1234, Ciudad, 1234</span>
                       </div>
                    </div>
                    <strong>$0.00</strong>
                 </div>
              </div>
              
              <div class="form-actions">
                 <button class="btn btn-primary next-btn">Realizar Pedido</button>
              </div>
              
           </form>
        </div>

        <!-- Right: Order Summary -->
        <div class="summary-sidebar">
           <h3 class="summary-title">Resumen del Pedido</h3>
           
           <div class="items-count-head">
              <span>{{ summaryItems.length }} Artículos en Carrito</span>
              <button class="toggle-btn">▲</button>
           </div>
           
           <div class="summary-items-list">
              <div v-for="item in summaryItems" :key="item.id" class="summary-item">
                 <img :src="item.image" alt="Producto" />
                 <div class="item-info">
                    <p class="item-name">{{ item.name }}</p>
                    <p class="item-meta">Cant {{ item.qty }} <strong class="item-price">${{ item.price.toFixed(2) }}</strong></p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
    
    <ServiceIcons />
  </div>
</template>

<style scoped>
.checkout-view {
  background: white;
  padding-bottom: 2rem;
}

.checkout-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0 2rem;
}

.checkout-header h1 {
  font-size: 2rem;
  font-weight: 800;
}

.sign-in-btn {
  border: 2px solid #0066cc;
  color: #0066cc;
  background: white;
  border-radius: 20px;
  padding: 0.5rem 2rem;
  font-weight: 600;
  font-size: 0.9rem;
}

/* Progress Bar */
.checkout-progress {
  display: flex;
  align-items: center;
  justify-content: center; /* Or flex-start based on layout? Image shows it aligned right of header title roughly, but centered feels right */
  margin-bottom: 3rem;
  max-width: 500px;
  /* margin-left: auto; margin-right: auto; -- If centered */
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  z-index: 1;
}

.step-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  background: white;
  border: 2px solid #e5e7eb;
  color: #999;
}

.step.active .step-circle {
  border-color: #0066cc;
  color: #0066cc; /* Checkmark style */
  font-size: 1.2rem;
}

.step span {
  font-size: 0.8rem;
  font-weight: 600;
  color: #999;
}

.step.active span {
  color: black;
}

.step-line {
  flex: 1;
  height: 2px;
  background: #e5e7eb;
  margin: 0 1rem;
  margin-bottom: 1.5rem; /* Align with circles */
}

/* Layout */
.checkout-layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
}

/* Form */
.section-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 0.5rem;
}

.shipping-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.form-group label span {
  color: #dc2626;
}

.input-full {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.help-text {
  font-size: 0.75rem;
  color: #666;
  margin-top: 0.25rem;
}

/* Shipping Methods */
.shipping-methods-section {
  border-top: 1px solid #e5e7eb;
  margin-top: 1rem;
  padding-top: 1.5rem;
}

.method-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.method-label label {
  font-weight: 700;
  display: block;
  margin-bottom: 0.5rem;
}

.radio-wrap {
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
  font-size: 0.85rem;
  color: #666;
}

.form-actions {
  margin-top: 1rem;
}

.next-btn {
  padding: 0.75rem 3rem;
  border-radius: 30px;
  font-weight: 600;
}

/* Summary Sidebar */
.summary-sidebar {
  background: #f9fafb;
  padding: 1.5rem;
  height: fit-content;
}

.summary-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.items-count-head {
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e5e7eb;
  font-size: 0.85rem;
}

.summary-item {
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid #e5e7eb;
}

.item-info {
  flex: 1;
}

.item-name {
  font-size: 0.8rem;
  line-height: 1.4;
  margin-bottom: 0.5rem;
}

.item-meta {
  font-size: 0.85rem;
  color: #666;
  display: flex;
  justify-content: space-between;
}

.item-price {
  color: black;
  font-weight: 700;
}

@media (max-width: 900px) {
  .checkout-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
