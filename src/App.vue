<script setup>
import { ref } from "vue";
import AppHeader from "./components/AppHeader.vue";
import HeroSection from "./components/HeroSection.vue";
import HomeCatalog from "./components/HomeCatalog.vue";
import BrandsBanner from "./components/BrandsBanner.vue";
import CatalogView from "./components/CatalogView.vue";
import ProductDetailView from "./components/ProductDetailView.vue";
import ContactView from './components/ContactView.vue';
import CartView from './components/CartView.vue'
import CheckoutView from './components/CheckoutView.vue'
import UserAccountView from './components/UserAccountView.vue'
import AboutView from './components/AboutView.vue'
import TermsView from './components/TermsView.vue'
import AppFooter from "./components/AppFooter.vue";

const currentView = ref('terms') // Default to terms for review

const toggleView = (view) => {
  currentView.value = view;
};
</script>

<template>
  <div class="app-layout">
    <AppHeader />

    <!-- Temporary Dev Switcher -->
    <div
      style="
        background: #333;
        color: white;
        padding: 5px;
        text-align: center;
        font-size: 12px;
      "
    >
      DEV MODE:
      <button
        @click="toggleView('home')"
        :style="{
          fontWeight: currentView === 'home' ? 'bold' : 'normal',
          color: 'white',
        }"
      >
        Home
      </button>
      |
      <button
        @click="toggleView('catalog')"
        :style="{
          fontWeight: currentView === 'catalog' ? 'bold' : 'normal',
          color: 'white',
        }"
      >
        Catalog
      </button>
      |
      <button
        @click="toggleView('product')"
        :style="{
          fontWeight: currentView === 'product' ? 'bold' : 'normal',
          color: 'white',
        }"
      >
        Product
      </button>
      |
      <button @click="toggleView('contact')" :style="{ fontWeight: currentView === 'contact' ? 'bold' : 'normal', color: 'white' }">Contact</button> | 
      <button @click="toggleView('cart')" :style="{ fontWeight: currentView === 'cart' ? 'bold' : 'normal', color: 'white' }">Cart</button> | 
      <button @click="toggleView('checkout')" :style="{ fontWeight: currentView === 'checkout' ? 'bold' : 'normal', color: 'white' }">Checkout</button> | 
      <button @click="toggleView('account')" :style="{ fontWeight: currentView === 'account' ? 'bold' : 'normal', color: 'white' }">Account</button> | 
      <button @click="toggleView('about')" :style="{ fontWeight: currentView === 'about' ? 'bold' : 'normal', color: 'white' }">About</button> | 
      <button @click="toggleView('terms')" :style="{ fontWeight: currentView === 'terms' ? 'bold' : 'normal', color: 'white' }">Terms</button>
    </div>

    <main v-if="currentView === 'home'">
      <HeroSection />
      <BrandsBanner />
      <HomeCatalog />
    </main>

    <main v-else-if="currentView === 'catalog'">
      <CatalogView />
    </main>

    <main v-else-if="currentView === 'product'">
      <ProductDetailView />
    </main>

    <main v-else-if="currentView === 'contact'">
      <ContactView />
    </main>

    <main v-else-if="currentView === 'cart'">
      <CartView />
    </main>

    <main v-else-if="currentView === 'checkout'">
      <CheckoutView />
    </main>

    <main v-else-if="currentView === 'account'">
      <UserAccountView />
    </main>

    <main v-else-if="currentView === 'about'">
      <AboutView />
    </main>

    <main v-else-if="currentView === 'terms'">
      <TermsView />
    </main>

    <AppFooter />
  </div>
</template>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
