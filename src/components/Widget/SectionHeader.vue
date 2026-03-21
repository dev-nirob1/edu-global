<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  highlight: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  buttonText: {
    type: String,
    default: ''
  },
  buttonLink: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="section-header">
    <div class="header-text">
      <h2 class="section-title">
        {{ title }} <span v-if="highlight" class="highlight">{{ highlight }}</span>
      </h2>
      <p v-if="subtitle" class="section-subtitle">
        {{ subtitle }}
      </p>
    </div>
    <router-link v-if="buttonText && buttonLink" :to="buttonLink" class="btn btn-outline view-all-btn">
      {{ buttonText }} <span class="arrow">→</span>
    </router-link>
  </div>
</template>

<style scoped>
.section-header {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: var(--spacing-xl);
}

.header-text {
  max-width: 600px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--text-main);
  letter-spacing: -0.5px;
}

.highlight {
  color: var(--color-primary);
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--text-muted);
  margin-top: 0.5rem;
  line-height: 1.6;
}

.arrow {
  display: inline-block;
  transition: transform 0.2s ease;
}

.view-all-btn:hover .arrow {
  transform: translateX(4px);
}

@media (min-width: 768px) {
  .section-header {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
  
  .view-all-btn {
    flex-shrink: 0;
    margin-bottom: 0.5rem;
  }
}
</style>
