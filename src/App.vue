<template>
   <div class="bod">
    <div class="animation" v-if="showAnimation">
        <animation/>
    </div>

    <div class="app" v-if="showCont" :class="{'ease-in':showCont}">
        <div class="back">
            <div class="bodyComp">
                <router-view/>
            </div>  
        </div>
    </div>
   </div>
</template>

<script setup>
import animation from "./components/Principal/animation.vue";
import {ref, watch} from 'vue'
import { useMiStore } from './stores/cunter';

const store = useMiStore();
const showAnimation = ref(true)
const showCont = ref(false)

watch(() => store.variableDeEstado, (value) => {
    if(value){
        showAnimation.value = false
        showCont.value = true
    }
})

</script>

<style scoped>
.app {
    height: 100vh;
    width: 100%;
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-rows: 2.4fr 0.4fr ;
    gap: 0px 0px;
}
.back{
    display: grid; 
    grid-auto-columns: 1fr; 
    grid-template-rows: 0.2fr 2.4fr; 
    gap: 0px 0px; 
    height: 100vh;
    background: url('../src/assets/Img/fotos/carro6.jpeg') center center / cover no-repeat;
}

.ease-in{
    animation: fadeIn 1s ease-in-out
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@media only screen and (max-width: 768px) {
    .back{
        background: url('../src/assets/Img/fotos/carroMD.jpeg') center center / cover no-repeat;
    }
}

</style>