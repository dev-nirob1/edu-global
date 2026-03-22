<template>
  <footer class="site-footer">
    <div class="container footer-container">
      <!-- Brand & Description -->
      <div class="footer-brand">
        <router-link to="/" class="logo"> Edu<span>Global</span> </router-link>
        <p class="footer-desc">
          Your trusted partner in shaping international academic careers. We provide end-to-end
          guidance for studying abroad.
        </p>
        <div class="social-links">
          <a href="#" class="social-icon" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#" class="social-icon" aria-label="Twitter"><i class="fa-brands fa-x-twitter"></i></a>
          <a href="#" class="social-icon" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
          <a href="#" class="social-icon" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
        </div>
      </div>

      <!-- Quick Links -->
      <div class="footer-links">
        <h4 class="footer-heading">Quick Links</h4>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/destinations">Destinations</router-link></li>
          <li><router-link to="/services">Services</router-link></li>
          <li><router-link to="/about">About Us</router-link></li>
        </ul>
      </div>

      <!-- Support -->
      <div class="footer-links">
        <h4 class="footer-heading">Support</h4>
        <ul>
          <li><router-link to="/contact">Contact Us</router-link></li>
          <li><router-link to="/faq">FAQ</router-link></li>
          <li><router-link to="/privacy">Privacy Policy</router-link></li>
          <li><router-link to="/terms">Terms of Service</router-link></li>
        </ul>
      </div>

      <!-- Newsletter/Contact box -->
      <div class="footer-newsletter">
        <h4 class="footer-heading">Stay Updated</h4>
        <p>Subscribe to our newsletter for the latest opportunities.</p>
        <form class="newsletter-form" @submit.prevent>
          <input type="email" placeholder="Your email address" required />
          <button type="submit" class="btn btn-accent">Subscribe</button>
        </form>
      </div>
    </div>

    <!-- Copyright -->
    <div class="footer-bottom">
      <div class="container">
        <p>&copy; {{ currentYear }} EduGlobal. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.site-footer {
  background-color: var(--color-primary);
  color: var(--color-primary-light);
  padding-top: var(--spacing-xl);
  margin-top: auto;
}

.footer-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: var(--spacing-xl);
}

.logo {
  font-family: var(--font-heading);
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--text-light);
  text-decoration: none;
  letter-spacing: -0.5px;
  display: inline-block;
  margin-bottom: 1rem;
}

.logo span {
  color: var(--color-secondary); /* Gold on Teal looks great */
}

.footer-desc {
  color: var(--color-primary-light);
  opacity: 0.8;
  max-width: 300px;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.social-icon {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--text-light);
  border-radius: var(--border-radius-full);
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.2s ease;
}

.social-icon:hover {
  background-color: var(--color-secondary);
  color: var(--color-primary);
  transform: translateY(-2px);
}

.footer-heading {
  font-size: 1.125rem;
  color: var(--text-light);
  margin-bottom: 1.5rem;
}

.footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-links a {
  color: var(--color-primary-light);
  opacity: 0.8;
  transition:
    opacity 0.2s ease,
    color 0.2s ease;
}

.footer-links a:hover {
  opacity: 1;
  color: var(--color-secondary);
}

.footer-newsletter p {
  color: var(--color-primary-light);
  opacity: 0.8;
  margin-bottom: 1rem;
}

.newsletter-form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.newsletter-form input {
  padding: 0.75rem 1rem;
  border-radius: var(--border-radius-md);
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: rgba(255, 255, 255, 0.05);
  color: var(--text-light);
  outline: none;
}

.newsletter-form input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.newsletter-form input:focus {
  border-color: var(--color-secondary);
  background-color: rgba(255, 255, 255, 0.1);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem 0;
  text-align: center;
}

.footer-bottom p {
  margin: 0;
  color: var(--color-primary-light);
  opacity: 0.7;
  font-size: 0.875rem;
}

/* Tablet & Desktop Layout */
@media (min-width: 768px) {
  .footer-container {
    grid-template-columns: 2fr 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .footer-container {
    grid-template-columns: 3fr 2fr 2fr 3fr;
  }
  .newsletter-form {
    flex-direction: row;
  }
  .newsletter-form button {
    flex-shrink: 0;
  }
}
</style>
