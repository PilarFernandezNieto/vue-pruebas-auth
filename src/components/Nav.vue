<script setup>
import { onMounted } from "vue";
import { RouterView, RouterLink } from "vue-router";
import { useAuthStore } from "@/stores/authStore";

const authStore = useAuthStore();

onMounted(() => {
  $("#menu-toggle").click(() => {
    $("#mobile-menu").toggle();
  });
});
</script>
<template>
  <header class="shadow-md bg-white">
    <div class="max-w-screen-lg mx-auto py-4">
      <nav class="flex justify-between items-center">
        <RouterLink :to="{ name: 'home' }">
          <h1 class="text-4xl text-indigo-600">PruebaAuthBreeze</h1>
        </RouterLink>

        <div class="block lg:hidden">
          <button id="menu-toggle" class="text-2xl text-medium">
            <i class="fas fa-bars"></i>
          </button>
        </div>
        <div class="hidden lg:flex space-x-4 items-center">
          <RouterLink v-if="!authStore.user"
            :to="{ name: 'login' }"
            class="text-sm text-medium text-indigo-600 hover:text-indigo-800 border border-indigo-600 p-2 rounded text-center"
            >Inicia sesión</RouterLink
          >
          <button v-if="authStore.user"
            @click="authStore.logout"
            class="text-sm text-medium text-indigo-600 hover:text-indigo-800 border border-indigo-600 p-2 rounded text-center"
          >
            Cierra sesión
          </button>
          <RouterLink v-if="!authStore.user"
            :to="{ name: 'register' }"
            class="text-sm text-medium text-indigo-600 hover:text-indigo-800 border border-indigo-600 p-2 rounded text-center"
            >Registro</RouterLink
          >
        </div>
      </nav>
    </div>
    <!-- Menú desplegable en dispositivos móviles -->
    <div id="mobile-menu" class="lg:hidden hidden bg-white shadow-md">
      <nav class="flex flex-col space-y-4 p-4">
        <RouterLink
          :to="{ name: 'login' }"
          class="text-sm text-medium text-indigo-600 hover:text-indigo-800 border border-indigo-600 p-2 rounded w-24 text-center"
          >Inicia sesión</RouterLink
        >
        <button
          v-if="authStore.user"
          @click="authStore.logout"
          class="text-sm text-medium text-indigo-600 hover:text-indigo-800 border border-indigo-600 p-2 rounded w-24 text-center"
        >
          Cierra sesión
        </button>
        <RouterLink
          :to="{ name: 'register' }"
          class="text-sm text-medium text-indigo-600 hover:text-indigo-800 border border-indigo-600 p-2 rounded w-24 text-center"
          >Registro</RouterLink
        >
      </nav>
    </div>
  </header>
</template>
