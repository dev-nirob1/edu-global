<script setup>
defineProps({
  number: String,
  icon: String,
  title: String,
  description: String
})
</script>

<template>
  <div class="step-card">
    <div class="step-number">{{ number }}</div>
    <div class="step-icon" v-html="icon"></div>
    <h3 class="step-title">{{ title }}</h3>
    <p class="step-desc">{{ description }}</p>
  </div>
</template>

<style scoped>
.step-card {
  position: relative;
  background-color: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-lg);
  padding: 2.5rem 1.5rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  overflow: hidden;
  z-index: 1;
}

.step-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
  border-color: var(--color-primary-light);
}

.step-number {
  position: absolute;
  top: -15px;
  right: -5px;
  font-family: var(--font-heading);
  font-size: 8rem;
  font-weight: 800;
  color: var(--bg-offset);
  line-height: 1;
  z-index: -1;
  transition: color 0.3s ease;
  pointer-events: none;
}

.step-card:hover .step-number {
  color: var(--color-primary-light);
  opacity: 0.5;
}

.step-icon {
  font-size: 2.25rem;
  width: 72px;
  height: 72px;
  margin: 0 auto 1.5rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary-light);
  border-radius: var(--border-radius-full);
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.step-card:hover .step-icon {
  transform: scale(1.1) rotate(5deg);
  background-color: var(--color-primary);
}

.step-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 1rem;
}

.step-desc {
  font-size: 0.95rem;
  color: var(--text-muted);
  margin: 0;
  line-height: 1.6;
}
</style>
