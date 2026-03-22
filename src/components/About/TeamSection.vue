<template>
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
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
              alt="James Wilson"
              class="team-avatar"
            />
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
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
              alt="Sarah Jenkins"
              class="team-avatar"
            />
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
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop"
              alt="David Chen"
              class="team-avatar"
            />
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
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop"
              alt="Elena Rodriguez"
              class="team-avatar"
            />
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
</template>

<script setup>
import SectionHeader from '@/components/Widget/SectionHeader.vue'
</script>

<style scoped>
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
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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

@media (min-width: 768px) {
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .team-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
