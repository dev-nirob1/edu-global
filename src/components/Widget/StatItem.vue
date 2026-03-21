<script setup>
defineProps({
  value: String,
  label: String
})
</script>

<template>
  <div class="stat-item">
    <h3 class="stat-number">{{ value }}</h3>
    <p class="stat-label">{{ label }}</p>
  </div>
</template>

<style scoped>
.stat-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
}

.stat-item:not(:last-child)::after {
  content: none;
}

@media (min-width: 768px) {
  .stat-item:not(:last-child)::after {
    content: '';
    position: absolute;
    right: -1.5rem;
    top: 20%;
    height: 60%;
    width: 1px;
    background-color: rgba(255, 255, 255, 0.15);
  }
}

.stat-number {
  font-family: var(--font-heading);
  font-size: 3.5rem;
  font-weight: 800;
  color: var(--text-light);
  line-height: 1;
  text-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.stat-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-primary-light);
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

@media (min-width: 768px) {
  .stat-number {
    font-size: 4rem;
  }

  .stat-label {
    font-size: 1rem;
  }
}
</style>
