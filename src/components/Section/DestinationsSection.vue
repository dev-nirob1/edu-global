<template>
  <section class="destinations-section">
    <div class="container">
      <SectionHeader
        title="Popular"
        highlight="Destinations"
        subtitle="Explore world-class education systems and find the perfect country to launch your massive career trajectory."
        buttonText="View All Destinations"
        buttonLink="/destinations"
      />

      <div class="destinations-grid">
        <DestinationCard
          v-for="(dest, index) in destinations"
          :key="index"
          :destinationLink="dest.link"
          :imageSrc="dest.imageSrc"
          :imageAlt="dest.imageAlt"
          :tags="dest.tags"
          :countryName="dest.countryName"
          :univCount="dest.univCount"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '@/components/Widget/SectionHeader.vue'
import DestinationCard from '@/components/Widget/DestinationCard.vue'

const destinations = [
  {
    link: '/destinations/uk',
    imageSrc: '/dest-uk.png',
    imageAlt: 'Study in the UK',
    tags: ['Top Ranked', '2yr Post-Study Visa'],
    countryName: 'United Kingdom',
    univCount: '120+ Universities'
  },
  {
    link: '/destinations/usa',
    imageSrc: '/dest-usa.png',
    imageAlt: 'Study in the USA',
    tags: ['Ivy League', 'STEM Focus'],
    countryName: 'United States',
    univCount: '4000+ Universities'
  },
  {
    link: '/destinations/canada',
    imageSrc: '/dest-canada.png',
    imageAlt: 'Study in Canada',
    tags: ['PR Pathway', 'Affordable'],
    countryName: 'Canada',
    univCount: '90+ Universities'
  },
  {
    link: '/destinations/australia',
    imageSrc: '/dest-australia.png',
    imageAlt: 'Study in Australia',
    tags: ['Global Hub', 'Great Lifestyle'],
    countryName: 'Australia',
    univCount: '40+ Universities'
  }
]
</script>

<style scoped>
.destinations-section {
  padding: var(--spacing-2xl) 0;
  background-color: var(--bg-offset);
}

.destinations-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

/* Breakpoints */
@media (min-width: 768px) {
  .destinations-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .destinations-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
