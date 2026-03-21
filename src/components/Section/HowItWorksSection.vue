<template>
  <section class="how-it-works">
    <div class="container">
      <div class="header-center">
        <SectionHeader 
          title="How It" 
          highlight="Works"
          subtitle="Your journey to global education simplified into 4 easy steps."
        />
      </div>

      <div class="steps-container">
        <!-- Step 1 -->
        <div class="step-card">
          <div class="step-number">01</div>
          <div class="step-icon">💬</div>
          <h3 class="step-title">Free Consultation</h3>
          <p class="step-desc">
            Speak with our expert counselors to discuss your goals, academic background, and budget to find the perfect path.
          </p>
        </div>

        <!-- Step 2 -->
        <div class="step-card">
          <div class="step-number">02</div>
          <div class="step-icon">🎓</div>
          <h3 class="step-title">Program Selection</h3>
          <p class="step-desc">
            We help you shortlist top universities and submit your applications with highly optimized statements of purpose.
          </p>
        </div>

        <!-- Step 3 -->
        <div class="step-card">
          <div class="step-number">03</div>
          <div class="step-icon">✈️</div>
          <h3 class="step-title">Visa Assistance</h3>
          <p class="step-desc">
            Receive end-to-end guidance on visa documentation, interview preparation, and financial structuring.
          </p>
        </div>

        <!-- Step 4 -->
        <div class="step-card">
          <div class="step-number">04</div>
          <div class="step-icon">🎒</div>
          <h3 class="step-title">Pre-Departure</h3>
          <p class="step-desc">
            Get assistance with accommodation, flights, and everything you need to know before landing in your new country.
          </p>
        </div>

        <!-- Step 5 -->
        <div class="step-card">
          <div class="step-number">05</div>
          <div class="step-icon">🌍</div>
          <h3 class="step-title">Arrival & Settling In</h3>
          <p class="step-desc">
            Touch down safely with airport pickup options, orientation events, and ongoing support from our local networks.
          </p>
        </div>

        <!-- Step 6 -->
        <div class="step-card">
          <div class="step-number">06</div>
          <div class="step-icon">🚀</div>
          <h3 class="step-title">Ongoing Support</h3>
          <p class="step-desc">
            We stay connected throughout your studies, assisting with visas, post-study work rights, and permanent residency options.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '@/components/Widget/SectionHeader.vue'
</script>

<style scoped>
.how-it-works {
  padding: var(--spacing-2xl) 0;
  background-color: var(--bg-surface);
}

.header-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 0;
}

/* Scoping deep styles to force center alignment on the widget without breaking its normal flow elsewhere */
.header-center :deep(.section-header) {
  align-items: center;
  margin-bottom: 1rem;
}

.header-center :deep(.header-text) {
  margin: 0 auto;
}

/* Steps Grid */
.steps-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  position: relative;
  padding-top: 1rem;
}

.step-card {
  position: relative;
  background-color: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-lg);
  padding: 2.5rem 1.5rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  overflow: hidden;
  z-index: 1;
}

.step-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
  border-color: var(--color-primary-light);
}

/* Massive Watermark Number */
.step-number {
  position: absolute;
  top: -15px;
  right: -5px;
  font-family: var(--font-heading);
  font-size: 8rem;
  font-weight: 800;
  color: var(--bg-offset);
  line-height: 1;
  z-index: -1;
  transition: color 0.3s ease;
  pointer-events: none;
}

.step-card:hover .step-number {
  color: var(--color-primary-light);
  opacity: 0.5;
}

.step-icon {
  font-size: 2.25rem;
  width: 72px;
  height: 72px;
  margin: 0 auto 1.5rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary-light);
  border-radius: var(--border-radius-full);
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.step-card:hover .step-icon {
  transform: scale(1.1) rotate(5deg);
  background-color: var(--color-primary);
}

.step-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 1rem;
}

.step-desc {
  font-size: 0.95rem;
  color: var(--text-muted);
  margin: 0;
  line-height: 1.6;
}

/* Breakpoints */
@media (min-width: 768px) {
  .steps-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .steps-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
