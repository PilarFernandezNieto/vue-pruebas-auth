<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { useIngredientesStore } from '@/stores/ingredientesStore'
import SubmitInput from '@/components/SubmitInput.vue'
import { onMounted, ref } from 'vue'

const ingredientesStore = useIngredientesStore()
const route = useRoute()
const id = route.params.id

const nuevaImagen = ref(null)
const errores = ref([])

onMounted( () => {
   ingredientesStore.cargarIngrediente(id)
})

const handleImageChange = (event) => {
    nuevaImagen.value = event.target.files[0]
}

const submitForm = () => {
    const formData = new FormData();
  formData.append("_method", "PUT");
  formData.append("nombre", ingredientesStore.ingrediente.nombre);
  formData.append("descripcion", ingredientesStore.ingrediente.descripcion);

  if (nuevaImagen.value) {
    formData.append("imagen", nuevaImagen.value);
  }
  ingredientesStore.editarIngrediente(id, formData, errores)
}
</script>
<template>
    <div
        class="w-[90%] md:w-[70%] mx-auto shadow-md p-4 md:p-8 bg-amber-50 space-y-4 rounded-sm my-10"
    >
        <h1 class="text-3xl font-black mb-4">Editar Ingrediente</h1>
        <form @submit.prevent="submitForm">
            <div class="mb-4">
                <label for="nombre" class="text-amber-800 text-lg uppercase"
                    >Ingrediente</label
                >
                <input
                    type="text"
                    id="nombre"
                    v-model="ingredientesStore.ingrediente.nombre"
                    placeholder="Ingrediente"
                    class="mt-2 w-full p-3 bg-white border border-amber-500 focus:border-amber-800 rounded-md focus:outline-none"
                />
            </div>
            <div class="mb-4">
                <label for="imagen" class="text-amber-800 text-lg uppercase"
                    >Imagen</label
                >
                <input
                    type="file"
                    id="imagen"
                    @change="handleImageChange"
                    class="mt-2 w-full p-3 bg-white border border-amber-500 rounded-md file:bg-amber-50 file:p-2 file:rounded-md"
                />
            </div>
            <div class="mb-4">
                <img :src="ingredientesStore.ingrediente.imagen" alt="imagen" class="w-40" />
            </div>
            <div class="mb-4">
                <label
                    for="descripcion"
                    class="text-amber-800 text-lg uppercase"
                    >Descripcion</label
                >
                <input
                    type="text"
                    id="descripcion"
                    v-model="ingredientesStore.ingrediente.descripcion"
                    class="mt-2 w-full p-3 bg-white border border-amber-500 focus:border-amber-800 focus:outline-none rounded-md"
                />
            </div>
            <SubmitInput value="Edita Ingrediente"></SubmitInput>
        </form>
        <RouterLink :to="{ name: 'ingredientes' }" class="border border-amber-500 py-2 px-4 rounded-md text-amber-500">Atrás</RouterLink>
    </div>
</template>
