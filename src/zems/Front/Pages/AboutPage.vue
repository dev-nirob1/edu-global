<template>
  <div class="about-page">
    <div class="page-header">
      <div class="container header-center">
        <SectionHeader
          title="Who We"
          highlight="Are"
          subtitle="Empowering global leaders by bridging the gap between ambition and world-class education."
          isPageTitle
        />
      </div>
    </div>

    <!-- Who We Are / Story Section -->
    <section class="who-we-are">
      <div class="container">
        <div class="story-grid">
          <div class="story-content">
            <h2 class="section-title">Breaking Borders Since 2015</h2>
            <p class="story-text">
              EduGlobal began with a seemingly impossible mission: to completely remove the opacity
              and stress from the international university admissions process. We understood
              firsthand that bright minds were being held back by complex visa bureaucracies and
              confusing university requirements.
            </p>
            <p class="story-text">
              Today, we stand as a premier global education consultancy, having successfully guided
              thousands of students to their dream institutions in the UK, USA, Canada, and
              Australia. Our ethos is built entirely on full transparency, student-first counseling,
              and an unwavering commitment to your future.
            </p>

            <div class="story-highlights">
              <div class="highlight-item">
                <h3>100%</h3>
                <p>Transparent</p>
              </div>
              <div class="highlight-item">
                <h3>24/7</h3>
                <p>Student Support</p>
              </div>
              <div class="highlight-item">
                <h3>Global</h3>
                <p>Alumni Network</p>
              </div>
            </div>
          </div>

          <div class="story-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
              alt="EduGlobal Team Collaboration"
              class="story-image"
            />
            <div class="floating-badge">
              <span class="badge-icon">🌟</span>
              <div>
                <strong>Top Rated</strong>
                <p>By 500+ Students</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Meet the Team Section -->
    <section class="team-section">
      <div class="container">
        <div class="header-center">
          <SectionHeader 
            title="Meet Your" 
            highlight="Guides"
            subtitle="The dedicated experts working behind the scenes to make your global dreams a reality."
          />
        </div>

        <div class="team-grid">
          <!-- Team Member 1 -->
          <div class="team-card">
            <div class="avatar-wrap">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" alt="James Wilson" class="team-avatar" />
              <div class="social-overlay">
                <a href="#" class="social-link">IN</a>
                <a href="#" class="social-link">TW</a>
              </div>
            </div>
            <div class="member-info">
              <h4>James Wilson</h4>
              <p>Lead Admissions Strategist</p>
            </div>
          </div>

          <!-- Team Member 2 -->
          <div class="team-card">
            <div class="avatar-wrap">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" alt="Sarah Jenkins" class="team-avatar" />
              <div class="social-overlay">
                <a href="#" class="social-link">IN</a>
                <a href="#" class="social-link">TW</a>
              </div>
            </div>
            <div class="member-info">
              <h4>Sarah Jenkins</h4>
              <p>Senior Visa Specialist</p>
            </div>
          </div>

          <!-- Team Member 3 -->
          <div class="team-card">
            <div class="avatar-wrap">
              <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop" alt="David Chen" class="team-avatar" />
              <div class="social-overlay">
                <a href="#" class="social-link">IN</a>
                <a href="#" class="social-link">TW</a>
              </div>
            </div>
            <div class="member-info">
              <h4>David Chen</h4>
              <p>Director of Partnerships</p>
            </div>
          </div>

          <!-- Team Member 4 -->
          <div class="team-card">
            <div class="avatar-wrap">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop" alt="Elena Rodriguez" class="team-avatar" />
              <div class="social-overlay">
                <a href="#" class="social-link">IN</a>
                <a href="#" class="social-link">TW</a>
              </div>
            </div>
            <div class="member-info">
              <h4>Elena Rodriguez</h4>
              <p>Student Success Manager</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Placeholder for Next Sections -->
  </div>
</template>

<script setup>
import SectionHeader from '@/components/Widget/SectionHeader.vue'
</script>

<style scoped>
.about-page {
  background-color: var(--bg-offset);
  min-height: 100vh;
  padding-bottom: var(--spacing-2xl);
}

.page-header {
  background-color: var(--bg-surface);
  padding: 4rem 0;
  border-bottom: 1px solid var(--border-color);
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

/* Who We Are Section */
.who-we-are {
  padding: var(--spacing-2xl) 0;
  background-color: var(--bg-offset);
}

.story-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
}

.section-title {
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 1.5rem;
  letter-spacing: -0.5px;
}

.story-text {
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}

.story-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2.5rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
}

.highlight-item h3 {
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-primary);
  margin-bottom: 0.25rem;
  line-height: 1;
}

.highlight-item p {
  color: var(--text-main);
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 1px;
  margin: 0;
}

.story-image-wrap {
  position: relative;
  border-radius: var(--border-radius-lg);
  overflow: visible; /* To allow floating badge */
}

.story-image {
  width: 100%;
  border-radius: var(--border-radius-lg);
  height: auto;
  display: block;
  object-fit: cover;
  box-shadow: var(--shadow-lg);
  transition: transform 0.3s ease;
}

.story-image-wrap:hover .story-image {
  transform: scale(1.02);
}

.floating-badge {
  position: absolute;
  bottom: -20px;
  left: 20px;
  background-color: var(--bg-surface);
  padding: 1rem 1.5rem;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-lg);
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid var(--border-color);
  animation: float 3s ease-in-out infinite;
  z-index: 2;
}

.badge-icon {
  font-size: 2rem;
}

.floating-badge strong {
  display: block;
  font-size: 1.125rem;
  color: var(--text-main);
}

.floating-badge p {
  margin: 0;
  color: var(--text-muted);
  font-size: 0.875rem;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

/* Meet the Team Section */
.team-section {
  padding: var(--spacing-2xl) 0;
  background-color: var(--bg-offset);
}

.team-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-top: 4rem;
}

.team-card {
  text-align: center;
  transition: transform 0.3s ease;
}

.team-card:hover {
  transform: translateY(-5px);
}

.avatar-wrap {
  width: 200px;
  height: 200px;
  margin: 0 auto 1.5rem;
  border-radius: var(--border-radius-full);
  overflow: hidden;
  position: relative;
  box-shadow: var(--shadow-lg);
  border: 4px solid var(--bg-surface);
}

.team-avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.team-card:hover .team-avatar {
  transform: scale(1.05);
}

.social-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(14, 116, 144, 0.85); /* Primary overlay */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.team-card:hover .social-overlay {
  opacity: 1;
}

.social-link {
  width: 40px;
  height: 40px;
  background-color: var(--bg-surface);
  color: var(--color-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.85rem;
  text-decoration: none;
  transition: all 0.3s ease;
  transform: translateY(20px);
}

.team-card:hover .social-link {
  transform: translateY(0);
}

.social-link:hover {
  background-color: var(--color-primary-dark);
  color: var(--text-light);
}

.member-info h4 {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 0.25rem;
}

.member-info p {
  color: var(--color-primary);
  font-size: 0.95rem;
  font-weight: 600;
  margin: 0;
}

/* Breakpoints */
@media (min-width: 768px) {
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .story-grid {
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
  }

  .floating-badge {
    bottom: 30px;
    left: -30px;
  }

  .team-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
