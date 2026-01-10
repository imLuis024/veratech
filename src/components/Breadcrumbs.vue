<script setup>
defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <nav class="breadcrumbs">
    <ul>
      <li><a href="#">Home</a></li>
      <li v-for="(item, index) in items" :key="index">
        <span class="separator">›</span>
        <a href="#" :class="{ active: index === items.length - 1 }">{{
          item
        }}</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.breadcrumbs {
  margin: 1rem 0;
  font-size: 0.85rem;
  color: var(--color-text-main);
}

ul {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

a {
  color: var(--color-text-main);
  text-decoration: none;
}

.separator {
  color: #999;
}

.active {
  color: #999;
  pointer-events: none;
}
</style>
