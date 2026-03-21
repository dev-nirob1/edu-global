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
      {
        path: 'about',
        name: 'about',
        component: () => import('../Pages/AboutPage.vue'),
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('../Pages/ContactPage.vue'),
      },
      {
        path: 'destinations/:id',
        name: 'destination-details',
        component: () => import('../Pages/DestinationDetailsPage.vue'),
      },
    ],
  },
]
