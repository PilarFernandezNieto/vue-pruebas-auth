<script setup>
import { ref, onMounted, watchEffect } from "vue";
import apiAuth from "../../api/apiAuth";
import Nav from "@/components/Nav.vue";
import { useAuthStore } from "@/stores/authStore";
import clienteAxios from "../../config/axios";
const authStore = useAuthStore();

</script>

<template>
  <Nav />
  <main class="max-w-screen-lg mx-auto py-10">
    
  <div v-if="authStore.user">
    <h1>{{ authStore.user?.name }}</h1>
    <p>{{ authStore.user?.email }}</p>
  </div>
  <div v-else>
    <p>No hay usuario autenticado. Vete al login</p>
  </div>
</main>
</template>
