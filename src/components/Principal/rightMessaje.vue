<template>
    <div class="lade bg-red-700 grid ">
        <div class="img flex justify-center items-center">
            <img src="../../assets/Img/logo.png" alt="">
        </div>
        <div class="text flex items-center justify-center">
            <h1 class="vertical-text text-white text-2xl">Star Cabo</h1>
        </div>
    </div>
</template>

<style scoped>
.lade {
    height: 29vh;
    width: 7vh;
    background-color: black;
    grid-template-rows: 1fr 3fr;

}

.vertical-text {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
}

</style>
