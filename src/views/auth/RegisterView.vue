<script setup>
import { ref, reactive } from "vue";
import { RouterLink } from "vue-router";
import Alerta from "@/components/Alerta.vue";
import { useAuthStore } from "@/stores/authStore";

const authStore = useAuthStore();

const datos = reactive({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});


const handleRegister = async () => {
  await authStore.registro(datos);
};
</script>

<template>
  <div class="container w-7/8 md:w-1/2 mx-auto m-10 shadow-lg p-4 bg-white">
    <h1 class="text-center uppercase text-sm font-medium mb-4">
      Formulario de Registro
    </h1>
    <form @submit.prevent="handleRegister" class="p-4" novalidate>
      <div v-if="authStore.errores" >
          <div v-for="(error, index) in authStore.errores" :key="index" class="my-4">
            <Alerta v-if="error.length < 2"> {{ error[0] }}</Alerta>
            <div v-if="error.length >= 2">
              <Alerta v-for="(errorPassword, index) in error" :key="index">{{
                errorPassword
              }}</Alerta>
            </div>
          </div>
        </div>
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700"
          >Nombre</label
        >
        <input
          type="text"
          id="name"
          v-model="datos.name"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
        />
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
      <div class="mb-4">
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
        value="Registrarse"
        class="bg-indigo-600 hover:bg-indigo-800 transition duration-600 ease-in-out text-white p-2 w-full rounded-md cursor-pointer"
      />
    </form>
    <div class="flex justify-center">
      <RouterLink
        :to="{ name: 'login' }"
        class="text-sm text-indigo-600 hover:text-indigo-800"
        >¿Ya tienes una cuenta? Inicia sesión</RouterLink
      >
    </div>
  </div>
</template>
