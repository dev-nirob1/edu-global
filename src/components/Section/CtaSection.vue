<template>
  <section class="cta-section">
    <div class="container">
      <div class="cta-box">
        <!-- Abstract Background Shapes -->
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        
        <div class="cta-content">
          <h2 class="cta-title">Ready to Start Your Global Journey?</h2>
          <p class="cta-subtitle">
            Join thousands of successful students. Get expert guidance on university selection, applications, and visas.
          </p>
          <div class="cta-actions">
            <router-link to="/contact" class="btn btn-accent btn-large">Get Free Consultation</router-link>
            <router-link to="/destinations" class="btn btn-outline-light btn-large">Explore Destinations</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  padding: var(--spacing-2xl) 0;
  background-color: var(--bg-surface);
}

.cta-box {
  position: relative;
  background-color: var(--color-primary);
  border-radius: var(--border-radius-lg);
  padding: 4rem 2rem;
  overflow: hidden;
  text-align: center;
  box-shadow: var(--shadow-lg);
}

/* Abstract Shapes for premium look */
.shape {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 1;
}

.shape-1 {
  width: 300px;
  height: 300px;
  top: -100px;
  left: -50px;
}

.shape-2 {
  width: 400px;
  height: 400px;
  bottom: -150px;
  right: -100px;
}

.cta-content {
  position: relative;
  z-index: 2;
  max-width: 700px;
  margin: 0 auto;
}

.cta-title {
  font-family: var(--font-heading);
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--text-light);
  line-height: 1.2;
  margin-bottom: 1rem;
  letter-spacing: -0.5px;
}

.cta-subtitle {
  font-size: 1.125rem;
  color: var(--color-primary-light);
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.cta-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
}

.btn-large {
  padding: 1rem 2rem;
  font-size: 1.125rem;
  width: 100%;
}

.btn-outline-light {
  background-color: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: var(--text-light);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  border-radius: var(--border-radius-md);
  cursor: pointer;
}

.btn-outline-light:hover {
  border-color: var(--text-light);
  background-color: rgba(255, 255, 255, 0.1);
}

/* Breakpoints */
@media (min-width: 768px) {
  .cta-box {
    padding: 5rem 3rem;
  }
  
  .cta-title {
    font-size: 3rem;
  }
  
  .cta-actions {
    flex-direction: row;
  }
  
  .btn-large {
    width: auto;
  }
}
</style>
