<template>
    <div class="app">
        <div class="back">
            <div class="headerComp">
                <HeaderComp />
            </div>
            <div class="bodyComp">
                <router-view/>
            </div>
        </div>
        <div class="footerComp"></div>
    </div>
</template>

<script setup>
import HeaderComp from "./components/Principal/TopNavbar.vue";
</script>

<style scoped>
.app {
    height: 100vh;
    width: 100%;
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-rows: 2.4fr 0.4fr;
    gap: 0px 0px;
}
.back{
    display: grid; 
  grid-auto-columns: 1fr; 
  grid-template-rows: 0.2fr 2.4fr; 
  gap: 0px 0px; 
    background-color: red;
    height: 130vh;
    background: url('../src/assets/Img/fotos/backgroundimg.webp') center center / cover no-repeat;;

}


</style>