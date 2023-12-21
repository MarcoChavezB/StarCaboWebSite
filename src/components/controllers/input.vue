<template>
    <input class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            :placeholder="placeholder" />
</template>

<script setup>
import {defineProps} from 'vue'
const props = defineProps({
    placeholder: String
})
</script>