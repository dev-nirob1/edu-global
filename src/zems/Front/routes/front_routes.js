import MainLayout from '../Layout/MainLayout.vue'
import HomePage from '../Pages/HomePage.vue'

export const homeRoutes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomePage,
      },
      {
        path: 'destinations',
        name: 'destinations',
        component: () => import('../Pages/DestinationsPage.vue'),
      },
      {
        path: 'services',
        name: 'services',
        component: () => import('../Pages/ServicesPage.vue'),
      },
    ],
  },
]
