<template>
    <div class="card-left h-full w-4/5 flex justify-center items-center">
        <div class="intra-layout contenedor shadow bg-white">
            <div class="texto">
                <div class="ico flex justify-start ml-10 items-center">
                    <span class="material-symbols-outlined orange-text" style="font-size: 2rem;">
                        {{ ico }}
                    </span>
                </div>
                <div class="title h-full flex justify-center items-center">
                    <h1 class="orange-text font-bold">{{ title }}</h1>
                    <p class="subtext w-4/5"> natus sint maxime error corporis aut eius eos maiores commodi ad harum ratione suscipit soluta.</p>
                </div>
            </div>
            <div :style="{ backgroundImage: 'url(' + img + ')' }" class="img bg-black"></div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
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
        width: 100%;
        height: 300px;
    }

    .contenedor {
        display: flex;
        flex-direction: column;
    }

    @media screen and (max-width: 767px) {
        .ico, p{
            display: none;
        }
        .img {
            box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
            height: 300px;   
            order: -1; 
        }
        .contenedor{
            grid-template-columns: 1fr;
        }
        .title{
            margin-top: 30px;
        }
        .texto{
            grid-template-rows: 1fr 3fr;
        }
    }
</style>
