<script setup>
defineProps({
  name: String,
  university: String,
  review: String,
  rating: Number,
  avatarUrl: String,
  initials: String,
})
</script>

<template>
  <div class="testimonial-card">
    <div class="card-header">
      <div v-if="avatarUrl" class="avatar-img">
        <img :src="avatarUrl" :alt="name" />
      </div>
      <div v-else class="avatar-initials">
        {{ initials }}
      </div>
      <div class="user-info">
        <h4 class="user-name">{{ name }}</h4>
        <p class="user-univ">
          <strong>{{ university }}</strong>
        </p>
      </div>
    </div>
    <div class="rating">
      <span v-for="i in 5" :key="i" class="star" :class="{ filled: i <= rating }">★</span>
    </div>
    <p class="review-text">"{{ review }}"</p>
  </div>
</template>

<style scoped>
.testimonial-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  padding: 2rem;
  text-align: left;
  transition:
    box-shadow 0.3s ease,
    border-color 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.testimonial-card:hover {
  box-shadow: var(--shadow-md);
  border-color: var(--color-primary-light);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.avatar-img {
  width: 56px;
  height: 56px;
  border-radius: var(--border-radius-full);
  overflow: hidden;
  flex-shrink: 0;
}

.avatar-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-initials {
  width: 56px;
  height: 56px;
  border-radius: var(--border-radius-full);
  background-color: var(--color-primary-light);
  color: var(--color-primary-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.user-info {
  flex: 1;
}

.user-name {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--text-main);
  margin: 0 0 0.25rem 0;
}

.user-univ {
  font-size: 0.875rem;
  color: var(--text-muted);
  margin: 0;
}

.user-univ strong {
  color: var(--text-main);
  font-weight: 600;
}

.rating {
  margin-bottom: 1.25rem;
  color: #e2e8f0;
  font-size: 1.25rem;
  letter-spacing: 2px;
}

.rating .star.filled {
  color: var(--color-secondary); /* Gold/Yellow */
}

.review-text {
  font-size: 1rem;
  line-height: 1.6;
  font-style: italic;
  margin: 0;
  flex-grow: 1;
}
</style>
