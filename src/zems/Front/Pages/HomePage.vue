<script setup>
import HeroSection from '@/components/Section/HeroSection.vue'
import StatsSection from '@/components/Section/StatsSection.vue'
import HowItWorksSection from '@/components/Section/HowItWorksSection.vue'
import DestinationsSection from '@/components/Section/DestinationsSection.vue'
</script>

<template>
  <div class="homepage">
    <HeroSection />
    <StatsSection />
    <HowItWorksSection />
    <DestinationsSection />
    <!-- Additional Sections will go here -->
  </div>
</template>

<style scoped>
.homepage {
  display: flex;
  flex-direction: column;
}
</style>
