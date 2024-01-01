<template>
    <div class="destinations grid">
        <nav class="grid grid-cols-2">
            <div class="first flex items-center gap-3">
                <router-link :to="{ name: 'Principal' }">
                    <span class="material-symbols-outlined icoBack">
                        arrow_back_ios_new
                    </span>
                </router-link>
                <p>Go back</p>
            </div>
            <div class="seconf flex items-center justify-end">
                <div class="logo ">
                    <img class="h-10 w-10" src="../../src/assets/Img/logo.png" alt="" />
                </div>
            </div>
        </nav>
        <div class="body">
            <router-view />
        </div>
    </div>
</template>

<style scoped>
.destinations {
    background-color: white;
    height: 100vh;
    width: 100%;
    grid-template-rows: 0.2fr 2fr;
}

icoBack {
    font-size: 1rem;
    color: #7a7a77;
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
