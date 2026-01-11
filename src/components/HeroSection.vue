<script setup></script>

<template>
  <section class="hero-banner">
    <div class="banner-content">
      <div class="container relative">
        <div class="promo-text">
          <div class="promo-badge">OFERTA SEMANAL</div>
          <h1 class="promo-title">GANA UN MONITOR<br />GAMING DE REGALO</h1>
          <p class="promo-desc">En la compra de PCs de Escritorio GeForce RTX seleccionadas</p>
          <button class="btn btn-primary shop-now">COMPRAR AHORA</button>
        </div>
      </div>
    </div>

    <!-- Slider Controls -->
    <button class="slider-arrow left" aria-label="Previous">
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
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </button>
    <button class="slider-arrow right" aria-label="Next">
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
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </button>

    <!-- Pagination -->
    <div class="slider-dots">
      <span class="dot active"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
  </section>
</template>

<style scoped>
.hero-banner {
  position: relative;
  width: 100%;
  height: 450px;
  background-color: #000;
  /* Simulating a dark gaming banner background */
  background-image: linear-gradient(to right, #000 30%, rgba(0, 0, 0, 0) 100%),
    url("https://placehold.co/1920x600/1a1a1a/FFF?text=Gaming+Banner+Background");
  background-size: cover;
  background-position: center;
  color: white;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.container.relative {
  height: 100%;
  display: flex;
  align-items: center;
}

.promo-text {
  max-width: 500px;
  position: relative;
  z-index: 10;
  padding-left: 2rem;
}

.promo-badge {
  background: var(--color-primary);
  color: white;
  display: inline-block;
  padding: 0.25rem 0.75rem;
  font-weight: 700;
  font-size: var(--text-sm);
  margin-bottom: 1rem;
  transform: skew(-10deg);
}

.promo-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-family: var(--font-display);
}

.promo-desc {
  font-size: var(--text-lg);
  color: #ccc;
  margin-bottom: 2rem;
}

.shop-now {
  padding: 0.75rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 700;
  background: white;
  color: black;
  border-radius: 0;
  text-transform: uppercase;
  clip-path: polygon(0 0, 100% 0, 95% 100%, 0% 100%);
}

.shop-now:hover {
  background: var(--color-primary);
  color: white;
  transform: scale(1.05);
}

.slider-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  color: white;
  width: 50px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;
}

.slider-arrow:hover {
  background: rgba(255, 255, 255, 0.2);
}

.slider-arrow.left {
  left: 0;
}
.slider-arrow.right {
  right: 0;
}

.slider-dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
}

.dot {
  width: 10px;
  height: 10px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  cursor: pointer;
}

.dot.active {
  background: var(--color-primary);
}
</style>
