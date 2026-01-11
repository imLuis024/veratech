<script setup>
const topLinks = [
  { name: "Soporte", href: "#" },
  { name: "Sucursales", href: "#" },
  { name: "Rastrear Pedido", href: "#" },
];

const categories = [
  { name: "Portátiles", href: "#" },
  { name: "Escritorio", href: "#" },
  { name: "Monitores", href: "#" },
  { name: "Componentes", href: "#" },
  { name: "Accesorios", href: "#" },
  { name: "Redes", href: "#" },
];
</script>

<template>
  <header class="app-header">
    <!-- Top Bar: Black -->
    <div class="top-bar">
      <div class="container top-bar-content">
        <div class="top-left">
          <span>Bienvenido a TechStore Gaming</span>
        </div>
        <div class="top-right">
          <ul class="top-menu">
            <li v-for="link in topLinks" :key="link.name">
              <a :href="link.href">{{ link.name }}</a>
            </li>
            <li class="separator">|</li>
            <li><a href="#" class="login-link">Iniciar Sesión / Registro</a></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Main Header: White -->
    <div class="main-header">
      <div class="container main-header-content">
        <!-- Logo -->
        <a href="#" class="logo">
          <span class="logo-text"
            >TECH<span class="highlight">STORE</span></span
          >
        </a>

        <!-- Search Bar -->
        <div class="search-wrapper">
          <div class="search-input-group">
            <select class="category-select">
              <option>Todas las Categorías</option>
              <option>Portátiles</option>
              <option>Escritorios</option>
            </select>
            <input type="text" placeholder="Buscar productos..." />
            <button class="search-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
        </div>

        <!-- Actions -->
        <div class="header-actions">
          <button class="action-item" aria-label="Lista de Deseos">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
              ></path>
            </svg>
            <span class="action-label">Favoritos</span>
          </button>
          <button class="action-item" aria-label="Carrito">
            <div class="icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path
                  d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
                ></path>
              </svg>
              <span class="badge">2</span>
            </div>
            <span class="action-label">Carrito</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Navigation Bar -->
    <div class="nav-bar">
      <div class="container">
        <ul class="nav-list">
          <li v-for="cat in categories" :key="cat.name">
            <a :href="cat.href" class="nav-link">{{ cat.name }}</a>
          </li>
          <li class="sale-link"><a href="#">Ofertas</a></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  width: 100%;
  box-shadow: var(--shadow-sm);
}

/* Top Bar */
.top-bar {
  background-color: #000000;
  color: #cccccc;
  font-size: 0.75rem;
  padding: 0.5rem 0;
}

.top-bar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.top-menu {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.separator {
  color: #444;
}

.login-link {
  color: white;
  font-weight: 600;
}

/* Main Header */
.main-header {
  background-color: var(--color-surface);
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--color-border);
}

.main-header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.logo-text {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--color-text-main);
  letter-spacing: -1px;
}

.highlight {
  color: var(--color-primary);
}

/* Search */
.search-wrapper {
  flex: 1;
  max-width: 600px;
}

.search-input-group {
  display: flex;
  border: 2px solid var(--color-primary);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.category-select {
  background: #f3f4f6;
  border: none;
  padding: 0 1rem;
  font-size: var(--text-sm);
  color: var(--color-text-main);
  border-right: 1px solid #ddd;
  outline: none;
  cursor: pointer;
}

.search-input-group input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: none;
  outline: none;
  font-size: var(--text-base);
}

.search-btn {
  background: var(--color-primary);
  color: white;
  padding: 0 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}

.search-btn:hover {
  background: var(--color-primary-dark);
}

/* Actions */
.header-actions {
  display: flex;
  gap: 1.5rem;
}

.action-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  color: var(--color-text-main);
  font-size: 0.75rem;
}

.icon-wrapper {
  position: relative;
}

.badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background: var(--color-primary);
  color: white;
  font-size: 0.7rem;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

/* Navigation */
.nav-bar {
  background: white;
  border-bottom: 1px solid var(--color-border);
}

.nav-list {
  display: flex;
  gap: 2rem;
  padding: 1rem 0;
}

.nav-link {
  font-weight: 600;
  color: var(--color-text-main);
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 0.02em;
}

.nav-link:hover {
  color: var(--color-primary);
}

.sale-link a {
  color: var(--color-primary);
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.9rem;
}
</style>
