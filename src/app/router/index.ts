import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home/AppHome.vue'),
      meta: { title: 'Главная' },
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/pages/auth/UserRegister.vue'),
      meta: { title: 'Регистрация' },
    },
  ],
})

export default router
