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
const props = defineProps({
    text: String
})
</script>

<style scoped>
.btOrange {
    background-color: #F0582B;
    border-radius: 10px;
    color: white;
    width: 10rem;
}

button {
  background-color: #f0582b;
  border: none;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #ff6b2d;
}
</style>