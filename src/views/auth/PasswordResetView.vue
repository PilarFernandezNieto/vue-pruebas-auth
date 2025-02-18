<script setup>
import { reactive } from "vue";
import { useRoute } from "vue-router";
import { useAuthStore } from "@/stores/authStore";
import Alerta from "@/components/Alerta.vue";

const route = useRoute();
const authStore = useAuthStore();
const datos = reactive({
  email: route.query.email,
  password: "",
  password_confirmation: "",
  token: route.params.token,
});

const handleResetPassword = async () => {
  await authStore.reset_password(datos);
};
</script>

<template>
  <div class="container w-7/8 md:w-1/2 mx-auto shadow-lg p-4 bg-white">
    <h1 class="text-center uppercase text-sm font-medium">
      Resetea contraseña
    </h1>
    <form @submit.prevent="handleResetPassword" class="p-4">
      <div v-if="authStore.errores">
        <div
          v-for="(error, index) in authStore.errores"
          :key="index"
          class="my-4"
        >
          <Alerta>{{ error[0] }}</Alerta>
        </div>
      </div>
      <div class="mt-4">
        <label for="password" class="block text-sm font-medium text-gray-700"
          >Password</label
        >
        <input
          id="password"
          type="password"
          v-model="datos.password"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
        />
      </div>

      <div class="mt-4">
        <label for="password" class="block text-sm font-medium text-gray-700"
          >Confirmar contraseña</label
        >
        <input
          type="password"
          id="password_confirmation"
          v-model="datos.password_confirmation"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
        />
      </div>

      <input
        type="submit"
        value="Resetear contraseña"
        class="bg-indigo-600 hover:bg-indigo-800 transition duration-600 ease-in-out text-white p-2 w-full rounded-md cursor-pointer mt-4"
      />
    </form>
  </div>
</template>
