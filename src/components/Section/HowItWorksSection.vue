<template>
  <section class="how-it-works">
    <div class="container">
      <div class="header-center">
        <SectionHeader 
          title="How It" 
          highlight="Works"
          subtitle="Your journey to global education simplified into 6 easy steps."
        />
      </div>

      <div class="steps-container">
        <StepCard
          v-for="step in steps"
          :key="step.number"
          :number="step.number"
          :icon="step.icon"
          :title="step.title"
          :description="step.description"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '@/components/Widget/SectionHeader.vue'
import StepCard from '@/components/Widget/StepCard.vue'

const steps = [
  {
    number: '01',
    icon: '💬',
    title: 'Free Consultation',
    description: 'Speak with our expert counselors to discuss your goals, academic background, and budget to find the perfect path.'
  },
  {
    number: '02',
    icon: '🎓',
    title: 'Program Selection',
    description: 'We help you shortlist top universities and submit your applications with highly optimized statements of purpose.'
  },
  {
    number: '03',
    icon: '✈️',
    title: 'Visa Assistance',
    description: 'Receive end-to-end guidance on visa documentation, interview preparation, and financial structuring.'
  },
  {
    number: '04',
    icon: '🎒',
    title: 'Pre-Departure',
    description: 'Get assistance with accommodation, flights, and everything you need to know before landing in your new country.'
  },
  {
    number: '05',
    icon: '🌍',
    title: 'Arrival & Settling In',
    description: 'Touch down safely with airport pickup options, orientation events, and ongoing support from our local networks.'
  },
  {
    number: '06',
    icon: '🚀',
    title: 'Ongoing Support',
    description: 'We stay connected throughout your studies, assisting with visas, post-study work rights, and permanent residency options.'
  }
]
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
