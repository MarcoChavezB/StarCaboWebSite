<template>
    <div class="cont">
        <div class="btOrange">
            <button class="btOrange">
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