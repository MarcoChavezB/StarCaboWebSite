<template>
    <div class="destinations grid">
        <nav class="grid grid-cols-2">
            <navbarComp />
        </nav>
        <div class="body">
            <router-view />
        </div>
    </div>
</template>

<script setup>
import navbarComp from '../components/Principal/TopNavbar.vue'
</script>

<style scoped>
.destinations {
    background-color: white;
    height: 100vh;
    width: 100%;
    grid-template-rows: 0.2fr 2fr;
}

nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: white;
    z-index: 1000;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
}


</style>
