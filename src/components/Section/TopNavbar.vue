<template>
  <header class="navbar">
    <div class="container nav-container">
      <!-- Logo -->
      <router-link to="/" class="logo">
        Edu<span>Global</span>
      </router-link>

      <!-- Desktop Menu -->
      <nav class="desktop-nav">
        <router-link to="/" class="nav-link" exact-active-class="active">Home</router-link>
        <router-link to="/destinations" class="nav-link" active-class="active">Destinations</router-link>
        <router-link to="/services" class="nav-link" active-class="active">Services</router-link>
        <router-link to="/about" class="nav-link" active-class="active">About Us</router-link>
        <router-link to="/contact" class="nav-link" active-class="active">Contact</router-link>
      </nav>

      <!-- CTA Button (Desktop) -->
      <div class="nav-actions">
        <router-link to="/contact" class="btn btn-accent">Apply Now</router-link>
      </div>

      <!-- Mobile Menu Toggle -->
      <button class="mobile-toggle" @click="toggleMenu" :aria-expanded="isMenuOpen" aria-label="Toggle navigation menu">
        <span class="hamburger" :class="{ 'is-active': isMenuOpen }"></span>
      </button>
    </div>

    <!-- Mobile Menu Overlay -->
    <div class="mobile-menu" :class="{ 'is-open': isMenuOpen }">
      <nav class="mobile-nav">
        <router-link to="/" class="mobile-link" @click="closeMenu" exact-active-class="active">Home</router-link>
        <router-link to="/destinations" class="mobile-link" @click="closeMenu" active-class="active">Destinations</router-link>
        <router-link to="/services" class="mobile-link" @click="closeMenu" active-class="active">Services</router-link>
        <router-link to="/about" class="mobile-link" @click="closeMenu" active-class="active">About Us</router-link>
        <router-link to="/contact" class="mobile-link" @click="closeMenu" active-class="active">Contact</router-link>
        <router-link to="/contact" class="btn btn-accent mobile-cta" @click="closeMenu">Apply Now</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

// Close mobile menu if window is resized to desktop width
const handleResize = () => {
  if (window.innerWidth >= 992 && isMenuOpen.value) {
    closeMenu()
  }
}

onMounted(() => window.addEventListener('resize', handleResize))
onUnmounted(() => window.removeEventListener('resize', handleResize))
</script>

<style scoped>
.navbar {
  background-color: var(--bg-surface);
  border-bottom: 1px solid var(--border-color);
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
}

.logo {
  font-family: var(--font-heading);
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--text-main);
  text-decoration: none;
  letter-spacing: -0.5px;
}

.logo span {
  color: var(--color-primary);
}

/* Desktop Navigation */
.desktop-nav {
  display: none;
  gap: 2.5rem;
}

.nav-link {
  font-weight: 500;
  color: var(--text-muted);
  position: relative;
  transition: color 0.3s ease;
  font-size: 1rem;
}

.nav-link:hover, .nav-link.active {
  color: var(--color-primary);
}

/* Underline animation on hover */
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-primary);
  transition: width 0.3s ease;
}

.nav-link:hover::after, .nav-link.active::after {
  width: 100%;
}

.nav-actions {
  display: none;
}

/* Mobile Toggle Hamburger */
.mobile-toggle {
  display: block;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
}

.hamburger {
  display: block;
  width: 24px;
  height: 2px;
  background-color: var(--text-main);
  position: relative;
  transition: background-color 0.3s ease;
}

.hamburger::before, .hamburger::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--text-main);
  left: 0;
  transition: transform 0.3s ease, top 0.3s ease;
}

.hamburger::before { top: -8px; }
.hamburger::after { top: 8px; }

/* Active Hamburger State (X shape) */
.hamburger.is-active { background-color: transparent; }
.hamburger.is-active::before { top: 0; transform: rotate(45deg); }
.hamburger.is-active::after { top: 0; transform: rotate(-45deg); }

/* Mobile Menu Panel */
.mobile-menu {
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  height: calc(100vh - 80px);
  background-color: var(--bg-surface);
  padding: 2rem;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  overflow-y: auto;
}

.mobile-menu.is-open {
  transform: translateX(0);
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.mobile-link {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-main);
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border-color);
  transition: color 0.2s ease;
}

.mobile-link:hover, .mobile-link.active {
  color: var(--color-primary);
}

.mobile-cta {
  margin-top: 1rem;
  text-align: center;
  width: 100%;
}

/* Desktop Breakpoint */
@media (min-width: 992px) {
  .desktop-nav, .nav-actions {
    display: flex;
    align-items: center;
  }
  .mobile-toggle, .mobile-menu {
    display: none;
  }
}
</style>
