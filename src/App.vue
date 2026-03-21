<script setup>
import { RouterView } from 'vue-router'
import TopNavbar from '@/components/Section/TopNavbar.vue'
import SiteFooter from '@/components/Section/SiteFooter.vue'
</script>

<template>
  <div class="app-layout">
    <TopNavbar />
    <main class="main-content">
      <RouterView />
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main-content {
  flex-grow: 1; /* Ensures footer is pushed down */
}
</style>
