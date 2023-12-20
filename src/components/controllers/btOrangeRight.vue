<template>
    <div class="cont">
        <div class="btOrange">
            <button class="btOrange flex justify-center">
                <span class="material-symbols-rounded">arrow_right</span>
                <slot>{{ text }}</slot>
            </button>
        </div>
    </div>
</template>

<script setup>
import {defineProps} from 'vue'
const props = defineProps({
    text: String
})
</script>

<style scoped>
.btOrange {
    background-color: #F0582B;
    border-radius: 20px;
    color: white;
}

</style>