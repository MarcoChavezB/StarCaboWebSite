<template>
    <div class="card-left h-full w-4/5 flex justify-center items-center ">
        <div class="intra-layout contenedor shadow bg-white">
            <div class="texto">
                <div class="ico flex justify-start ml-10 items-center">
                    <span class="material-symbols-outlined orange-text" style="font-size: 2rem;">
                        {{ ico }}
                    </span>
                </div>
                <div class="title h-full flex justify-center items-center">
                    <h1 class="orange-text font-bold">{{ title }}</h1>
                </div>
            </div>
            <div :style="{ backgroundImage: 'url(' + img + ')' }" class="img bg-black"></div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps ({
    ico: String,
    title: String,
    img: String, 
})
</script>

<style scoped>
    .img, .contenedor {
        border-radius: 20px;
    }

    .img {
        background: center center / cover no-repeat;
    }

    .contenedor {
        display: grid;
        grid-template-columns: 1fr 2fr;
    }

    .texto {
        display: grid;
        grid-template-rows: 1fr 4fr;
    }
</style>
