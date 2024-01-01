<template>
    <kbd class="px-2 py-1.5 text-xs font-semibold text-white bg-black rounded-lg">{{ text }}</kbd>
</template>


<script setup>
const define = defineProps({
    text: String,
})
</script>
