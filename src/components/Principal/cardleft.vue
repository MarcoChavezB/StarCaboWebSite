<template>
    <div class="card-left h-full w-4/5 flex justify-center items-center ">
        <div class="intra-layout contenedor shadow bg-white">
            <div :style="{ backgroundImage: 'url(' + img + ')' }" class="img bg-black"></div>
            <div class="texto">
                <div class="ico flex justify-end mr-10 items-center">
                    <span class="material-symbols-outlined orange-text" style="font-size: 2rem;">
                        {{ ico }}
                    </span>
                </div>
                <div class="title h-full flex-col gap-5 flex justify-center items-center text-center">
                    <h1 class="orange-text font-bold">{{ title }}</h1>
                    <p class="subtext w-4/5"> natus sint maxime error corporis aut eius eos maiores commodi ad harum ratione suscipit soluta.</p>
                </div>
            </div>
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
    .img , .contenedor{
        border-radius: 20px;
    }
    .img {
        background: center center / cover no-repeat;
    }
    .contenedor{
        display: grid;
        grid-template-columns: 2fr 1fr;
    }
    .texto{
        display: grid;
        grid-template-rows: 1fr 4fr;
    }

    @media screen and (max-width: 767px) {
        
        .contenedor{
            grid-template-columns: 1fr;
        }
        .img{ 
            box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
            position: relative;
            height: 300px;   
        }
        .texto{
            grid-template-rows: 1fr 1fr;
            margin-top: 30px;

        }
        .title p{
            display: none;
        }
        .ico{
            display: none;
        }
    }

</style>