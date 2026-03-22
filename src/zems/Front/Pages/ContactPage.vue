<template>
  <div class="contact-page">
    <div class="page-header">
      <div class="container header-center">
        <SectionHeader 
          title="Get in" 
          highlight="Touch"
          subtitle="We would love to hear from you. Our expert counselors are ready to answer all your questions."
          isPageTitle
        />
      </div>
    </div>

    <div class="container contact-container">
      <div class="contact-grid">
        <!-- Contact Info (Left) -->
        <div class="contact-info">
          <h2>Contact Information</h2>
          <p class="mb-4 text-muted">Whether you're curious about university admissions, visa processing, or our premium services, we're here to help.</p>
          
          <div class="info-block">
            <div class="icon-circle"><i class="fa-solid fa-location-dot"></i></div>
            <div>
              <h4>Our Headquarters</h4>
              <p>123 Global Education Blvd, Suite 400<br>New York, NY 10001, USA</p>
            </div>
          </div>
          
          <div class="info-block">
            <div class="icon-circle"><i class="fa-solid fa-phone"></i></div>
            <div>
              <h4>Phone Number</h4>
              <p>+1 (555) 123-4567<br>Mon-Fri, 9am - 6pm (EST)</p>
            </div>
          </div>
          
          <div class="info-block">
            <div class="icon-circle"><i class="fa-solid fa-envelope"></i></div>
            <div>
              <h4>Email Address</h4>
              <p>admissions@eduglobal.com<br>support@eduglobal.com</p>
            </div>
          </div>

          <!-- Socials -->
          <div class="social-links">
            <h4>Follow Us</h4>
            <div class="social-icons">
              <a href="#" class="social-icon" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
              <a href="#" class="social-icon" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
              <a href="#" class="social-icon" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
              <a href="#" class="social-icon" aria-label="Twitter"><i class="fa-brands fa-x-twitter"></i></a>
            </div>
          </div>
        </div>

        <!-- Contact Form (Right) -->
        <div class="contact-form-wrapper card-box">
          <h2>Send us a Message</h2>
          <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-row">
              <div class="form-group">
                <label for="firstName">First Name</label>
                <input type="text" id="firstName" v-model="form.firstName" required placeholder="John" />
              </div>
              <div class="form-group">
                <label for="lastName">Last Name</label>
                <input type="text" id="lastName" v-model="form.lastName" required placeholder="Doe" />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" v-model="form.email" required placeholder="john@example.com" />
              </div>
              <div class="form-group">
                <label for="phone">Phone Number</label>
                <input type="tel" id="phone" v-model="form.phone" placeholder="+1 (555) 000-0000" />
              </div>
            </div>

            <div class="form-group">
              <label for="service">Interested Service</label>
              <select id="service" v-model="form.service" required>
                <option value="" disabled>Select a service...</option>
                <option value="admissions">University Admissions</option>
                <option value="visa">Visa Processing</option>
                <option value="scholarships">Scholarships & Funding</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>

            <div class="form-group">
              <label for="message">Your Message</label>
              <textarea id="message" v-model="form.message" rows="5" required placeholder="How can we help you?"></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-submit" :disabled="isSubmitting">
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
            <p v-if="successMsg" class="success-message">{{ successMsg }}</p>
          </form>
        </div>
      </div>
    </div>

    <!-- Map Section -->
    <div class="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.617540700877!2d-73.99646278453303!3d40.74844047932822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2592284dc834b%3A0xc38e3e4f71a938c1!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1633538413693!5m2!1sen!2sus"
        width="100%"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import SectionHeader from '@/components/Widget/SectionHeader.vue'

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  service: '',
  message: ''
})

const isSubmitting = ref(false)
const successMsg = ref('')

const handleSubmit = () => {
  isSubmitting.value = true
  // Mock API Call simulating network delay
  setTimeout(() => {
    isSubmitting.value = false
    successMsg.value = 'Thank you! Your message has been successfully sent. We will contact you shortly.'
    
    // Reset form
    form.firstName = ''
    form.lastName = ''
    form.email = ''
    form.phone = ''
    form.service = ''
    form.message = ''
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      successMsg.value = ''
    }, 5000)
  }, 1500)
}
</script>

<style scoped>
.contact-page {
  background-color: var(--bg-offset);
  min-height: 100vh;
  padding-bottom: var(--spacing-2xl);
}

.page-header {
  background-color: var(--bg-surface);
  padding: 4rem 0;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: var(--spacing-xl);
}

.page-title {
  font-size: 3rem;
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 1rem;
  letter-spacing: -1px;
}

.header-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.header-center :deep(.section-header) {
  align-items: center;
  margin-bottom: 0;
}

.header-center :deep(.header-text) {
  margin: 0 auto;
}

.contact-container {
  padding-bottom: 4rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

/* Contact Info (Left) */
.contact-info h2 {
  font-size: 2.25rem;
  color: var(--text-main);
  margin-bottom: 1rem;
  letter-spacing: -0.5px;
}

.text-muted {
  color: var(--text-muted);
  line-height: 1.6;
}

.mb-4 {
  margin-bottom: 2rem;
}

.info-block {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  margin-bottom: 2rem;
}

.icon-circle {
  width: 56px;
  height: 56px;
  background-color: var(--color-primary-light);
  border-radius: var(--border-radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: var(--color-primary-dark);
  flex-shrink: 0;
}

.info-block h4 {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.25rem;
}

.info-block p {
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0;
}

.social-links {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
}

.social-links h4 {
  font-size: 1.125rem;
  color: var(--text-main);
  margin-bottom: 1rem;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icon {
  width: 44px;
  height: 44px;
  background-color: var(--bg-surface);
  border: 1px solid var(--border-color);
  color: var(--color-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-icon:hover {
  background-color: var(--color-primary);
  color: var(--text-light);
  border-color: var(--color-primary);
  transform: translateY(-3px);
  box-shadow: var(--shadow-sm);
}

/* Contact Form (Right) */
.card-box {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-lg);
  padding: 2.5rem;
  box-shadow: var(--shadow-md);
}

.card-box h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--text-main);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-main);
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.875rem 1rem;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-sm);
  background-color: var(--bg-offset);
  color: var(--text-main);
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-primary-light);
}

.btn-submit {
  padding: 1rem;
  font-size: 1.125rem;
  font-weight: 600;
  margin-top: 1rem;
  border: none;
  cursor: pointer;
}

.btn-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.success-message {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #dcfce7;
  color: #166534;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  text-align: center;
}

/* Breakpoints */
@media (min-width: 768px) {
  .form-row {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr 1.2fr;
    align-items: start;
  }
}

/* Map Container */
.map-container {
  width: 100%;
  height: 450px;
  background-color: var(--bg-offset);
  border-top: 1px solid var(--border-color);
}
</style>
