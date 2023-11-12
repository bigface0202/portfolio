import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/home' },
    {
      name: 'home',
      path: '/home',
      component: require('@/views/HomeView.vue').default
    },
    {
      name: 'papers',
      path: '/papers',
      component: require('@/views/PapersView.vue').default
    }
  ]
})

export default router