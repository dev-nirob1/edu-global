<script setup>
import HeroSection from '@/components/Section/HeroSection.vue'
import DestinationsSection from '@/components/Section/DestinationsSection.vue'
</script>

<template>
  <div class="homepage">
    <HeroSection />
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
