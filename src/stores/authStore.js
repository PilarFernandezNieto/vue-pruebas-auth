import { defineStore } from "pinia";
import { ref, reactive, onMounted, computed } from "vue";
import apiAuth from "../../api/apiAuth";
import { useRouter, useRoute } from "vue-router";

export const useAuthStore = defineStore("auth", () => {
  const router = useRouter();
  const user = ref(null);

  onMounted(async () => {
    await getUser();
  });

  const getUser = async () => {
    try {
      const { data } = await apiAuth.authUser();
      user.value = data;
    } catch (error) {
      user.value = null;
      console.log("Error de user", error);
    }
  };

  const login = async (datos, errores) => {
    try {
      await apiAuth.csrf();
      await apiAuth.login(datos);
      await getUser();
      errores.value = [];
      router.push({ name: "home" });
    } catch (error) {
      console.log(error.response.data.errors);
      errores.value = Object.values(error.response.data.errors);
    }
  };

  const registro = async (datos, errores) => {
    try {
      const response = await apiAuth.register(datos);
      console.log(response);
      await getUser();
      await router.push({ name: "home" });
    } catch (error) {
      console.log("Error en el registro", error);
    }
  };

  const logout = async () => {
    try {
      await apiAuth.logout();
      user.value = null;
      await router.push({ name: "login" });
    } catch (error) {}
  };

  const isAuthenticated = computed(() => !!user.value);

  return {
    login,
    registro,
    logout,
    user,
    getUser,
    isAuthenticated,
  };
});
