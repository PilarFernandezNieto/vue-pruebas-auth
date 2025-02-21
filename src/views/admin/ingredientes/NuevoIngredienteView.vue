<script setup>
import { reactive, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useIngredientesStore } from '@/stores/ingredientesStore'
import SubmitInput from '@/components/SubmitInput.vue'
import Alerta from '@/components/Alerta.vue'

const ingredientesStore = useIngredientesStore()
const errores = ref([])
const datos = reactive({
    nombre: '',
    imagen: '',
    descripcion: '',
})

const handleImageChange = (e) => {
    datos.imagen = e.target.files[0]
    console.log(datos.imagen)
}

const submitIngrediente = () => {
    const formData = new FormData()
    formData.append('nombre', datos.nombre)
    formData.append('imagen', datos.imagen)
    formData.append('descripcion', datos.descripcion)

    ingredientesStore.crearIngrediente(formData, errores)
}
</script>
<template>
    <div
        class="w-[90%] md:w-[70%] mx-auto shadow-md p-4 md:p-8 bg-amber-50 space-y-4 rounded-sm my-10"
    >
        <h1 class="text-3xl font-black mb-4">Nuevo Ingrediente</h1>
        <div v-if="errores" class="my-4">
            <Alerta v-for="(error, index) in errores" :key="index">{{
                error[0]
            }}</Alerta>
        </div>
        <form @submit.prevent="submitIngrediente">
            <div class="mb-4">
                <label for="nombre" class="text-amber-800 text-lg uppercase"
                    >Ingrediente</label
                >
                <input
                    type="text"
                    id="nombre"
                    v-model="datos.nombre"
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
                    @change="handleImageChange"
                    id="imagen"
                    class="mt-2 w-full p-3 bg-white border border-amber-500 rounded-md file:bg-amber-50 file:p-2 file:rounded-md"
                />
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
                    v-model="datos.descripcion"
                    class="mt-2 w-full p-3 bg-white border border-amber-500 focus:border-amber-800 focus:outline-none rounded-md"
                />
            </div>
            <SubmitInput value="Nuevo Ingrediente"></SubmitInput>
        </form>
        <RouterLink :to="{ name: 'ingredientes' }" class="border border-amber-500 py-2 px-4 rounded-md text-amber-500">Atrás</RouterLink>
    </div>
</template>
