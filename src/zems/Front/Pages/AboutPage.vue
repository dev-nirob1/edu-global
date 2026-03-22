<template>
  <div class="about-page">
    <!-- Who We Are / Story Section -->
    <WhoWeAre />

    <!-- CEO & Founder Section -->
    <CeoFounder />

    <!-- Meet the Team Section -->
    <TeamSection />
  </div>
</template>

<script setup>
import WhoWeAre from '@/components/About/WhoWeAre.vue'
import CeoFounder from '@/components/About/CeoFounder.vue'
import TeamSection from '@/components/About/TeamSection.vue'
</script>

<style scoped>
.about-page {
  background-color: var(--bg-offset);
  min-height: 100vh;
  padding-bottom: var(--spacing-2xl);
}
</style>
