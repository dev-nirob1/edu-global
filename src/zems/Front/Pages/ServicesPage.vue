<template>
  <div class="services-page">
    <div class="container services-container">
      <!-- Service 1: University Admissions -->
      <div class="service-row">
        <div class="service-image-col">
          <img
            src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop"
            alt="University Admissions"
            class="service-image"
          />
        </div>
        <div class="service-content-col">
          <h2 class="service-title">University Admissions</h2>
          <p class="service-desc">
            Navigating global university applications can be overwhelming. Our seasoned admission
            strategists analyze your academic profile to match you with top-tier universities
            worldwide. We help craft compelling personal statements and perfectly optimized
            applications.
          </p>
          <ul class="service-features">
            <li><i class="fa-solid fa-check check-icon"></i> Strategic Profile Assessment</li>
            <li><i class="fa-solid fa-check check-icon"></i> Shortlisting Best-Fit Institutions</li>
            <li><i class="fa-solid fa-check check-icon"></i> SOP and Essay Editing</li>
            <li><i class="fa-solid fa-check check-icon"></i> Direct Application Tracking</li>
          </ul>
        </div>
      </div>

      <!-- Service 2: Visa Processing -->
      <div class="service-row reverse-row">
        <div class="service-image-col">
          <img
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop"
            alt="Visa Processing"
            class="service-image"
          />
        </div>
        <div class="service-content-col">
          <h2 class="service-title">Visa Guidance & Processing</h2>
          <p class="service-desc">
            A single mistake can derail your study abroad dream. Our dedicated visa specialists are
            highly trained to ensure your strict compliance with international student visa
            regulations for seamless approvals to the USA, UK, Canada, and Australia.
          </p>
          <ul class="service-features">
            <li><i class="fa-solid fa-check check-icon"></i> Complex Document Preparation</li>
            <li><i class="fa-solid fa-check check-icon"></i> Financial File Assessment</li>
            <li>
              <i class="fa-solid fa-check check-icon"></i> Confidence-Building Mock Interviews
            </li>
            <li><i class="fa-solid fa-check check-icon"></i> Embassy Appointment Scheduling</li>
          </ul>
        </div>
      </div>
      <!-- Service 3: Scholarship Assistance -->
      <div class="service-row">
        <div class="service-image-col">
          <img
            src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=800&auto=format&fit=crop"
            alt="Scholarship Assistance"
            class="service-image"
          />
        </div>
        <div class="service-content-col">
          <h2 class="service-title">Scholarship Assistance</h2>
          <p class="service-desc">
            Quality education should be accessible. Our financial advisors are experts at
            identifying and securing partial to fully-funded international scholarships, grants, and
            university-specific bursaries to drastically reduce your tuition burden.
          </p>
          <ul class="service-features">
            <li>
              <i class="fa-solid fa-check check-icon"></i> Global Scholarship Database Matching
            </li>
            <li><i class="fa-solid fa-check check-icon"></i> Grant Application Storytelling</li>
            <li><i class="fa-solid fa-check check-icon"></i> Financial Aid Negotiation</li>
            <li><i class="fa-solid fa-check check-icon"></i> Corporate Sponsorship Guidance</li>
          </ul>
        </div>
      </div>

      <!-- Service 4: Pre-Departure Support -->
      <div class="service-row reverse-row">
        <div class="service-image-col">
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop"
            alt="Pre-Departure Support"
            class="service-image"
          />
        </div>
        <div class="service-content-col">
          <h2 class="service-title">Pre-Departure & Accommodation</h2>
          <p class="service-desc">
            Your journey doesn't end with a visa. We provide comprehensive pre-departure briefings
            covering cultural adjustments, packing essentials, and banking. Additionally, we help
            secure safe and comfortable student housing near your chosen campus.
          </p>
          <ul class="service-features">
            <li><i class="fa-solid fa-check check-icon"></i> On-Campus & Off-Campus Housing</li>
            <li><i class="fa-solid fa-check check-icon"></i> Flight Booking Assistance</li>
            <li><i class="fa-solid fa-check check-icon"></i> Cultural Orientation Sessions</li>
            <li><i class="fa-solid fa-check check-icon"></i> Airport Pickup Coordination</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.services-page {
  background-color: var(--bg-surface);
  min-height: 100vh;
  padding: 6rem 0 var(--spacing-2xl); /* 8rem top padding since there's no hero banner */
}

.services-container {
  display: flex;
  flex-direction: column;
  gap: 5rem;
}

.service-row {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
}

.service-image-col,
.service-content-col {
  flex: 1;
  width: 100%;
}

.service-image {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: var(--border-radius-md);
  display: block;
}

.service-title {
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 1.5rem;
  letter-spacing: -0.5px;
}

.service-desc {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}

.service-features {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.service-features li {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-main);
  padding: 0.75rem;
  background-color: var(--bg-offset);
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--border-color);
  transition: transform 0.3s ease;
  box-shadow: var(--shadow-sm);
}

.check-icon {
  color: var(--color-primary);
  font-style: normal;
  font-weight: 900;
  font-size: 1.1rem;
}

/* Breakpoints */
@media (min-width: 1024px) {
  .service-row {
    flex-direction: row;
    gap: 2rem;
  }

  .reverse-row {
    flex-direction: row-reverse;
  }

  .service-title {
    font-size: 2.5rem;
  }
}
</style>
