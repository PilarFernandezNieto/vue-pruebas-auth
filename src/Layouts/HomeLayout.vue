<script setup>
import { ref, onMounted, watchEffect } from "vue";
import {RouterView} from 'vue-router';
import apiAuth from "../../api/apiAuth";
import Nav from "@/components/Nav.vue";
import { useAuthStore } from "@/stores/authStore";
import clienteAxios from "../../config/axios";
const authStore = useAuthStore();

</script>

<template>
  <Nav />
  <main class="max-w-screen-lg mx-auto py-10 h-screen">
    
  <div v-if="authStore.user">
    <h1>{{ authStore.user?.name }}</h1>
    <p>{{ authStore.user?.email }}</p>
  </div>
  <div v-else>
    <p>No hay usuario autenticado. Vete al login</p>
 
  </div>
  <p>Está autenticado {{ authStore.isAuthenticated }}</p>
  <RouterView />
</main>
</template>
