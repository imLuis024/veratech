<script setup>
import { useViewStore } from "../stores/view";

const viewStore = useViewStore();

const navLinks = [
  { name: "Laptops", view: "catalog" },
  { name: "Desktop PCs", view: "catalog" },
  { name: "Networking Devices", view: "catalog" },
  { name: "Printers & Scanners", view: "catalog" },
  { name: "PC Parts", view: "catalog" },
  { name: "All Other Products", view: "catalog" },
  { name: "Repairs", view: "catalog" },
];

const navigateTo = (view) => {
  viewStore.navigateTo(view);
};
</script>

<template>
  <header class="app-header">
    <!-- Top Bar -->
    <div class="top-bar">
      <div class="container top-bar-content">
        <div class="top-left">
          <span>Mon-Thu: <strong>9:00 AM - 5:30 PM</strong></span>
          <span class="chevron-down">▾</span>
        </div>
        <div class="top-center">
          <span>Visit our showroom in 1234 Street Adress City Address, 1234 <a href="#" @click.prevent="navigateTo('contact')" class="contact-link">Contact Us</a></span>
        </div>
        <div class="top-right">
          <span class="phone">Call Us: (00) 1234 5678</span>
          <div class="social-icons">
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Header -->
    <div class="main-header">
      <div class="container main-header-content">
        <!-- Logo -->
        <a href="#" @click.prevent="navigateTo('home')" class="logo">
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 2L2 12V28L20 38L38 28V12L20 2Z" fill="#0066FF" stroke="none"/>
            <path d="M20 7L6 15V25L20 33L34 25V15L20 7Z" fill="#ffffff" stroke="none" opacity="0.3"/>
             <path d="M14 22L11 19L20 13L29 19L24 22V26L20 29L14 26V22Z" fill="white"/>
          </svg>
        </a>

        <!-- Navigation -->
        <nav class="main-nav">
          <ul>
            <li v-for="link in navLinks" :key="link.name">
              <a href="#" @click.prevent="navigateTo(link.view)">{{ link.name }}</a>
            </li>
          </ul>
        </nav>

         <!-- Deals Button -->
        <a href="#" @click.prevent="navigateTo('catalog')" class="deals-btn">Our Deals</a>

        <!-- Right Side Icons -->
        <div class="header-actions">
           <button class="icon-btn search-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
          
          <button class="icon-btn cart-btn" @click="navigateTo('cart')">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
             <span class="badge">2</span>
          </button>

          <button class="profile-btn" @click="navigateTo('account')">
             <img src="https://i.pravatar.cc/150?img=11" alt="User Profile" class="avatar" />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  font-family: 'Inter', sans-serif; /* Assuming Inter is available or fallback */
  width: 100%;
  background: white;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Top Bar */
.top-bar {
  background-color: #000000;
  color: #ffffff;
  font-size: 12px;
  padding: 8px 0;
}

.top-bar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.top-left, .top-center, .top-right {
  display: flex;
  align-items: center;
  gap: 10px;
}

.contact-link {
  color: #fff;
  text-decoration: underline;
  margin-left: 2px;
}

.phone {
  margin-right: 15px;
}

.social-icons {
  display: flex;
  gap: 10px;
}

.social-icons a {
  color: white;
  display: flex;
  align-items: center;
}

.chevron-down {
  font-size: 10px;
  color: #888;
}

/* Main Header */
.main-header {
  padding: 20px 0;
  border-bottom: 1px solid #f0f0f0;
}

.main-header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

/* Logo */
.logo svg {
  display: block;
}

/* Navigation */
.main-nav ul {
  display: flex;
  list-style: none;
  gap: 25px;
  padding: 0;
  margin: 0;
}

.main-nav a {
  text-decoration: none;
  color: #000;
  font-weight: 600;
  font-size: 14px;
  white-space: nowrap;
}

.main-nav a:hover {
  color: #0066FF;
}

/* Deals Button */
.deals-btn {
  border: 2px solid #0066FF;
  color: #0066FF;
  padding: 8px 18px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 14px;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.2s;
}

.deals-btn:hover {
  background-color: #0066FF;
  color: white;
}

/* Header Actions */
.header-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.icon-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  position: relative;
  color: #000;
}

.badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #0066FF;
  color: white;
  font-size: 10px;
  font-weight: bold;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
}

.profile-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
