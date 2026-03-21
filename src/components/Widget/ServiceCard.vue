<script setup>
defineProps({
  icon: String,
  title: String,
  description: String,
  features: Array
})
</script>

<template>
  <div class="service-card">
    <div class="service-icon">{{ icon }}</div>
    <h3 class="service-title">{{ title }}</h3>
    <p class="service-desc">{{ description }}</p>
    <ul class="service-features" v-if="features && features.length > 0">
      <li v-for="(feat, index) in features" :key="index">
        <span class="check">✓</span> {{ feat }}
      </li>
    </ul>
    <router-link to="/contact" class="btn btn-outline w-100 mt-auto">Get Started</router-link>
  </div>
</template>

<style scoped>
.service-card {
  display: flex;
  flex-direction: column;
  background-color: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-lg);
  padding: 2.5rem;
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  height: 100%;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
  border-color: var(--color-primary-light);
}

.service-icon {
  font-size: 2.5rem;
  width: 72px;
  height: 72px;
  background-color: var(--color-primary-light);
  color: var(--color-primary-dark);
  border-radius: var(--border-radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.service-card:hover .service-icon {
  transform: scale(1.1) rotate(5deg);
  background-color: var(--color-primary);
}

.service-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 1rem;
  letter-spacing: -0.5px;
}

.service-desc {
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.service-features {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.service-features li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: var(--text-muted);
}

.check {
  color: var(--color-secondary);
  font-weight: 800;
}

.w-100 {
  width: 100%;
  text-align: center;
}

.mt-auto {
  margin-top: auto;
}
</style>
