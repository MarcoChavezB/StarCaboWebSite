<template>
    <div class="principalView">
        <div class="backgroundImage"></div>
        <div class="overlayContent">
            <div class="searchComponents grid grid-rows-2 grid-cols-1 gap-10">
                <div class="title text-white ">
                    <h1>Discover <br> your next destination</h1>
                    <p>You can find yout destination</p>
                </div>
                <div class="controlers flex justify-end items-end gap-3">
                    <select name="Zonas" id="" class="flex">
                        <option value="cabos">Los Cabos</option>
                        <option value="cabo">Cabo San Lucas</option>
                        <option value="corridor">The Corridor</option>
                        <option value="san_jose">San Jose Del Cabo</option>
                        <option value="puerto">Puerto Los Cabos</option>
                    </select>

                    <div class="checkbox-wrapper-16 ">
                        <label class="checkbox-wrapper">
                            <input class="checkbox-input" type="checkbox">
                            <span class="checkbox-tile">
                                <span class="checkbox-label">Select all</span>
                            </span>
                        </label>
                    </div>
                    <buttonRed text="Search" ico="search" />
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
                        <div class="how flex " style="margin-left: 4rem;">
                            <div class="relative mt-6">
                                <input type="email" placeholder="Search destine" autocomplete="email"
                                    aria-label="Email address"
                                    class="block w-full rounded-2xl border border-neutral-300 bg-transparent pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5" />
                                <div class="absolute inset-y-1 right-1 flex justify-end">
                                    <button type="submit" aria-label="Submit"
                                        class="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800">
                                        <span class="material-symbols-outlined ">search</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="zonas grid gap-10">
                            <div class="hotels flex flex-col">
                                <div class="zona-text flex items-center justify-center">
                                    <p class="text-zona w-full flex justify-center">Diamante</p>
                                </div>
                                <div class="hotels zone-1 justify-center flex-wrap  flex zone1 gap-10">
                                    <div v-for="hotel in hotelsZone1" :key="hotel.id">
                                        <hotelCard :name="hotel.name" :img="hotel.image" />
                                    </div>
                                </div>
                            </div>
                            <div class="hotels flex flex-col">
                                <div class="zona-text flex items-center justify-center">
                                    <p class="text-zona w-full flex justify-center">Pacific beyond Los Arcos</p>
                                </div>
                                <div class="hotels zone-1 justify-center flex-wrap  flex zone1 gap-10">
                                    <div v-for="hotel in hotelsZone2" :key="hotel.id">
                                        <hotelCard :name="hotel.name" :img="hotel.image" />
                                    </div>
                                </div>
                            </div>

                            <div class="hotels flex flex-col">
                                <div class="zona-text flex items-center justify-center">
                                    <p class="text-zona w-full flex justify-center">Cabo San Lucas</p>
                                </div>
                                <div class="hotels zone-1 justify-center flex-wrap  flex zone1 gap-10">
                                    <div v-for="hotel in hotelsZone3" :key="hotel.id">
                                        <hotelCard :name="hotel.name" :img="hotel.image" />
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
import howCard from '../components/cards/howCard.vue';
import zone from '../components/cards/zone.vue';
import hotelCard from '../components/cards/card.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';

const hotelsZone1 = ref([])
const hotelsZone2 = ref([])
const hotelsZone3 = ref([])

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


onMounted(() => {
    getHotelsZone1();
    getHotelsZone2();
    getHotelsZone3();
});
</script>
  
<style scoped>
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
</style>
  