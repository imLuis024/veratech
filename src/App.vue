<script setup>
import { computed } from "vue";
import { useViewStore } from "./stores/view";
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

const viewStore = useViewStore()
const currentView = computed(() => viewStore.currentView)

const toggleView = (view) => {
  viewStore.navigateTo(view)
};
</script>

<template>
  <div class="app-layout">
    <AppHeader />


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
