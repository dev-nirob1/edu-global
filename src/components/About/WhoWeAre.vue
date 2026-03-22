<template>
  <section class="who-we-are">
    <div class="container">
      <div class="story-grid">
        <div class="story-content">
          <h2 class="section-title">Breaking Borders Since 2015</h2>
          <p class="story-text">
            EduGlobal began with a single mission: to remove the stress and confusion from the international university admissions process. We believed that bright minds shouldn't be held back by complex bureaucracies.
          </p>
          <p class="story-text">
            Today, we are a premier education consultancy guiding students to dream institutions worldwide. Our ethos is built on full transparency, student-first counseling, and an unwavering commitment to your future.
          </p>

          <div class="story-highlights">
            <div class="highlight-item">
              <h3>100%</h3>
              <p>Transparent</p>
            </div>
            <div class="highlight-item">
              <h3>24/7</h3>
              <p>Student Support</p>
            </div>
            <div class="highlight-item">
              <h3>Global</h3>
              <p>Alumni Network</p>
            </div>
          </div>
        </div>

        <div class="story-image-wrap">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
            alt="EduGlobal Team Collaboration"
            class="story-image"
          />
          <div class="floating-badge">
            <span class="badge-icon">🌟</span>
            <div>
              <strong>Top Rated</strong>
              <p>By 500+ Students</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Who We Are Section */
.who-we-are {
  padding: var(--spacing-2xl) 0;
  background-color: var(--bg-offset);
}

.story-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
}

.section-title {
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 1.5rem;
  letter-spacing: -0.5px;
}

.story-text {
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}

.story-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2.5rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
}

.highlight-item h3 {
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-primary);
  margin-bottom: 0.25rem;
  line-height: 1;
}

.highlight-item p {
  color: var(--text-main);
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 1px;
  margin: 0;
}

.story-image-wrap {
  position: relative;
  border-radius: var(--border-radius-lg);
  overflow: visible; /* To allow floating badge */
}

.story-image {
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: var(--border-radius-lg);
  display: block;
  object-fit: cover;
  box-shadow: var(--shadow-lg);
  transition: transform 0.3s ease;
}

.story-image-wrap:hover .story-image {
  transform: scale(1.02);
}

.floating-badge {
  position: absolute;
  bottom: -20px;
  left: 20px;
  background-color: var(--bg-surface);
  padding: 1rem 1.5rem;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-lg);
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid var(--border-color);
  animation: float 3s ease-in-out infinite;
  z-index: 2;
}

.badge-icon {
  font-size: 2rem;
}

.floating-badge strong {
  display: block;
  font-size: 1.125rem;
  color: var(--text-main);
}

.floating-badge p {
  margin: 0;
  color: var(--text-muted);
  font-size: 0.875rem;
}

@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}

@media (min-width: 1024px) {
  .story-grid {
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
  }
  .floating-badge {
    bottom: 30px;
    left: -30px;
  }
}
</style>
