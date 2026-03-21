import { createRouter, createWebHistory } from 'vue-router'
import { homeRoutes } from '@/zems/Front/routes/front_routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...homeRoutes],
})

export default router
