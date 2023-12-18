<template>
    <div class="con flex justify-center items-center h-full">
        <div class="rounder" v-if="showRounder"></div>
    </div>
    <div class="bodyCont " v-if="showBodyCont" :class="{ 'whiteBack': showBodyCont }">
        <section class="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center" v-if="showCard" :class="{ 'cardIn': !outCard, 'cardOut': outCard }">
            <div class="p-8 md:p-12 lg:px-16 lg:py-24">
                <div class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                    <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
                        Star Cabo is your best option
                    </h2>

                    <p class="hidden text-gray-500 md:mt-4 md:block">
                        At StarCabo, we don't just specialize in tourist transportation; we are dedicated to turning every journey into a memorable and exciting experience. By choosing us, you are opening the door to a world of discoveries, comforts, and unforgettable moments.
                    </p>

                    <div class="mt-4 md:mt-8" @click="hAnimation">
                        <a href="#"
                            class="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400">
                            Get started today
                        </a>
                    </div>
                </div>
            </div>
            <div class="imgages">
               <div class="cont h-full grid grid-cols-3 gap-2">
                <div class="img">
                    <img src="../../assets/Img/fotos/cabos.webp" alt="">
                </div>
                <div class="img">
                    <img src="../../assets/Img/fotos/persona.webp" alt="">
                </div>
                <div class="img">
                    <img src="../../assets/Img/fotos/palm.webp" alt="">
                </div>
               </div>
            </div>
        </section>
    </div>
</template>
  
<script setup>
import {ref} from 'vue';
import { useMiStore } from '../../stores/cunter';

const showRounder = ref(true);
const showBodyCont = ref(false);
const outCard = ref(false);
const showCard = ref(false);
const store = useMiStore();

setTimeout(() => {
  showRounder.value = false;
  showBodyCont.value = true;
  showCard.value = true;
}, 1500);

const hAnimation = () => {  
  outCard.value = true;
  setTimeout(() => {
    showCard.value = false;
    store.cambiarVariableDeEstado(true);    
  }, 1500);
};

</script>


<style scoped>
.con {
  height: 100vh;
  width: 100%;
  position: absolute;
  background-color: #0c0c0c;
  overflow: hidden;
}
.img{
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
}
img{
    height: 100%;
    width: 100%;
    object-fit: cover;        
    border-radius: 10px;

}
.cardIn{
    animation: fadeIn 1.5s ease-in-out
}

.cardOut{
    animation: fadeOut 1.5s ease-in-out
}
.imgages{
    margin-right: 2rem;
}
.bodyCont {
  height: 100vh;
  width: 100%;
  position: absolute;
  background-color: #f5f4ed;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.whiteBack {
  background-color: white;
}

.rounder {
  background-color: white;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  animation: rounder 3s infinite;
}

@keyframes rounder {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(400);
  }
}


@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
</style>
