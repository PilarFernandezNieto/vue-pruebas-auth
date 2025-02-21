<script setup>
// import { ref, onMounted, computed } from 'vue'
// import { RouterLink } from 'vue-router'
// import { useIngredientesStore } from '@/stores/ingredientesStore'
// import Ingrediente from '@/components/Ingrediente.vue'

// const ingredientesStore = useIngredientesStore()
// const buscar = ref('')

// onMounted(() => {
//     ingredientesStore.cargarIngredientes()
// })

// const ingredientesFiltrados = computed(() => {
//     if (!buscar.value.trim()) {
//         return ingredientesStore.ingredientes // Si no hay búsqueda, mostrar todos los ingredientes
//     }
//     return ingredientesStore.ingredientes.filter((ingrediente) => {
//         return ingrediente.nombre
//             .toLowerCase()
//             .includes(buscar.value.toLowerCase())
//     })
// })


</script>
<template>
    <h1>Listado de ingredientes</h1>
    <!-- <div
        class="w-[90%] md:w-[80%] mx-auto shadow-md p-4 md:p-8 bg-amber-50 space-y-4 rounded-sm my-10"
    >
        <div class="flex flex-col lg:flex-row justify-between items-center">
            <h1 class="text-2xl md:text-3xl font-black mb-4">
                Listado de ingredientes
            </h1>

            <div class="flex flex-col gap-4 lg:flex-row">
                <div class="flex items-center">
                    <input
                        type="text"
                        class="p-2 border border-amber-500 rounded-l-md focus:outline-none"
                        placeholder="Buscar ingrediente"
                        v-model="buscar"
                    />
                    <i
                        class="fa-solid fa-magnifying-glass bg-amber-500 text-white p-3 rounded-r-md border border-amber-500"
                    ></i>
                </div>
                <RouterLink
                    :to="{ name: 'nuevo-ingrediente' }"
                    class="bg-amber-500 hover:bg-amber-800 text-white py-2 px-4 text-lg font-bold rounded-md text-center"
                    >Nuevo ingrediente</RouterLink
                >
            </div>
        </div>
        <div class="grid grid-cols-1 gap-4">
            <Ingrediente
                v-for="ingrediente in ingredientesFiltrados"
                :key="ingrediente.id"
                :ingrediente="ingrediente"
            />
        </div>
        <RouterLink :to="{ name: 'dashboard' }" class="border border-amber-500 py-2 px-4 rounded-md text-amber-500">Atrás</RouterLink>
    </div> -->
</template>
