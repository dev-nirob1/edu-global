<template>
  <section class="testimonials-section">
    <div class="container">
      <SectionHeader
        title="Student"
        highlight="Success Stories"
        subtitle="Don't just take our word for it. Hear from the thousands of students who have embarked on their global journey with us."
        buttonText="Read More Stories"
        buttonLink="/reviews"
      />

      <div class="carousel-wrapper">
        <Carousel v-bind="carouselConfig">
          <Slide v-for="testimonial in testimonials" :key="testimonial.id">
            <div class="carousel__item">
              <TestimonialCard
                :name="testimonial.name"
                :university="testimonial.university"
                :review="testimonial.review"
                :rating="testimonial.rating"
                :initials="testimonial.initials"
              />
            </div>
          </Slide>

          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import SectionHeader from '@/components/Widget/SectionHeader.vue'
import TestimonialCard from '@/components/Widget/TestimonialCard.vue'

const testimonials = ref([
  {
    id: 1,
    name: 'Sarah Rahman',
    initials: 'SR',
    university: 'University of Toronto, Canada',
    rating: 5,
    review:
      'EduGlobal made my dream of studying in Canada a reality. Their visa assistance team is phenomenal and guided me through every single hurdle smoothly.',
  },
  {
    id: 2,
    name: 'Kevin Smith',
    initials: 'KS',
    university: 'Oxford University, UK',
    rating: 5,
    review:
      'From editing my statement of purpose to preparing for the interview, the counselors were with me 24/7. Highly recommended for premium admissions!',
  },
  {
    id: 3,
    name: 'Aisha Khan',
    initials: 'AK',
    university: 'University of Melbourne, AUS',
    rating: 4,
    review:
      'The entire application process was completely stress-free. They laid out a clear timeline for me and I just had to follow their brilliant step-by-step guidance.',
  },
  {
    id: 4,
    name: 'David Chen',
    initials: 'DC',
    university: 'MIT, USA',
    rating: 5,
    review:
      'Getting into a top STEM program in the US seemed impossible, but EduGlobal accurately evaluated my profile and helped me target the right Ivy Leagues.',
  },
])

// Carousel settings
const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  gap: 20,
  breakpoints: {
    768: {
      itemsToShow: 2,
    },
    1024: {
      itemsToShow: 3,
    },
  },
}
</script>

<style scoped>
.testimonials-section {
  padding: var(--spacing-2xl) 0;
  background-color: var(--bg-surface); /* Kept white for contrast against DestinationsSection */
}

.carousel-wrapper {
  margin-top: var(--spacing-xl);
}

.carousel__item {
  height: 100%;
  width: 100%;
  padding: 10px; /* Prevents box-shadow clipping */
  text-align: left;
}

/* Customizing vue3-carousel controls */
:deep(.carousel__prev),
:deep(.carousel__next) {
  background-color: var(--bg-surface);
  color: var(--color-primary);
  border-radius: var(--border-radius-full);
  border: 1px solid var(--border-color);
  width: 48px;
  height: 48px;
  box-shadow: var(--shadow-md);
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;
}

:deep(.carousel__pagination-button::after) {
  background-color: var(--border-color);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  transition: all 0.3s ease;
}

:deep(.carousel__pagination-button--active::after) {
  background-color: var(--color-primary);
  transform: scale(1.5);
}

:deep(.carousel__track) {
  margin-bottom: 2rem;
  align-items: stretch; /* Make all cards same height */
}

:deep(.carousel__slide) {
  align-items: stretch;
}
</style>
