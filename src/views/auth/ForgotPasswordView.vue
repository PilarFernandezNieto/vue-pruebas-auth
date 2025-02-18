<script setup>
import { ref } from "vue";
import Alerta from "@/components/Alerta.vue";
import { useAuthStore } from "@/stores/authStore";

const authStore = useAuthStore();
const email = ref("");

const handleForgotPassword = async () => {
  await authStore.forgot_password(email);
};
</script>
<template>
  <div class="container w-7/8 md:w-1/2 mx-auto shadow-lg p-4 bg-white">
    <div v-if="authStore.status" class="p-3 w-full bg-green-100 border-s-4 border-green-500 mb-3">
      {{ authStore.status }}
    </div>
    <h1 class="text-center uppercase text-sm font-medium mb-4">
      Reestablece contraseña
    </h1>
    <div className="my-4 text-sm text-gray-600">
      ¿Olvidaste tu contraseña? No hay problema. Simplemente indícanos tu
      dirección de correo electrónico y te enviaremos un enlace para restablecerla y oder elegir una nueva.
    </div>

    <form @submit.prevent="handleForgotPassword">
      <div v-if="authStore.errores">
        <div
          v-for="(error, index) in authStore.errores"
          :key="index"
          class="my-4"
        >
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
          v-model="email"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
        />
      </div>

      <input
        type="submit"
        value="Reestablecer contraseña"
        class="bg-indigo-600 hover:bg-indigo-800 transition duration-600 ease-in-out text-white p-2 w-full rounded-md cursor-pointer"
      />
    </form>
  </div>
</template>
