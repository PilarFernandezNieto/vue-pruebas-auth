import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthLayout from '@/Layouts/AuthLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: "/auth",
      name: "auth",
      component: AuthLayout,
      children: [
        {
          path: "login",
          name: "login",
          component: () => import("@/views/auth/LoginView.vue")
        },
        {
          path: "register",
          name: "register",
          component: () => import("@/views/auth/RegisterView.vue")
        },
        {
          path: "forgot-password",
          name: "forgot-password",
          component: () => import("@/views/auth/ForgotPasswordView.vue")
        },
        {
          path: "password-reset/:token",
          name: "password-reset",
          component: () => import("@/views/auth/PasswordResetView.vue")
        },
        {
          path: "verify-email",
          name: "verify-email",
          component: () => import("@/views/auth/VerifyEmailView.vue")
        }
      ]
    }

  ],
})

export default router
