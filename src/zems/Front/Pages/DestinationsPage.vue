<template>
  <div class="destinations-page">
    <div class="page-header">
      <div class="container text-center">
        <h1 class="page-title">Explore Global <span class="highlight">Destinations</span></h1>
        <p class="page-subtitle">Filter and discover the best countries to advance your academic career.</p>
      </div>
    </div>

    <div class="container layout-grid">
      <!-- Sidebar Filters -->
      <aside class="filters-sidebar">
        <div class="filter-box">
          <h3 class="filter-title">Filters</h3>
          
          <!-- Filter Region -->
          <div class="filter-group">
            <h4>Region</h4>
            <div class="checkbox-list">
              <label v-for="region in regions" :key="region">
                <input type="checkbox" :value="region" v-model="selectedRegions" /> {{ region }}
              </label>
            </div>
          </div>
          
          <!-- Filter Visa Type -->
          <div class="filter-group">
            <h4>Post-Study Visa</h4>
            <div class="checkbox-list">
              <label>
                <input type="checkbox" v-model="pswOnly" /> Available
              </label>
            </div>
          </div>

          <button class="btn btn-outline reset-btn" @click="resetFilters">Reset Filters</button>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="destinations-content">
        <div class="results-header">
          <p>Showing <strong>{{ filteredDestinations.length }}</strong> destination(s)</p>
          <div class="search-box">
            <input type="text" v-model="searchQuery" placeholder="Search by specific country..." />
          </div>
        </div>

        <div class="dest-grid" v-if="filteredDestinations.length > 0">
          <DestinationCard
            v-for="(dest, index) in filteredDestinations"
            :key="index"
            :destinationLink="dest.link"
            :imageSrc="dest.imageSrc"
            :imageAlt="dest.imageAlt"
            :tags="dest.tags"
            :countryName="dest.countryName"
            :univCount="dest.univCount"
          />
        </div>
        
        <div class="no-results" v-else>
          <h3>No destinations found.</h3>
          <p>Try adjusting your current filters or searching another country.</p>
          <button class="btn btn-primary" @click="resetFilters">Clear Filters</button>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import DestinationCard from '@/components/Widget/DestinationCard.vue'

// Basic lists for UI
const regions = ['North America', 'Europe', 'Oceania', 'Asia']

// Filter States
const selectedRegions = ref([])
const pswOnly = ref(false)
const searchQuery = ref('')

// Mock Data
// Re-using the 4 previously generated WebP images and mixing Unsplash links for variety. Unsplash limits out, so I will point to placeholder gradient backgrounds.
const allDestinations = [
  {
    link: '/destinations/uk',
    imageSrc: '/dest-uk.png',
    imageAlt: 'Study in the UK',
    tags: ['Top Ranked', '2yr Post-Study Visa'],
    countryName: 'United Kingdom',
    univCount: '120+ Universities',
    region: 'Europe',
    hasPsw: true
  },
  {
    link: '/destinations/usa',
    imageSrc: '/dest-usa.png',
    imageAlt: 'Study in the USA',
    tags: ['Ivy League', 'STEM Focus'],
    countryName: 'United States',
    univCount: '4000+ Universities',
    region: 'North America',
    hasPsw: false // OPT rules heavily vary
  },
  {
    link: '/destinations/canada',
    imageSrc: '/dest-canada.png',
    imageAlt: 'Study in Canada',
    tags: ['PR Pathway', 'Affordable'],
    countryName: 'Canada',
    univCount: '90+ Universities',
    region: 'North America',
    hasPsw: true
  },
  {
    link: '/destinations/australia',
    imageSrc: '/dest-australia.png',
    imageAlt: 'Study in Australia',
    tags: ['Global Hub', 'Great Lifestyle'],
    countryName: 'Australia',
    univCount: '40+ Universities',
    region: 'Oceania',
    hasPsw: true
  },
  {
    link: '/destinations/ireland',
    imageSrc: 'https://images.unsplash.com/photo-1549422037-bcfa8bc7c5b6?q=80&w=600&auto=format&fit=crop',
    imageAlt: 'Study in Ireland',
    tags: ['Tech Hub Europe', '2yr PSW'],
    countryName: 'Ireland',
    univCount: '10+ Universities',
    region: 'Europe',
    hasPsw: true
  },
  {
    link: '/destinations/germany',
    imageSrc: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=600&auto=format&fit=crop',
    imageAlt: 'Study in Germany',
    tags: ['Free Tuition', 'Engineering'],
    countryName: 'Germany',
    univCount: '380+ Universities',
    region: 'Europe',
    hasPsw: true
  },
  {
    link: '/destinations/nz',
    imageSrc: 'https://images.unsplash.com/photo-1536765757757-b121fb6ba6cc?q=80&w=600&auto=format&fit=crop',
    imageAlt: 'Study in New Zealand',
    tags: ['Safe', 'Beautiful Nature'],
    countryName: 'New Zealand',
    univCount: '8 Universities',
    region: 'Oceania',
    hasPsw: true
  },
  {
    link: '/destinations/singapore',
    imageSrc: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=600&auto=format&fit=crop',
    imageAlt: 'Study in Singapore',
    tags: ['Business Hub', 'Close to Home'],
    countryName: 'Singapore',
    univCount: '6 Universities',
    region: 'Asia',
    hasPsw: true
  }
]

// Computed filtering
const filteredDestinations = computed(() => {
  return allDestinations.filter(dest => {
    // Check region
    if (selectedRegions.value.length > 0 && !selectedRegions.value.includes(dest.region)) {
      return false
    }
    // Check PSW
    if (pswOnly.value && !dest.hasPsw) {
      return false
    }
    // Check text search
    if (searchQuery.value && !dest.countryName.toLowerCase().includes(searchQuery.value.toLowerCase())) {
      return false
    }
    return true
  })
})

const resetFilters = () => {
  selectedRegions.value = []
  pswOnly.value = false
  searchQuery.value = ''
}
</script>

<style scoped>
.destinations-page {
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

.highlight {
  color: var(--color-primary);
}

.page-subtitle {
  font-size: 1.25rem;
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto;
}

.layout-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

/* Sidebar Filters */
.filter-box {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-lg);
  padding: 1.5rem;
  position: sticky;
  top: 100px; /* Due to sticky navbar */
}

.filter-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 0.5rem;
}

.filter-group {
  margin-bottom: 1.5rem;
}

.filter-group h4 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-main);
  margin-bottom: 0.75rem;
}

.checkbox-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.checkbox-list label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: var(--text-muted);
  cursor: pointer;
  transition: color 0.2s ease;
}

.checkbox-list label:hover {
  color: var(--color-primary);
}

.checkbox-list input[type="checkbox"] {
  accent-color: var(--color-primary);
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.reset-btn {
  width: 100%;
  margin-top: 1rem;
}

/* Main Content Results */
.results-header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.results-header p {
  margin: 0;
  color: var(--text-muted);
}

.results-header strong {
  color: var(--text-main);
}

.search-box input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  font-size: 1rem;
  background-color: var(--bg-surface);
  color: var(--text-main);
  outline: none;
  transition: border-color 0.2s ease;
}

.search-box input:focus {
  border-color: var(--color-primary);
}

.dest-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.no-results {
  text-align: center;
  padding: 4rem 2rem;
  background-color: var(--bg-surface);
  border-radius: var(--border-radius-lg);
  border: 1px dashed var(--border-color);
}

.no-results h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.no-results p {
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}

/* Breakpoints */
@media (min-width: 768px) {
  .results-header {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .search-box {
    width: 300px;
  }

  .dest-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .layout-grid {
    grid-template-columns: 280px 1fr;
  }

  .dest-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
