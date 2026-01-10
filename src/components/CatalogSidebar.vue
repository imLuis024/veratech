<script setup></script>

<template>
  <aside class="sidebar">
    <div class="filters-header">
      <h3>Filters</h3>
      <button class="clear-btn">Clear Filter</button>
    </div>

    <!-- Category Filter -->
    <div class="filter-group">
      <h4>Category</h4>
      <ul>
        <li>
          <a href="#">Custom PCs <span>15</span></a>
        </li>
        <li>
          <a href="#">MSI All-in-One PCs <span>45</span></a>
        </li>
        <li>
          <a href="#">HP/Compaq PCs <span>1</span></a>
        </li>
      </ul>
    </div>

    <!-- Price Filter -->
    <div class="filter-group">
      <h4>Price</h4>
      <ul>
        <li>
          <a href="#">$0.00 - $1,000.00 <span>19</span></a>
        </li>
        <li>
          <a href="#">$1,000.00 - $2,000.00 <span>21</span></a>
        </li>
        <li>
          <a href="#">$2,000.00 - $3,000.00 <span>9</span></a>
        </li>
        <li>
          <a href="#">$3,000.00 - $4,000.00 <span>6</span></a>
        </li>
        <li>
          <a href="#">$4,000.00 - $5,000.00 <span>3</span></a>
        </li>
        <li>
          <a href="#">$5,000.00 - $6,000.00 <span>1</span></a>
        </li>
        <li>
          <a href="#">$6,000.00 - $7,000.00 <span>1</span></a>
        </li>
        <li>
          <a href="#">$7,000.00 And Above <span>1</span></a>
        </li>
      </ul>
    </div>

    <!-- Color Filter -->
    <div class="filter-group">
      <h4>Color</h4>
      <div class="color-options">
        <span class="color-circle black"></span>
        <span class="color-circle red"></span>
      </div>
    </div>

    <!-- Filter Name -->
    <div class="filter-group">
      <h4>Filter Name</h4>
      <button class="btn btn-primary apply-btn">Apply Filters (2)</button>
    </div>

    <!-- Brands Grid -->
    <div class="brands-widget">
      <h4>Brands</h4>
      <button class="all-brands-btn">All Brands</button>
      <div class="brands-grid">
        <div class="brand-box">ROCCAT</div>
        <div class="brand-box">MSI</div>
        <div class="brand-box">Razer</div>
        <div class="brand-box">Thermal</div>
        <div class="brand-box">ADATA</div>
        <div class="brand-box">HP</div>
        <div class="brand-box">Gigabyte</div>
      </div>
    </div>

    <!-- Widget: Compare Products -->
    <div class="widget">
      <h4>Compare Products</h4>
      <p class="empty-msg">You have no items to compare.</p>
    </div>

    <!-- Widget: My Wish List -->
    <div class="widget">
      <h4>My Wish List</h4>
      <p class="empty-msg">You have no items in your wish list.</p>
    </div>

    <!-- Sidebar Ad -->
    <div class="sidebar-ad">
      <img
        src="https://placehold.co/240x350/111/fff?text=noblechairs"
        alt="Ad"
      />
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 240px;
  flex-shrink: 0;
  background: #f5f7fa; /* Match content bg or strict white */
  padding-right: 1rem;
}

.filters-header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1.5rem;
  text-align: center;
}

.filters-header h3 {
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.clear-btn {
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 0.25rem 1.5rem;
  font-size: 0.8rem;
  color: #666;
  background: white;
}

.filter-group {
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 1rem;
}

.filter-group h4 {
  font-weight: 700;
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
  display: flex;
  justify-content: space-between;
}

.filter-group h4::after {
  content: "▾"; /* simple arrow */
}

.filter-group ul {
  font-size: 0.85rem;
}

.filter-group li {
  margin-bottom: 0.5rem;
}

.filter-group a {
  display: flex;
  justify-content: space-between;
  color: var(--color-text-main);
  text-decoration: none;
}

.filter-group a span {
  color: #999;
}

.color-options {
  display: flex;
  gap: 0.5rem;
}

.color-circle {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 0 0 1px #ccc;
  cursor: pointer;
}

.color-circle.black {
  background: black;
}
.color-circle.red {
  background: red;
}

.apply-btn {
  width: 100%;
  border-radius: 20px;
  font-size: 0.85rem;
}

.brands-widget {
  text-align: center;
  margin-bottom: 2rem;
}

.all-brands-btn {
  border: 1px solid #ccc;
  padding: 0.25rem 1rem;
  border-radius: 4px;
  font-size: 0.8rem;
  margin-bottom: 1rem;
  background: white;
  width: 100%;
}

.brands-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
}

.brand-box {
  border: 1px solid #e5e7eb;
  padding: 0.5rem;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
}

.widget {
  background: #f3f4f6;
  padding: 1rem;
  text-align: center;
  margin-bottom: 1rem;
}

.widget h4 {
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.empty-msg {
  font-size: 0.75rem;
  color: #666;
}

.sidebar-ad img {
  width: 100%;
  display: block;
}
</style>
