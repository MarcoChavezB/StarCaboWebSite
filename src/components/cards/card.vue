<template>
    <div class="hotelCard shadow-xl grid ">
        <div class="image" :style="{ backgroundImage: `url('${img}')` }">
        </div>
        <div class="info grid grid-rows-2 bg-white">
            <div class="name">
                <p class="h-full flex items-center">{{ name }}</p>
            </div>
            <div class="loc">
                <div class="location flex items-center">
                    <p class="subtext">{{ location }}</p>
                </div>
                <div class="reserb w-full h-full flex justify-center items-center">
                    <button type="button" class="bt flex justify-center items-center gap-1 focus:outline-none text-white bg-red-700 hover:bg-red-800  rounded-lg me-2 mb-2">
                        Select
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'  
const define = defineProps({
    name: String,
    location: String,
    img: String
})
</script>

<style scoped>
.hotelCard {
    grid-template-rows: 2fr 1.3fr;
    height: 13rem;
    width: 15rem;
    border-radius: 10px;
    position: relative;
}
.bt{
    font-size: 0.7rem;
}
.loc{
    display: grid;
    grid-template-columns: 2fr 1fr;
}
p{
    margin-left: 10px;
}
.image {
    position: relative;
    z-index: 0; 
    height: 110%;
    background-image: url('../../assets/Img/fotos/back.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px;
}


.info {
    position: relative;
    border-radius: 10px;
    z-index: 1;
}


</style>
