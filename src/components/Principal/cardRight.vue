<template>
    <div class="card-left h-full w-4/5 flex justify-center items-center ">
        <div class="intra-layout contenedor-right shadow bg-white">
            <div class="texto-right">
                <div class="ico-right flex justify-start ml-10 items-center">
                    <span class="material-symbols-outlined orange-text" style="font-size: 2rem;">
                        {{ ico }}
                    </span>
                </div>
                <div class="title-right flex-col text-center h-full flex justify-center items-center">
                    <h1 class="orange-text font-bold">{{ title }}</h1>
                    <p class="subtext w-4/5"> 
                        Travel seamlessly between your hotel and the airport. Guaranteed comfort, hassle-free.                                        
                    </p>

                </div>
            </div>
            <div :style="{ backgroundImage: 'url(' + img + ')' }" class="img-right bg-black"></div>
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
    .img-right, .contenedor-right {
        border-radius: 20px;
    }

    .img-right {
        background: center center / cover no-repeat;
    }

    .contenedor-right {
        display: grid;
        grid-template-columns: 1fr 2fr;
    }

    .texto-right {
        display: grid;
        grid-template-rows: 1fr 4fr;
    }

    @media screen and (max-width: 767px) {
        .ico-right, p{
            display: none;
        }
        .img-right {
            box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
            height: 300px;   
            order: -1; 
        }
        .contenedor-right{
            grid-template-columns: 1fr;
        }
        .title-right{
            margin-top: 30px;
        }
        .texto-right{
            grid-template-rows: 1fr 3fr;
        }
    
    }
</style>
