<script setup>
import { RouterLink } from "vue-router";
import { reactive, ref } from "vue";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "vue-router";
import Alerta from "@/components/Alerta.vue";

const authStore = useAuthStore();
const router = useRouter();

const datos = reactive({
  email: "",
  password: "",
});

const handleLogin = async () => {
  await authStore.login(datos);
};
</script>
<template>
  <div class="container w-7/8 md:w-1/2 mx-auto shadow-lg p-4 bg-white">
    <h1 class="text-center uppercase text-sm font-medium mb-4">
      Inicia sesión
    </h1>
    <form @submit.prevent="handleLogin" class="p-4">
      <div v-if="authStore.errores" >
        <div v-for="(error, index) in authStore.errores" :key="index" class="my-4">
          <Alerta>{{ error[0] }}</Alerta>
        </div>
      </div>
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700"
          >Email</label
        >
        <input
          type="email"
          id="email"
          v-model="datos.email"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
        />
      </div>
      <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray-700"
          >Contraseña</label
        >
        <input
          type="password"
          id="password"
          v-model="datos.password"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
        />
      </div>

      <input
        type="submit"
        value="Inicia sesión"
        class="bg-indigo-600 hover:bg-indigo-800 transition duration-600 ease-in-out text-white p-2 w-full rounded-md cursor-pointer"
      />
    </form>
    <div class="flex items-center flex-col space-y-1 justify-center">
      <RouterLink
        :to="{ name: 'register' }"
        class="text-xs text-indigo-600 hover:text-indigo-800"
        >¿Aún no tienes cuenta? Regístrate aquí</RouterLink
      >
      <RouterLink
        :to="{ name: 'forgot-password' }"
        class="text-xs text-indigo-600 hover:text-indigo-800"
        >¿Has olvidado la contraseña? Pincha aquí</RouterLink
      >
    </div>
  </div>
</template>
