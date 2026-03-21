<script setup>
defineProps({
  destinationLink: {
    type: String,
    required: true
  },
  imageSrc: {
    type: String,
    required: true
  },
  imageAlt: {
    type: String,
    required: true
  },
  countryName: {
    type: String,
    required: true
  },
  univCount: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <router-link :to="destinationLink" class="destination-card">
    <div class="card-image">
      <img :src="imageSrc" :alt="imageAlt" />
      <div class="card-overlay"></div>
      <div class="card-tags">
        <span v-for="(tag, index) in tags" :key="index" class="tag glass-tag">{{ tag }}</span>
      </div>
    </div>
    <div class="card-content">
      <h3 class="country-name">{{ countryName }}</h3>
      <p class="univ-count">{{ univCount }}</p>
      <div class="explore-row">
        <span class="explore-text">Explore Programs</span>
        <span class="explore-icon">→</span>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
/* Destination Card Styles */
.destination-card {
  display: block;
  background-color: var(--bg-surface);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  text-decoration: none;
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.destination-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.card-image {
  position: relative;
  height: 240px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.destination-card:hover .card-image img {
  transform: scale(1.08); /* Beautiful subtle Zoom effect */
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 40%, rgba(15, 23, 42, 0.6) 100%);
  z-index: 1;
}

.card-tags {
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  z-index: 2;
}

.glass-tag {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: var(--text-light);
  padding: 0.25rem 0.75rem;
  border-radius: var(--border-radius-full);
  font-size: 0.75rem;
  font-weight: 600;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}

.card-content {
  padding: 1rem;
  position: relative;
  background-color: var(--bg-surface);
  z-index: 2;
  border-top: 4px solid var(--color-primary); /* Nice accent line */
  transition: border-color 0.3s ease;
}

.destination-card:hover .card-content {
  border-color: var(--color-secondary); /* Flips to gold/yellow on hover */
}

.country-name {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.25rem;
}

.univ-count {
  font-size: 0.875rem;
  color: var(--text-muted);
  margin-bottom: 1.25rem;
}

.explore-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-primary);
  font-weight: 600;
}

.explore-text {
  font-size: 0.95rem;
}

.explore-icon {
  font-size: 1.25rem;
  transition: transform 0.3s ease;
}

.destination-card:hover .explore-icon {
  transform: translateX(6px);
}
</style>
