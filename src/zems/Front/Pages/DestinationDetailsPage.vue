<template>
  <div class="destination-details" v-if="country">
    <!-- Hero Banner -->
    <div class="dest-hero">
      <div class="hero-overlay"></div>
      <img :src="country.heroImage" :alt="country.name" class="hero-bg" />
      <div class="container hero-content">
        <h1 class="country-title">Study in {{ country.name }}</h1>
        <p class="country-subtitle">{{ country.tagline }}</p>
        <button class="btn btn-accent btn-large mt-4">Apply Now</button>
      </div>
    </div>

    <!-- Quick Facts Strip -->
    <div class="quick-facts">
      <div class="container">
        <div class="facts-grid">
          <div class="fact-item">
            <span class="fact-icon">🏛️</span>
            <div class="fact-text">
              <strong>Capital</strong>
              <span>{{ country.facts.capital }}</span>
            </div>
          </div>
          <div class="fact-item">
            <span class="fact-icon">💱</span>
            <div class="fact-text">
              <strong>Currency</strong>
              <span>{{ country.facts.currency }}</span>
            </div>
          </div>
          <div class="fact-item">
            <span class="fact-icon">🗣️</span>
            <div class="fact-text">
              <strong>Language</strong>
              <span>{{ country.facts.language }}</span>
            </div>
          </div>
          <div class="fact-item">
            <span class="fact-icon">📅</span>
            <div class="fact-text">
              <strong>Intakes</strong>
              <span>{{ country.facts.intake }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content Area -->
    <div class="container content-area">
      <div class="layout-grid">
        <!-- Left: Why Study Here -->
        <main class="main-info">
          <h2>Why Study in {{ country.name }}?</h2>
          <div class="reasons-list">
            <div class="reason-card" v-for="(reason, index) in country.reasons" :key="index">
              <div class="check-circle">✓</div>
              <p>{{ reason }}</p>
            </div>
          </div>

          <h2 class="mt-5">Visa Requirements</h2>
          <div class="visa-info card-box">
            <p>{{ country.visaInfo }}</p>
            <ul class="styled-list">
              <li>Valid Passport & Identification</li>
              <li>Acceptance Letter from University</li>
              <li>Proof of Financial Funds</li>
              <li>Language Proficiency Proof (e.g., IELTS, TOEFL)</li>
            </ul>
          </div>
        </main>

        <!-- Right: Sidebar (Top Universities) -->
        <aside class="sidebar">
          <div class="card-box">
            <h3>Top Universities</h3>
            <ul class="univ-list">
              <li v-for="(univ, index) in country.universities" :key="index">
                <span class="bullet">🎓</span>
                {{ univ }}
              </li>
            </ul>
            <router-link to="/contact" class="btn btn-outline w-100 mt-4">Start Admissions Process</router-link>
          </div>
        </aside>
      </div>
    </div>
  </div>
  
  <div v-else class="container not-found">
    <h2>Destination Not Found</h2>
    <p>We couldn't find details for the country you selected.</p>
    <router-link to="/destinations" class="btn btn-primary mt-3">Back to Destinations</router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const countryId = route.params.id

// Detailed Mock Data for selected core destinations
const countriesData = {
  uk: {
    name: 'the UK',
    tagline: 'Experience world-class education rooted in centuries of academic excellence.',
    heroImage: '/dest-uk.png',
    facts: { capital: 'London', currency: 'GBP (£)', language: 'English', intake: 'Sep / Jan' },
    reasons: [
      'Home to Oxford, Cambridge, and prestigious Russel Group universities.',
      'Benefit from a full 2-year Post-Study Work Visa after graduation.',
      'Shorter degree programs (3-year undergrad, 1-year master’s) save time and money.',
      'A massive multicultural hub providing excellent European networking opportunities.'
    ],
    visaInfo: 'The UK Student Visa (Tier 4) allows you to live and study in the UK. You can also legally work up to 20 hours a week during term time to support your life abroad.',
    universities: ['University of Oxford', 'University of Cambridge', 'Imperial College London', 'UCL', 'University of Edinburgh', 'King’s College London']
  },
  usa: {
    name: 'the USA',
    tagline: 'The global epicenter of technology, innovation, and diverse educational opportunities.',
    heroImage: '/dest-usa.png',
    facts: { capital: 'Washington D.C.', currency: 'USD ($)', language: 'English', intake: 'Fall / Spring' },
    reasons: [
      'Dominated by Ivy League excellence and world-leading cutting edge research facilities.',
      'Highly flexible education system allowing you to change majors easily.',
      'STEM-focused OPT allows up to 3 years of highly lucrative post-graduation work.',
      'Massive campus life culture with incredible extracurriculars.'
    ],
    visaInfo: 'The F-1 Student Visa is the most common for international students. You will need an I-20 form from your accepted university before applying.',
    universities: ['MIT', 'Stanford University', 'Harvard University', 'Caltech', 'University of Chicago', 'Princeton University']
  },
  canada: {
    name: 'Canada',
    tagline: 'A welcoming, safe, and highly affordable destination with clear pathways to permanent residency.',
    heroImage: '/dest-canada.png',
    facts: { capital: 'Ottawa', currency: 'CAD ($)', language: 'English / French', intake: 'Sep / Jan / May' },
    reasons: [
      'Extremely high quality of life and routinely ranked among the safest countries globally.',
      'Affordable tuition fees compared directly to the US and UK.',
      'Post-Graduation Work Permit (PGWP) provides an easy pathway to Permanent Residency (PR).',
      'A welcoming and incredibly diverse immigrant-friendly society.'
    ],
    visaInfo: 'To study in Canada, you need a Study Permit. This permit also allows you to work part-time on or off-campus while pursuing your full-time degree.',
    universities: ['University of Toronto', 'McGill University', 'UBC', 'University of Waterloo', 'University of Alberta']
  },
  australia: {
    name: 'Australia',
    tagline: 'World-renowned institutions paired with a breathtaking lifestyle and excellent work rights.',
    heroImage: '/dest-australia.png',
    facts: { capital: 'Canberra', currency: 'AUD ($)', language: 'English', intake: 'Feb / July' },
    reasons: [
      'Incredible weather, beautiful beaches, and a highly relaxed lifestyle.',
      'Top-tier universities forming the prestigious globally-ranked Group of Eight (Go8).',
      'Generous post-study work rights lasting up to 4 full years.',
      'High minimum wage for part-time student jobs to effectively support living costs.'
    ],
    visaInfo: 'The Subclass 500 Student Visa covers your stay. Australia has a very streamlined online visa application process compared to other regions.',
    universities: ['University of Melbourne', 'University of Sydney', 'UNSW, Sydney', 'ANU', 'Monash University', 'University of Queensland']
  }
}

// Fallback logic for countries not in mock data but clicked from the list
const defaultData = {
  name: countryId ? countryId.charAt(0).toUpperCase() + countryId.slice(1) : 'Global Destination',
  tagline: 'Advance your career by studying at world-renowned institutions.',
  heroImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop',
  facts: { capital: 'N/A', currency: 'Local', language: 'English / Local', intake: 'Varies' },
  reasons: ['World-class regional ranking', 'Great post-study employment opportunities', 'Vibrant international student life', 'Access to top industry networks'],
  visaInfo: 'Standard international student visa processing applies. Consult with our expert team for detailed requirements.',
  universities: ['Premier Regional University', 'Institute of Technology', 'State University']
}

const country = computed(() => countriesData[countryId] || defaultData)
</script>

<style scoped>
.dest-hero {
  position: relative;
  height: 480px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(15, 23, 42, 0.4), rgba(15, 23, 42, 0.85));
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  color: var(--text-light);
  max-width: 800px;
  padding: 0 1rem;
}

.country-title {
  font-family: var(--font-heading);
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  letter-spacing: -1px;
  text-shadow: 0 4px 10px rgba(0,0,0,0.3);
  text-transform: capitalize;
}

.country-subtitle {
  font-size: 1.25rem;
  color: var(--bg-offset);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.btn-large {
  padding: 1rem 2.5rem;
  font-size: 1.125rem;
  box-shadow: var(--shadow-md);
}

/* Quick Facts Strip */
.quick-facts {
  background-color: var(--color-primary);
  color: var(--text-light);
  padding: 2.5rem 0;
  box-shadow: var(--shadow-md);
  position: relative;
  z-index: 3;
  margin-top: -40px;
  border-radius: var(--border-radius-lg);
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.facts-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding: 0 2rem;
}

.fact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.fact-icon {
  font-size: 2rem;
  background-color: rgba(255, 255, 255, 0.15);
  width: 56px;
  height: 56px;
  border-radius: var(--border-radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.fact-text {
  display: flex;
  flex-direction: column;
}

.fact-text strong {
  font-size: 0.85rem;
  color: var(--color-primary-light);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.fact-text span {
  font-size: 1.125rem;
  font-weight: 700;
}

/* Main Content Area */
.content-area {
  padding: var(--spacing-xl) 0 var(--spacing-2xl) 0;
}

.layout-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

.main-info h2 {
  font-size: 2.25rem;
  margin-bottom: 1.5rem;
  color: var(--text-main);
  letter-spacing: -0.5px;
}

.reasons-list {
  display: grid;
  gap: 1.5rem;
}

.reason-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background-color: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.reason-card:hover {
  transform: translateX(5px);
  border-color: var(--color-primary-light);
}

.check-circle {
  background-color: var(--color-primary-light);
  color: var(--color-primary);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  flex-shrink: 0;
}

.reason-card p {
  margin: 0;
  font-size: 1.05rem;
  color: var(--text-main);
  line-height: 1.5;
}

.mt-5 {
  margin-top: 3rem;
}

.mt-4 {
  margin-top: 1.5rem;
}

.card-box {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-lg);
  padding: 2rem;
  box-shadow: var(--shadow-md);
}

.card-box p {
  color: var(--text-muted);
  line-height: 1.6;
}

.card-box h3 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid var(--border-color);
  padding-bottom: 0.75rem;
  color: var(--text-main);
}

.styled-list {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0 0 0;
}

.styled-list li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
  color: var(--text-muted);
}

.styled-list li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--color-primary);
  font-weight: 800;
}

/* Sidebar */
.univ-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.univ-list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 0;
  border-bottom: 1px solid var(--border-color);
  color: var(--text-main);
  font-weight: 600;
}

.univ-list li:last-child {
  border-bottom: none;
}

.bullet {
  font-size: 1.5rem;
}

.w-100 {
  width: 100%;
  text-align: center;
}

.not-found {
  padding: 8rem 0;
  text-align: center;
  min-height: 60vh;
}

/* Breakpoints */
@media (min-width: 768px) {
  .dest-hero {
    height: 550px;
  }
  
  .country-title {
    font-size: 4.5rem;
  }
  
  .facts-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 1024px) {
  .layout-grid {
    grid-template-columns: 2fr 1fr;
  }
  
  .reasons-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
