<template>
    <div class="appService">
        <div class="secForm flex justify-center items-center">
            <div class="form">
                <div class="back">
                    <router-link :to="{ name: 'Principal' }">
                        <div class="icons flex h-full w-1/5 items-center justify-center gap-3">
                            <span class="material-symbols-outlined icoBack pointer">
                                arrow_back_ios
                            </span>
                            <p class="pointer">Go back</p>
                        </div>
                    </router-link>
                </div>
                <div class="forms flex justify-center">
                    <div class="cardForm border">
                        <div class="title flex items-center">
                            <p>Star Cabo services</p>
                        </div>
                        <div class="forms">
                            
                        </div>
                        <div class="buttons"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sectext"></div>
    </div>
</template>

<script setup>
import inptComp from "../components/controllers/input.vue"
</script>

<style scoped>
.appService {
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
}
.orange{
    background-color: #f0582b;
    color: white;
}
.form {
    height: 100%;
    width: 100%;
    background-color: #f6f7fc;
    display: grid;
    grid-template-rows: 0.1fr 1fr;
}

.icoBack {
    font-size: 1rem;
    color: #7a7a77;
}

.cardForm {
    height: 90%;
    width: 90%;
    background-color: white;
    border-radius: 20px;
    display: grid;
    grid-template-rows: 0.2fr 1fr 0.2fr;
}
.pointer {
    cursor: pointer;
}
.title{
    margin-left: 20px;
}
.sectext {
    background-image: url('../assets/Img/fotos/serviceBakground.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}
</style>