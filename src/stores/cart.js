import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [
        // Default with one item for demo purposes, or empty
        {
          id: 999,
          image: 'https://placehold.co/100x100/111/fff?text=Trident+X',
          name: 'MSI MPG Trident 3',
          price: 3799.00,
          qty: 1
        }
    ],
    shippingRate: 21.00,
    taxRate: 0.10 // 10%
  }),
  getters: {
    cartCount: (state) => state.cartItems.reduce((acc, item) => acc + item.qty, 0),
    
    subtotal: (state) => state.cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0),
    
    taxAmount: (state) => (state.cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0) * state.taxRate),
    
    grandTotal: (state) => {
        const sub = state.cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0)
        return sub + state.shippingRate // assuming tax included or calculated differently? The mock implies Tax is separate but Order Total is typically Sub + Ship + Tax. 
        // Based on mock: Subtotal $13k, Tax $1.91 (weirdly low), Total $13k. Let's start with basic Math.
        // Let's just do Sub + Shipping for now to keep it simple unless Tax is additive.
    }
  },
  actions: {
    addToCart(product, quantity = 1) {
      const existing = this.cartItems.find(item => item.id === product.id)
      if (existing) {
        existing.qty += quantity
      } else {
        this.cartItems.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            qty: quantity
        })
      }
    },
    removeFromCart(id) {
      this.cartItems = this.cartItems.filter(item => item.id !== id)
    },
    updateQuantity(id, step) {
      const item = this.cartItems.find(item => item.id === id)
      if (item) {
        item.qty += step
        if (item.qty < 1) item.qty = 1
      }
    },
    clearCart() {
       this.cartItems = []
    }
  }
})
