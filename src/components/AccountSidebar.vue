<script setup>
</script>

<template>
  <aside class="account-sidebar">
    <div class="account-menu">
      <h3>Account Dashboard</h3>
      <ul>
        <li><a href="#" class="active">Account Information</a></li>
        <li><a href="#">Address Book</a></li>
        <li><a href="#">My Orders</a></li>
        <li><a href="#">My Downloadable Products</a></li>
        <li><a href="#">Stored Payment Methods</a></li>
        <li><a href="#">Billing Agreements</a></li>
        <li><a href="#">My Wish List</a></li>
        <li><a href="#">My Product Reviews</a></li>
        <li><a href="#">Newsletter Subscriptions</a></li>
      </ul>
    </div>

    <!-- Widgets reused style from CatalogSidebar but specific to Account -->
    <div class="sidebar-widget">
      <h4>Compare Products</h4>
      <p class="empty-msg">You have no items to compare.</p>
    </div>

    <div class="sidebar-widget">
      <h4>My Wish List</h4>
      <p class="empty-msg">You have no items in your wish list.</p>
    </div>
  </aside>
</template>

<style scoped>
.account-sidebar {
  width: 250px;
  flex-shrink: 0;
  background: #f5f7fa;
  min-height: 500px;
}

.account-menu {
  margin-bottom: 2rem;
  background: #f5f7fa; /* Match content or specific styling */
}

.account-menu h3 {
  padding: 1rem;
  font-weight: 700;
  border-left: 3px solid var(--color-primary); /* Highlight for dashboard */
  background: #f5f7fa; /* Typically active state background */
  margin-bottom: 1rem;
}

.account-menu ul {
  list-style: none;
  padding: 0 1rem;
}

.account-menu li {
  margin-bottom: 0.5rem;
}

.account-menu a {
  text-decoration: none;
  color: #666;
  font-size: 0.9rem;
  display: block;
  padding: 0.5rem 0;
}

.account-menu a:hover, .account-menu a.active {
  color: black;
  font-weight: 500;
}

.sidebar-widget {
  background: #f3f4f6;
  padding: 1rem;
  text-align: center;
  margin: 1rem;
  border-radius: 4px;
}

.sidebar-widget h4 {
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.empty-msg {
  font-size: 0.8rem;
  color: #666;
}
</style>
