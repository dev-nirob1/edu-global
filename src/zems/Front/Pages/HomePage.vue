<script setup>
import HeroSection from '@/components/Section/HeroSection.vue'
import StatsSection from '@/components/Section/StatsSection.vue'
import HowItWorksSection from '@/components/Section/HowItWorksSection.vue'
import DestinationsSection from '@/components/Section/DestinationsSection.vue'
import TestimonialsSection from '@/components/Section/TestimonialsSection.vue'
import CtaSection from '@/components/Section/CtaSection.vue'
</script>

<template>
  <div class="homepage">
    <HeroSection />
    <StatsSection />
    <HowItWorksSection />
    <DestinationsSection />
    <TestimonialsSection />
    <CtaSection />
  </div>
</template>

<style scoped>
.homepage {
  display: flex;
  flex-direction: column;
}
</style>
