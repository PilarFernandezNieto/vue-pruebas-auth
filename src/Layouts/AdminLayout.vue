<script setup>
import { RouterView } from "vue-router";
import Nav from "@/components/Nav.vue";
import { useAuthStore } from "@/stores/authStore";

const authStore = useAuthStore();

</script>
<template>
  <Nav />
  <div class="max-w-4xl mx-auto flex h-screen flex-col justify-center">
    <h1>Desde adminLayout</h1>
    <p>Está autenticado: {{ authStore.isAuthenticated }}</p>
    <RouterView />
  </div>
</template>
