import { defineStore } from "pinia";
import { ref, reactive, onMounted, computed } from "vue";
import apiAuth from "../../api/apiAuth";
import { useRouter, useRoute } from "vue-router";

export const useAuthStore = defineStore("auth", () => {
  const router = useRouter();
  const user = ref({});


  const getUser = async () => {
    try {
        const { data } = await apiAuth.authUser();
        user.value =  data;
        
      } catch (error) {
        user.value = null;
        console.log("Error de user", error);
      }
  }
  
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

  const logout = async () => {
    try {
      await apiAuth.logout();
      console.log("has cerrado sesión");
      router.push({ name: "login" });
    } catch (error) {}
  };


  onMounted(() => {
    getUser();
  })
  const isAuthenticated = computed(() => !!user.value);

  return {
    login,
    logout,
    user,
    getUser,
    isAuthenticated
  };
});
