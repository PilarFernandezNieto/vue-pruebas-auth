<script setup>
import { RouterView } from "vue-router";
import Nav from "@/components/Nav.vue";
</script>
<template>
  <Nav />
  <div class="max-w-4xl mx-auto flex h-screen flex-col justify-center">
    <RouterView />
  </div>
</template>
