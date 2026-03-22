<template>
  <section class="stats-section">
    <div class="container">
      <div class="stats-grid">
        <StatItem
          v-for="(stat, index) in stats"
          :key="index"
          :value="stat.value"
          :label="stat.label"
        />
      </div>
    </div>

    <!-- Decorative background elements to make it premium -->
    <div class="bg-shape shape-left"></div>
    <div class="bg-shape shape-right"></div>
  </section>
</template>

<script setup>
import StatItem from '@/components/Widget/StatItem.vue'

const stats = [
  { value: '10K+', label: 'Students Placed' },
  { value: '98%', label: 'Visa Success Rate' },
  { value: '120+', label: 'Partner Universities' },
  { value: '15+', label: 'Global Destinations' },
]
</script>

<style scoped>
.stats-section {
  position: relative;
  background-color: var(--color-primary);
  padding: 5rem 0;
  margin-top: 3rem;
  overflow: hidden;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 3rem;
  position: relative;
  z-index: 2;
  text-align: center;
}

/* Decorative Shapes */
.bg-shape {
  position: absolute;
  border-radius: var(--border-radius-full);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 1;
}

.shape-left {
  width: 400px;
  height: 400px;
  top: -200px;
  left: -150px;
}

.shape-right {
  width: 300px;
  height: 300px;
  bottom: -150px;
  right: -50px;
}

/* Breakpoints */
@media (min-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
  }
}
</style>
