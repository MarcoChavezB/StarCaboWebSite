<template>
    <div class="zonas">
        <div class="icon flex justify-center items-center">
            <div class="img" v-html="image"></div>
        </div>
        <div class="text flex justify-center items-center">
            <h2>{{ text }}</h2>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    text: String,
    image: String,
});
</script>

<style scoped>
* {
    color: #907f64;
}

.zonas {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0px 0px;
}

.text {
    text-align: center;
}

span {
    font-size: 3rem;
}

.img {
    display: inline-block; /* Ensure the SVG is displayed as inline-block */
    color: #907f64; /* Set the fill color if needed */
}
</style>
