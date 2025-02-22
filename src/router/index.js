import { createRouter, createWebHistory } from "vue-router";
import HomeLayout from "../Layouts/HomeLayout.vue";
import AuthLayout from "@/Layouts/AuthLayout.vue";
import AdminLayout from "@/Layouts/AdminLayout.vue";
import { useAuthStore } from "@/stores/authStore";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeLayout,
      children: [
        {
          path: "/hola",
          name: "hola",
          component: () => import("@/views/HolaView.vue"),
        },
      ],
    },
    {
      path: "/admin",
      name: "admin",
      component: AdminLayout,
      meta: { requiresAuth: true },
      children: [
        {
          path: "usuarios",
          name: "usuarios",
          component: () =>
            import("@/views/admin/ingredientes/UsuariosView.vue"),
        },
      ],
    },
    {
      path: "/auth",
      name: "auth",
      component: AuthLayout,
      children: [
        {
          path: "login",
          name: "login",
          component: () => import("@/views/auth/LoginView.vue"),
        },
        {
          path: "register",
          name: "register",
          component: () => import("@/views/auth/RegisterView.vue"),
        },
        {
          path: "forgot-password",
          name: "forgot-password",
          component: () => import("@/views/auth/ForgotPasswordView.vue"),
        },
        {
          path: "password-reset/:token",
          name: "password-reset",
          component: () => import("@/views/auth/PasswordResetView.vue"),
        },
        {
          path: "verify-email-notice",
          name: "verify-email-notice",
          component: () => import("@/views/auth/VerifyEmailView.vue"),
        },
      ],
    },
  ],
});
router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();
  const requiresAuth = to.matched.some((url) => url.meta.requiresAuth);
  try {
    if (requiresAuth) {
      await authStore.auth();
      if (!authStore.user) {
        return next({ name: "login" });
      }
    }
  } catch (error) {
    console.error("Error during navigation:", error);
    if (requiresAuth) {
      return next({ name: "login" });
    }
  }
  next();
});

export default router;
