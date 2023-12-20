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
    width: 10rem;
}
button{
  background: none;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  width: 100%;
  width: 10rem;
}
.btOrange {
  background-color: #f0582b;
  border: none;
  transition: background-color 0.3s ease;
}

.btOrange:hover {
  background-color: #ff6b2d;
}
</style>