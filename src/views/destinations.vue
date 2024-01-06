<template>
    <div class="principalView">
        <div class="backgroundImage"></div>
        <div class="overlayContent">
            <div class="searchComponents grid grid-rows-2 grid-cols-1 gap-10">
                <div class="title tx text-white ">
                    <h1>Discover  your next destination</h1>
                    <p>You can find yout destination</p>
                </div>
                <div class="controlers flex justify-end  items-end gap-3">
                    <select name="Zonas" id="" class="flex" v-model="zoneSelect">
                        <option value="">Select Zone</option>
                        <option value="zone1">Diamante</option>
                        <option value="zone2"> Cabo San Lucas / Pacific beyond los Arcos </option>
                        <option value="zone3">The Corridor</option>
                        <option value="zone4">Puerto Los Cabos / San Jose del Cabo</option>
                    </select>

                    <div class="checkbox-wrapper-16 ">
                        <label class="checkbox-wrapper">
                            <span class="checkbox-tile">
                                <span class="checkbox-label" @click="selectAllFunction">Select all</span>
                            </span>
                        </label>
                    </div>
                    <buttonRed text="Search" ico="search" @click="hotelsByZone"/>
                </div>

                <div class="zones flex gap-5 flex-wrap">
                    <zone text="Los cabos" />
                    <zone text="Cabo san lucas" />
                    <zone text="The corridor" />
                    <zone text="San jose del cabo" />
                    <zone text="Puerto los cabos" />
                </div>

            </div>
            <div class="flex-body global-bg flex justify-center">
                <div class="body">
                    <div class="bodycard grid">

                        <div class="zonas grid gap-10">
                            <div class="hotels flex flex-col" v-if="showZone4">
                                <div class="zona-text flex items-center justify-center">
                                    <p class="text-zona w-full flex justify-center">Puerto Los Cabos / San Jose del Cabo</p>
                                </div>
                                <div class="hotels zone-1 justify-center flex-wrap  flex zone1 gap-10">
                                    <div v-for="hotel in hotelsZone1" :key="hotel.id">
                                        <router-link 
                                        :to="{name: 'GetService'}"
                                        class="custom-router"
                                        >
                                            <hotelCard :name="hotel.name" :img="hotel.image" @click="idHotelSelect(hotel.id)"/>
                                    </router-link>
                                    </div>
                                </div>
                            </div>
                            <div class="hotels flex flex-col" v-if="showZone3">
                                <div class="zona-text flex items-center justify-center">
                                    <p class="text-zona w-full flex justify-center">The Corridor</p>
                                </div>
                                <div class="hotels zone-1 justify-center flex-wrap  flex zone1 gap-10">
                                    <div v-for="hotel in hotelsZone2" :key="hotel.id">
                                        <router-link 
                                        :to="{name: 'GetService'}"
                                        class="custom-router"
                                        >
                                            <hotelCard :name="hotel.name" :img="hotel.image" @click="idHotelSelect(hotel.id)"/>                                        
                                    </router-link>
                                    </div>
                                </div>
                            </div>

                            <div class="hotels flex flex-col" v-if="showZone2">
                                <div class="zona-text flex items-center justify-center">
                                    <p class="text-zona w-full flex justify-center">Cabo San Lucas / Pacific beyond los Arcos</p>
                                </div>
                                <div class="hotels zone-1 justify-center flex-wrap  flex zone1 gap-10">
                                    <div v-for="hotel in hotelsZone3" :key="hotel.id">
                                        <router-link 
                                        :to="{name: 'GetService'}"
                                        class="custom-router"
                                        >
                                            <hotelCard :name="hotel.name" :img="hotel.image" @click="idHotelSelect(hotel.id)"/>                                        
                                    </router-link>
                                    </div>
                                </div>
                            </div>

                            <div class="hotels flex flex-col" v-if="showZone1">
                                <div class="zona-text flex items-center justify-center">
                                    <p class="text-zona w-full flex justify-center">Diamante</p>
                                </div>
                                <div class="hotels zone-1 justify-center flex-wrap  flex zone1 gap-10">
                                    <div v-for="hotel in hotelsZone4" :key="hotel.id">
                                        <router-link 
                                        :to="{name: 'GetService'}"
                                        class="custom-router"
                                        >
                                            <hotelCard :name="hotel.name" :img="hotel.image" @click="idHotelSelect(hotel.id)"/>                                        
                                    </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import buttonRed from '../components/controllers/buttonRed.vue';
import zone from '../components/cards/zone.vue';
import hotelCard from '../components/cards/card.vue';
import axios from 'axios';
import { hotelInformation } from '../stores/cunter';
import { onMounted, ref } from 'vue';

const idHotelStore = hotelInformation();

const hotelsZone1 = ref([])
const hotelsZone2 = ref([])
const hotelsZone3 = ref([])
const hotelsZone4 = ref([])
const zoneSelect = ref('')
const showZone1 = ref(true)
const showZone2 = ref(true)
const showZone3 = ref(true)
const showZone4 = ref(true)
const selectAll = ref(true)
const showAlert = ref(false)

const getHotelsZone1 = async () => {
    const { data } = await axios.get('http://127.0.0.1:8000/hotels/zone/1')
    hotelsZone1.value = data
}

const getHotelsZone2 = async () => {
    const { data } = await axios.get('http://127.0.0.1:8000/hotels/zone/2')
    hotelsZone2.value = data
}

const getHotelsZone3 = async () => {
    const { data } = await axios.get('http://127.0.0.1:8000/hotels/zone/3')
    hotelsZone3.value = data
}

const getHotelsZone4 = async () => {
    const { data } = await axios.get('http://127.0.0.1:8000/hotels/zone/4')
    hotelsZone4.value = data
}

const hotelsByZone = () => {
    selectAll.value = false
    switch(zoneSelect.value) {
        case 'zone1':
            showZone1.value = true
            showZone2.value = false
            showZone3.value = false
            showZone4.value = false
            break;
        case 'zone2':
            showZone1.value = false
            showZone2.value = true
            showZone3.value = false
            showZone4.value = false
            break;
        case 'zone3':
            showZone1.value = false
            showZone2.value = false
            showZone3.value = true
            showZone4.value = false
            break;

        case 'zone4':
            showZone1.value = false
            showZone2.value = false
            showZone3.value = false
            showZone4.value = true
            break;

        default:
            selectAll.value = true
            showZone1.value = true
            showZone2.value = true
            showZone3.value = true
            showZone4.value = false
    }
}   

const selectAllFunction = () => {
        showZone1.value = true;
        showZone2.value = true;
        showZone3.value = true;
        showZone4.value = true;
};


const idHotelSelect = (id) => {
    idHotelStore.idStore(id)
} 


onMounted(() => {
    getHotelsZone1();
    getHotelsZone2();
    getHotelsZone3();
    getHotelsZone4();
});
</script>
  
<style scoped>



.custom-router{
    color: #0c0c0c;
}
.zona-text {
    height: 10rem;
    margin-left: 4rem;
    width: 89%;
}
.text-zona {
    border-bottom: 1px solid;   
}

.title {
    padding-bottom: 4rem;
}

.controlers,
.zones {
    width: 40%;
}

.body {
    width: 90%;
    height: auto;
}

.bodycard {
    width: 100%;
    height: 100%;
    grid-template-rows: auto 1fr;
}

.principalView {
    height: 100vh;
    width: 100%;
    position: relative;
    background-color: black;
}

select {
    width: 100%;
    height: 50px;
    border-radius: 10px;
    border: none;
    outline: none;
    padding: 0 10px;
    margin-top: 20px;
    font-size: 1.2rem;
    font-weight: 600;
    color: #0c0c0c;
}

option {
    font-size: 1.2rem;
    color: #0c0c0c;
}

.searchComponents {
    height: 100vh;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.backgroundImage {
    width: 100%;
    height: 100%;
    background-image: url('../assets/Img/fotos/back.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    opacity: 0.5;
    top: 0;
    left: 0;
    z-index: 0;
}

.overlayContent {
    position: relative;
    height: 100%;
    z-index: 1;
}

.backgroundImage::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0%;
    background: linear-gradient(to top, rgba(255, 255, 255, 1), transparent);
    z-index: 1;
}


.checkbox-wrapper-16 *,
.checkbox-wrapper-16 *:after,
.checkbox-wrapper-16 *:before {
    box-sizing: border-box;
}

.checkbox-wrapper-16 .checkbox-input {
    clip: rect(0 0 0 0);
    -webkit-clip-path: inset(100%);
    clip-path: inset(100%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}



.checkbox-wrapper-16 .checkbox-input:checked+.checkbox-tile:before {
    transform: scale(1);
    opacity: 1;
    background-color: red;
    border-color: red;
}

.checkbox-wrapper-16 .checkbox-input:focus+.checkbox-tile {
    border-color: #2260ff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1), 0 0 0 4px #b5c9fc;
}

.checkbox-wrapper-16 .checkbox-input:focus+.checkbox-tile:before {
    transform: scale(1);
    opacity: 1;
}

.checkbox-wrapper-16 .checkbox-tile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 8rem;
    height: 3.1rem;
    border-radius: 0.5rem;
    border: 2px solid #b5bfd9;
    background-color: #fff;
    transition: 0.15s ease;
    cursor: pointer;
    position: relative;
}

.checkbox-wrapper-16 .checkbox-tile:before {
    content: "";
    position: absolute;
    display: block;
    width: 1.25rem;
    height: 1.25rem;
    border: 2px solid #b5bfd9;
    background-color: #fff;
    border-radius: 50%;
    top: 0.25rem;
    left: 0.25rem;
    opacity: 0;
    transform: scale(0);
    transition: 0.25s ease;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='://www.w3.org/2000/svg' width='192' height='192' fill='%23FFFFFF' viewBox='0 0 256 256'%3E%3Crect width='256' height='256' fill='none'%3E%3C/rect%3E%3Cpolyline points='216 72.005 104 184 48 128.005' fill='none' stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'%3E%3C/polyline%3E%3C/svg%3E");
    background-size: 12px;
    background-repeat: no-repeat;
    background-position: 50% 50%;
}

@media screen and (max-width: 767px) {
    .tx{
        text-align: center;
    }
    .zones{
        width: 90%;
        justify-content: center;
    }
    .controlers{
        width: 90%;
    }
}

</style>
  