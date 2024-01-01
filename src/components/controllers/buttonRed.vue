<template>
<button type="button" class="flex justify-center items-center gap-1 focus:outline-none text-white bg-red-700 hover:bg-red-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
    <span class="material-symbols-outlined ico">
{{ ico }}
</span>
    {{ text }}
</button>
</template>

<script setup>
const define = defineProps({
    text: {
        type: String,
        default: 'text'
    },
    ico:{
        type: String,
    }
})
</script>


<style scoped>
.ico{
    font-size: 1rem;
}
</style>