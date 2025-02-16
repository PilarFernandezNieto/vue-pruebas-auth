<script setup>
import { ref, onMounted, watchEffect } from "vue";
import apiAuth from "../../api/apiAuth";
import Nav from "@/components/Nav.vue";
import { useAuthStore } from "@/stores/authStore";

const authStore = useAuthStore();
</script>

<template>
  <Nav />
  <h1>{{ authStore.user?.name }}</h1>
  <p>{{ authStore.user?.email }}</p>
</template>
