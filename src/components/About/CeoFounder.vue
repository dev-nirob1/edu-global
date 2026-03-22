<template>
  <section class="ceo-section">
    <div class="container">
      <div class="ceo-grid">
        <!-- CEO Image Area -->
        <div class="ceo-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop"
            alt="CEO and Founder"
            class="ceo-image"
          />
          <div class="experience-badge">
            <span class="exp-number">15+</span>
            <span class="exp-text">Years of<br />Excellence</span>
          </div>
        </div>

        <!-- CEO Message Area -->
        <div class="ceo-message">
          <h3 class="message-heading">
            "We measure our success entirely by the
            <span class="highlight">success of our students.</span>"
          </h3>

          <div class="message-body">
            <p>
              When I founded EduGlobal, I envisioned a consultancy that focuses purely on the
              student's potential. Having navigated the complex international visa systems myself, I
              intimately understand the challenges families face.
            </p>
            <p>
              We don't just process applications; we mentor future global leaders. Your ambition is
              our blueprint—let's cross boundaries and achieve your dreams together.
            </p>
          </div>

          <div class="founder-signature">
            <h4 class="founder-name">Jonathan Richards</h4>
            <p class="founder-title">CEO & Founder, EduGlobal</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ceo-section {
  padding: 5rem 0;
  background-color: var(--bg-surface);
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
}

.ceo-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;
}

.ceo-image-wrapper {
  position: relative;
  border-radius: var(--border-radius-lg);
}

.ceo-image {
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: var(--border-radius-lg);
  object-fit: cover;
  box-shadow: var(--shadow-xl);
  display: block;
}

.experience-badge {
  position: absolute;
  bottom: -2rem;
  right: 1rem;
  background-color: var(--color-primary);
  color: var(--text-light);
  padding: 1.5rem;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-lg);
  display: flex;
  align-items: center;
  gap: 1rem;
}

.exp-number {
  font-family: var(--font-heading);
  font-size: 3rem;
  font-weight: 800;
  line-height: 1;
}

.exp-text {
  font-size: 0.95rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 1.3;
}

.message-heading {
  font-family: var(--font-heading);
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--text-main);
  line-height: 1.3;
  margin-bottom: 2rem;
  letter-spacing: -0.5px;
}

.message-body p {
  font-size: 1.125rem;
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.founder-signature {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
}

.founder-name {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 0.25rem;
}

.founder-title {
  color: var(--color-primary);
  font-weight: 600;
  margin-bottom: 1rem;
}

@media (min-width: 1024px) {
  .ceo-grid {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
  .experience-badge {
    bottom: 3rem;
    right: -3rem;
  }
}
</style>
