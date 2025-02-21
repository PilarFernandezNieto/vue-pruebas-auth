import { defineStore } from "pinia";
import { ref, reactive, onMounted, computed } from "vue";
import apiAuth from "../../api/apiAuth";
import { useRouter, useRoute } from "vue-router";
import { useToastStore } from "./toastStore";
import clienteAxios from "../../config/axios";

export const useAuthStore = defineStore("auth", () => {
  const router = useRouter();
  const user = ref(null);
  const errores = ref([]);
  const status = ref("");
  const toast = useToastStore();

  onMounted(async () => {});

  const getUser = async () => {
    try {
      const { data } = await apiAuth.authUser();
      return data;
    } catch (error) {
      if (error.response.status == 409) {
        await apiAuth.emailVerification();
        router.push({ name: "verify-email-notice" });
      } else {
        console.log("Error de user", error.response.data.message);
      }
    }
  };

  const login = async (datos) => {
    try {
      await apiAuth.csrf();
      await apiAuth.login(datos);
      user.value = await getUser();
      if (user.value) {
        router.push({ name: "home" });
      }
      errores.value = [];
      
    } catch (error) {
      errores.value = Object.values(error?.response?.data?.errors);
  };
}
  const isEmailVerified = computed(() => user?.value.email_verified_at);

  const registro = async (datos) => {
    try {
      await apiAuth.csrf();
      errores.value = [];
      const response = await apiAuth.register(datos);
      console.log("Registro", response);
      router.push({ name: "verify-email-notice" });
    } catch (error) {
      console.log("Error en registro", error);
      errores.value = Object.values(error.response.data.errors);
    }
  };

  const verifyEmail = async (id, hash) => {
    console.log("id", id);
    console.log("hash", hash);

    try {
      const response = await apiAuth.verifyEmail(id, hash);
      console.log(response);
    } catch (error) {
      console.log("Error verify email", error);
    }
  };

  const logout = async () => {
    try {
      await apiAuth.logout();
      user.value = null;
      await router.push({ name: "login" });
    } catch (error) {}
  };

  const forgot_password = async (email) => {
    try {
      await apiAuth.csrf();
      const { data } = await apiAuth.forgotPassword({ email: email.value });
      status.value = data.status;
      errores.value = [];
    } catch (error) {
      console.log(error);
      errores.value = Object.values(error.response.data.errors);
    }
  };

  const reset_password = async (datos) => {
    errores.value = [];
    try {
      const { data } = await apiAuth.resetPassword(datos);
      toast.mostrarExito(data.status);
      setTimeout(() => {
        router.push({ name: "login" });
      }, 3000);
    } catch (error) {
      console.log("Error en reset", error);
      errores.value = Object.values(error.response.data.errors);
    }
  };

  const isAuthenticated = computed(() => !!user.value);

  return {
    login,
    registro,
    verifyEmail,
    logout,
    forgot_password,
    reset_password,
    errores,
    status,
    user,
    getUser,
    isAuthenticated,
  };
});
