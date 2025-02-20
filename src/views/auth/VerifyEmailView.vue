<script setup>
import { useAuthStore } from "@/stores/authStore";
import { useRoute } from "vue-router";


const authStore = useAuthStore();
const route = useRoute();

</script>
<template>
  <div class="container w-7/8 md:w-1/2 mx-auto m-10 shadow-lg p-4 bg-white">
    <div class="mb-4 text-sm text-gray-600">
      ¡Gracias por registrarte! Antes de empezar, ¿podrías verificar tu
      dirección de correo electrónico haciendo clic en el enlace que acabamos de
      enviarte? Si no has recibido el correo, con gusto te enviaremos otro.
    </div>

    <!-- {status === 'verification-link-sent' && ( -->
    <div
      v-if="authStore.status === 'verification-link-sent'"
      class="mb-4 font-medium text-sm text-green-600"
    >
      Se ha enviado un nuevo enlace de verificación a la dirección de correo
      electrónico que proporcionaste durante el registro.
    </div>
    <!-- )} -->

    <div class="mt-4 flex items-center justify-between">
      <button>Reenviar Verificación de Email</button>

      <button
        type="button"
        class="underline text-sm text-gray-600 hover:text-gray-900"
      >
        Logout
      </button>
    </div>
  </div>
</template>
