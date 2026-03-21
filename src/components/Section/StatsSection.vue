<template>
  <section class="stats-section">
    <div class="container">
      <div class="stats-grid">
        <!-- Stat Item 1 -->
        <div class="stat-item">
          <h3 class="stat-number">10K+</h3>
          <p class="stat-label">Students Placed</p>
        </div>

        <!-- Stat Item 2 -->
        <div class="stat-item">
          <h3 class="stat-number">98%</h3>
          <p class="stat-label">Visa Success Rate</p>
        </div>

        <!-- Stat Item 3 -->
        <div class="stat-item">
          <h3 class="stat-number">120+</h3>
          <p class="stat-label">Partner Universities</p>
        </div>

        <!-- Stat Item 4 -->
        <div class="stat-item">
          <h3 class="stat-number">15+</h3>
          <p class="stat-label">Global Destinations</p>
        </div>
      </div>
    </div>
    
    <!-- Decorative background elements to make it premium -->
    <div class="bg-shape shape-left"></div>
    <div class="bg-shape shape-right"></div>
  </section>
</template>

<style scoped>
.stats-section {
  position: relative;
  background-color: var(--color-primary);
  padding: 4rem 0;
  overflow: hidden;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  position: relative;
  z-index: 2;
  text-align: center;
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
}

/* Add a line separator between items on desktop */
.stat-item:not(:last-child)::after {
  content: none;
}

@media (min-width: 768px) {
  .stat-item:not(:last-child)::after {
    content: '';
    position: absolute;
    right: -1.5rem;
    top: 20%;
    height: 60%;
    width: 1px;
    background-color: rgba(255, 255, 255, 0.15);
  }
}

.stat-number {
  font-family: var(--font-heading);
  font-size: 3.5rem;
  font-weight: 800;
  color: var(--text-light);
  line-height: 1;
  text-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.stat-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-primary-light);
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

/* Decorative Shapes */
.bg-shape {
  position: absolute;
  border-radius: var(--border-radius-full);
  background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 100%);
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
  
  .stat-number {
    font-size: 4rem;
  }

  .stat-label {
    font-size: 1rem;
  }
}
</style>
