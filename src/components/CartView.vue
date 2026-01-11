<script setup>
import { ref, computed } from 'vue'
import Breadcrumbs from './Breadcrumbs.vue'
import ServiceIcons from './ServiceIcons.vue'
import { useCartStore } from '../stores/cart'
import { useViewStore } from '../stores/view'

const breadcrumbs = ['Carrito de Compras']
const cartStore = useCartStore()
const viewStore = useViewStore()

// Use store state
const cartItems = computed(() => cartStore.cartItems)
const shipping = computed(() => cartStore.shippingRate)
const tax = computed(() => cartStore.taxAmount)
const subtotal = computed(() => cartStore.subtotal)
const total = computed(() => cartStore.grandTotal)

const isShippingOpen = ref(true)
const isDiscountOpen = ref(true)
</script>

<template>
  <div class="cart-view">
    <div class="container">
      <Breadcrumbs :items="breadcrumbs" />
      
      <h1 class="page-title">Carrito de Compras</h1>

      <div class="cart-layout">
        <!-- Cart Items Table Left -->
        <div class="cart-items-section">
          <div class="cart-header-row">
            <div class="col-item">Artículo</div>
            <div class="col-price">Precio</div>
            <div class="col-qty">Cant</div>
            <div class="col-sub">Subtotal</div>
            <div class="col-action"></div>
          </div>
          
          <div v-for="item in cartItems" :key="item.id" class="cart-row">
             <div class="col-item item-detail">
                <img :src="item.image" :alt="item.name" />
                <p>{{ item.name }}</p>
             </div>
             <div class="col-price">${{ item.price.toFixed(2) }}</div>
             <div class="col-qty">
                <div class="qty-input">
                   <span>{{ item.qty }}</span>
                   <div class="qty-arrows">
                      <button @click="cartStore.updateQuantity(item.id, 1)">▲</button>
                      <button @click="cartStore.updateQuantity(item.id, -1)">▼</button>
                   </div>
                </div>
             </div>
             <div class="col-sub"><strong>${{ (item.price * item.qty).toFixed(2) }}</strong></div>
             <div class="col-action actions">
                <button class="icon-btn delete" @click="cartStore.removeFromCart(item.id)">×</button>
                <button class="icon-btn edit">✎</button>
             </div>
          </div>
          
          <div class="cart-actions-row">
             <div class="left-btns">
                <button class="btn btn-outline" @click="viewStore.navigateTo('catalog')">Continuar Comprando</button>
                <button class="btn btn-black" @click="cartStore.clearCart()">Vaciar Carrito</button>
             </div>
             <button class="btn btn-black">Actualizar Carrito</button>
          </div>
        </div>

        <!-- Summary Sidebar Right -->
        <div class="cart-summary-sidebar">
           <h3 class="summary-title">Resumen</h3>
           
           <!-- Accordion: Estimate Shipping -->
           <div class="accordion-item">
              <button class="accordion-head" @click="isShippingOpen = !isShippingOpen">
                 Estimar Envío e Impuestos <span>{{ isShippingOpen ? '▲' : '∨' }}</span>
              </button>
              <div v-show="isShippingOpen" class="accordion-body">
                 <p class="est-text">Ingresa tu destino para obtener un estimado de envío.</p>
                 
                 <div class="form-group-sm">
                    <label>País</label>
                    <select class="input-sm"><option>México</option></select>
                 </div>
                 
                 <div class="form-group-sm">
                    <label>Estado/Provincia</label>
                    <input type="text" class="input-sm" />
                 </div>
                 
                 <div class="form-group-sm">
                    <label>Código Postal</label>
                    <input type="text" class="input-sm" />
                 </div>
                 
                 <div class="shipping-methods">
                    <div class="radio-group">
                       <label>Tarifa Estándar</label>
                       <div class="radio-row">
                          <input type="radio" name="shipping" checked />
                          <span>El precio puede variar según el artículo/destino. El personal se contactará contigo. $21.00</span>
                       </div>
                    </div>
                    
                    <div class="radio-group">
                       <label>Recoger en tienda</label>
                       <div class="radio-row">
                          <input type="radio" name="shipping" />
                          <span>Calle Falsa 1234, Ciudad, 1234 $0.00</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
           
           <!-- Accordion: Discount -->
           <div class="accordion-item">
              <button class="accordion-head" @click="isDiscountOpen = !isDiscountOpen">
                 Aplicar Código de Descuento <span>{{ isDiscountOpen ? '▲' : '∨' }}</span>
              </button>
              <div v-show="isDiscountOpen" class="accordion-body">
                  <label class="form-label">Ingresa código de descuento</label>
                  <input type="text" placeholder="Ingresa código" class="discount-input" />
                  <button class="btn btn-outline-blue btn-block apply-btn">Aplicar Descuento</button>
              </div>
           </div>
           
           <!-- Totals -->
           <div class="summary-totals">
              <div class="total-row"><span>Subtotal</span> <span>${{ subtotal.toLocaleString('en-US', {minimumFractionDigits: 2}) }}</span></div>
              <div class="total-row"><span>Envío</span> <span>${{ shipping.toFixed(2) }}</span></div>
              <p class="shipping-note">(Tarifa Estándar - El precio puede variar según el destino. El personal de TECS se pondrá en contacto.)</p>
              
              <div class="total-row"><span>Impuestos (10%)</span> <span>${{ tax.toFixed(2) }}</span></div>
              
              <div class="total-row grand-total">
                 <span>Total del Pedido</span> <span>${{ total.toLocaleString('en-US', {minimumFractionDigits: 2}) }}</span>
              </div>
           </div>
           
           <!-- Checkout Buttons -->
           <div class="checkout-actions">
              <button class="btn btn-primary btn-block checkout-btn" @click="viewStore.navigateTo('checkout')">Proceder al Pago</button>
              <button class="btn btn-paypal btn-block">Pagar con <strong>PayPal</strong></button>
              <button class="btn btn-outline btn-block">Pagar con Múltiples Direcciones</button>
           </div>
           
           <div class="zip-promo-sidebar">
              <span class="zip-logo">zip</span> own it now, up to 6 months interest free <a href="#">learn more</a>
           </div>
        </div>
      </div>
    </div>
    
    <ServiceIcons />
  </div>
</template>

<style scoped>
.cart-view {
  background: white;
  padding-bottom: 2rem;
}

.page-title {
  font-size: 2rem;
  font-weight: 700;
  margin: 1rem 0 2rem;
}

.cart-layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
}

/* Items Table */
.cart-items-section {
  width: 100%;
}

.cart-header-row {
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr 0.5fr;
  font-weight: 700;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.cart-row {
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr 0.5fr;
  align-items: center;
  border-bottom: 1px solid #e5e7eb;
  padding: 1.5rem 0;
  font-size: 0.9rem;
}

.item-detail {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.item-detail img {
  width: 80px;
  height: 80px;
  object-fit: cover;
}

.item-detail p {
  line-height: 1.4;
  font-size: 0.85rem;
  color: #333;
}

.qty-input {
  background: #f3f4f6;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.qty-arrows {
  display: flex;
  flex-direction: column;
}

.qty-arrows button {
  font-size: 0.6rem;
  line-height: 1;
  color: #666;
}

.actions {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.icon-btn {
  border: 1px solid #ccc;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  color: #666;
}

.cart-actions-row {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}

.left-btns {
  display: flex;
  gap: 1rem;
}

.btn-black {
  background: black;
  color: white;
  border-radius: 20px;
  padding: 0.5rem 1.5rem;
  font-size: 0.85rem;
  font-weight: 600;
}

.btn-outline {
  border: 1px solid #ccc;
  background: white;
  border-radius: 20px;
  padding: 0.5rem 1.5rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: #666;
}

/* Summary Sidebar */
.cart-summary-sidebar {
  background: #f9fafb;
  padding: 1.5rem;
  border-radius: 4px;
}

.summary-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.accordion-item {
  border-bottom: 1px solid #e5e7eb;
}

.accordion-head {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  text-align: left;
  font-weight: 600;
  font-size: 0.9rem;
  background: transparent;
  cursor: pointer;
}

.accordion-body {
  padding-bottom: 1rem;
  font-size: 0.85rem;
  color: #666;
}

.est-text {
  margin-bottom: 1rem;
}

.form-group-sm {
  margin-bottom: 1rem;
}

.form-group-sm label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: #333;
}

.input-sm {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: white;
  font-size: 0.85rem;
}

.shipping-methods {
  margin-top: 1.5rem;
}

.radio-group {
  margin-bottom: 1rem;
}

.radio-group label {
  display: block;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #333;
}

.radio-row {
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
}

.radio-row span {
  font-size: 0.8rem;
  line-height: 1.4;
}

.discount-input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 1rem;
}

.form-label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
}

.btn-outline-blue {
  border: 2px solid #0066cc;
  color: #0066cc;
  background: white;
  font-weight: 600;
  border-radius: 20px;
  padding: 0.5rem;
  font-size: 0.85rem;
}

.btn-outline-blue:hover {
  background: #f0f9ff;
}

.summary-totals {
  margin-top: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 1.5rem;
}

.total-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
  font-weight: 600;
}

.shipping-note {
  font-size: 0.7rem;
  color: #999;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.grand-total {
  font-size: 1.1rem;
  font-weight: 800;
  margin-top: 1rem;
}

.checkout-actions {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.btn-block {
  width: 100%;
  border-radius: 30px;
  padding: 0.75rem;
}

.checkout-btn {
  background: #0066cc; /* Clean Blue */
}

.btn-paypal {
  background: #fbbf24;
  color: black;
  font-weight: 500;
}

.zip-promo-sidebar {
  margin-top: 1.5rem;
  font-size: 0.75rem;
  color: #666;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
}

.zip-logo {
  font-weight: 900;
  font-style: italic;
  color: #4f46e5;
  background: #eef2ff;
  padding: 0 4px;
}

@media (max-width: 1024px) {
  .cart-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
