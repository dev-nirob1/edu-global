<template>
  <section class="hero-section">
    <div class="container hero-container">
      <!-- Left Content -->
      <div class="hero-content">
        <h1 class="hero-title">
          Study Abroad Without the
          <span class="highlight">Stress.</span>
        </h1>
        <p class="hero-subtitle">
          Join thousands of students who have trusted EduGlobal to find their dream university,
          secure their visa, and land safely in their new home.
        </p>

        <div class="hero-actions">
          <router-link to="/destinations" class="btn btn-primary btn-large"
            >Start Your Journey</router-link
          >
          <router-link to="/contact" class="btn btn-outline btn-large gap-icon">
            Talk to an Expert <span class="arrow">→</span>
          </router-link>
        </div>

        <!-- Social Proof -->
        <div class="social-proof">
          <div class="avatars">
            <img
              class="avatar"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
              alt="Student"
            />
            <img
              class="avatar"
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop"
              alt="Student"
            />
            <img
              class="avatar"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
              alt="Student"
            />
            <img
              class="avatar"
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=100&auto=format&fit=crop"
              alt="Student"
            />
          </div>
          <p class="trusted-text"><strong>10,000+</strong> students globally.</p>
        </div>
      </div>

      <!-- Right Visuals -->
      <div class="hero-visuals">
        <div class="image-wrapper">
          <img
            src="/hero-image.png"
            alt="Diverse university students studying"
            class="main-image"
          />

          <!-- Floating notification badges -->
          <div class="floating-badge badge-top">
            <div class="badge-icon"><i class="fa-solid fa-graduation-cap"></i></div>
            <div class="badge-text">
              <strong>98%</strong>
              <span>Visa Success</span>
            </div>
          </div>

          <div class="floating-badge badge-bottom">
            <div class="badge-icon"><i class="fa-solid fa-globe"></i></div>
            <div class="badge-text">
              <strong>15+</strong>
              <span>Destinations</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No dynamic script needed yet for the pure hero layout.
</script>

<style scoped>
.hero-section {
  padding: var(--spacing-xl) 0;
  background-color: var(--bg-surface);
  overflow: hidden;
}

.hero-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-xl);
  align-items: center;
}

/* Left Content Styles */
.hero-content {
  max-width: 600px;
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.15;
  color: var(--text-main);
  margin-bottom: var(--spacing-md);
  letter-spacing: -1px;
}

.highlight {
  color: var(--color-primary);
  position: relative;
  display: inline-block;
  z-index: 1;
}

.highlight::after {
  content: '';
  position: absolute;
  bottom: 8px;
  left: 0;
  width: 100%;
  height: 12px;
  background-color: var(--color-primary-light);
  z-index: -1;
  transform: rotate(-2deg);
}

.hero-subtitle {
  font-size: 1.125rem;
  color: var(--text-muted);
  margin-bottom: var(--spacing-lg);
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: var(--spacing-xl);
}

.btn-large {
  padding: 1rem 2rem;
  font-size: 1.125rem;
}

.gap-icon {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.arrow {
  transition: transform 0.2s ease;
}

.btn-outline:hover .arrow {
  transform: translateX(4px);
}
.btn-primary:hover {
  color: var(--bg-surface);
}
/* Social Proof */
.social-proof {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.avatars {
  display: flex;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: var(--border-radius-full);
  border: 3px solid var(--bg-surface);
  margin-left: -12px;
  box-shadow: var(--shadow-sm);
  object-fit: cover;
}

.avatar:first-child {
  margin-left: 0;
}

.trusted-text {
  margin: 0;
  font-size: 0.875rem;
  color: var(--text-muted);
}

.trusted-text strong {
  color: var(--text-main);
  font-weight: 700;
}

/* Right Visuals */
.hero-visuals {
  position: relative;
}

.image-wrapper {
  position: relative;
  border-radius: var(--border-radius-lg);
  padding-bottom: 2rem;
  padding-right: 2rem;
}

.main-image {
  width: 100%;
  height: auto;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-xl);
  object-fit: cover;
  position: relative;
  z-index: 1;
}

.image-wrapper::before {
  content: '';
  position: absolute;
  top: 2rem;
  left: 2rem;
  width: 100%;
  height: 100%;
  background-color: var(--color-primary-light);
  border-radius: var(--border-radius-lg);
  z-index: 0;
}

/* Floating Badges */
.floating-badge {
  position: absolute;
  background-color: var(--bg-surface);
  padding: 1rem 1.25rem;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-lg);
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 2;
  animation: float 6s ease-in-out infinite;
}

.badge-top {
  top: -1.5rem;
  right: -1rem;
  animation-delay: 0s;
}

.badge-bottom {
  bottom: 0.5rem;
  left: -1rem;
  animation-delay: 3s;
}

.badge-icon {
  font-size: 1.5rem;
  background-color: var(--color-primary-light);
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius-full);
}

.badge-text {
  display: flex;
  flex-direction: column;
}

.badge-text strong {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--text-main);
  line-height: 1.1;
}

.badge-text span {
  font-size: 0.875rem;
  color: var(--text-muted);
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

/* Responsive Breakpoints */
@media (min-width: 768px) {
  .hero-title {
    font-size: 3.5rem;
  }
}

@media (min-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr 1fr;
  }

  .hero-title {
    font-size: 4rem;
  }
}
</style>
