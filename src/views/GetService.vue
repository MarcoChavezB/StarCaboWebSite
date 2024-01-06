
<style scoped>
.contenido {
    height: 100vh;
    width: 100%;
    grid-template-rows: 0.4fr 3fr 1fr;
}

select {
    width: 100%;
    height: 2.5rem;
    border-radius: 10px;
    outline: none;
    padding: 0 10px;
    font-size: 1rem;
    font-weight: 600;
    color: #4d4b4b;
}

option {
    font-size: 1rem;
    color: #0c0c0c;
}



.contenido {
    position: relative;
}

.form {
    grid-template-rows: 0.6fr 4fr;
}

.back-img {
    background-image: url('../assets/Img/fotos/palm.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    z-index: 0;
}

.bt {
    backdrop-filter: blur(3px);
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 20px 20px 0 0;
}

.modals {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(3px);
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
}

@media screen and (max-width: 767px) {
    .bt {
        width: 100%;
    }

    .layout {
        flex-direction: column;
        gap: 0;
    }

    .inputs {
        flex-direction: column;
    }

    .personal,
    .comments {
        width: 100%;
    }
}
</style>


<template>
    <div class="contenido relative grid">
        <div class="hed"></div>
        <div class="formulario">
            <div class="back-img w-full h-full">
                <div class="cont-form w-full h-full flex items-end justify-center">
                    <div class="form grid" style="height: 85%; width: 90%;">
                        <div class="buttons">
                            <div class="bt text-white grid grid-cols-3 h-full w-2/5">
                                <div class="gap-2 cursor-pointer arrival flex justify-center items-center"
                                    @click="vista1 = true, vista2 = false">
                                    <span class="material-symbols-outlined">
                                        check_circle
                                    </span>
                                    <p>Data</p>
                                    <div class="line-bottom"></div>
                                </div>
                                <div class="gap-2 cursor-pointer personal flex justify-center items-center"
                                    @click="vista1 = false, vista2 = true, vista3 = false">
                                    <span class="material-symbols-outlined">
                                        check_circle
                                    </span>
                                    <p>Personal</p>
                                </div>
                                <div class="gap-2 cursor-pointer payment flex justify-center items-center">
                                    <span class="material-symbols-outlined">
                                        check_circle
                                    </span>
                                    <p>Payment</p>
                                </div>
                            </div>
                        </div>
                        <div class="formulario-cont flex justify-center items-center bg-white">
                            <div class="intra-layout">
                                <section v-if="vista1"
                                    class="w-full h-full arrive-information flex justify-center items-center">
                                    <div class="layout intra-layout flex gap-10 justify-center items-center">
                                        <div class="mt-5 bg-white h-full rounded-lg shadow">
                                            <div class="flex">
                                                <div class="flex-1 py-5 pl-5 overflow-hidden gap-5">
                                                    <span class="material-symbols-outlined">
                                                        no_crash
                                                    </span>
                                                    <h1 class="ml-5 inline text-2xl font-semibold leading-none">Arrive
                                                        Information
                                                    </h1>
                                                </div>
                                            </div>
                                            <div class="px-5 pb-5">

                                                <select name="" id="" @change="show_travel"
                                                    class="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   
                                                    transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200" v-model="travels">
                                                    <option value="" disabled selected>Trip type</option>
                                                    <option value="One Way">One Way</option>
                                                    <option value="Roundtrip">Roundtrip</option>
                                                </select>

                                                <div class="grid grid-cols-2">
                                                    <div class="flex-grow pr-2">
                                                        <select name="" id="" @change="airport" v-model="star_location"
                                                            class="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base
                                                    transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  ">
                                                            <option value="" disabled selected>Start location</option>
                                                            <option value="Los Cabos International Airport (SJD)">Aeropuerto
                                                                Internacional de Los Cabos</option>
                                                            <option v-for="hotel in hotels" :key="hotel" :value="hotel">{{
                                                                hotel }}
                                                            </option>
                                                        </select>
                                                    </div>
                                                    <div class="flex-grow">
                                                        <select name="" id="" @change="airport" v-model="end_location"
                                                            class="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base
                                                    transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  ">
                                                            <option value="" disabled selected>End location</option>
                                                            <option value="Los Cabos International Airport (SJD)">Aeropuerto
                                                                Internacional de Los Cabos</option>
                                                            <option v-for="hotel in hotels" :key="hotel" :value="hotel">{{
                                                                hotel }}
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="flex gap-2">
                                                    <input placeholder="Flight number" v-if="show_data_travel"
                                                        v-model="flight_number"
                                                        class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  ">

                                                    <input placeholder="Airline" v-if="show_data_travel" v-model="airline"
                                                        class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  ">

                                                    <input type="date" placeholder="Arrive date" v-model="arrive_date"
                                                        class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  ">
                                                </div>

                                                <div class="flex gap-2">
                                                    <input type="number" placeholder="# passengers"
                                                        v-model="number_passengers"
                                                        class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  ">

                                                    <input type="time" placeholder="" v-model="time"
                                                        class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  ">

                                                </div>
                                            </div>
                                        </div>

                                        <!-- SECOND ARRIVE INFORMATION -->

                                        <div class="mt-5 h-full bg-white rounded-lg shadow" v-if="show_travel2">
                                            <div class="flex">
                                                <div class="flex-1 py-5 pl-5 overflow-hidden gap-5">
                                                    <span class="material-symbols-outlined">
                                                        no_crash
                                                    </span>
                                                    <h1 class="ml-5 inline text-2xl font-semibold leading-none">Second
                                                        Arrive
                                                        Information
                                                    </h1>
                                                </div>
                                            </div>
                                            <div class="px-5 pb-5">
                                                <div class="grid grid-cols-2">
                                                    <div class="flex-grow pr-2">
                                                        <select name="" id="" @change="airport_roundtrip"
                                                            v-model="second_start_location"
                                                            class="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base
                                                    transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  ">
                                                            <option value="" disabled selected>Start location</option>
                                                            <option value="Los Cabos International Airport (SJD)">Aeropuerto
                                                                Internacional de Los Cabos</option>
                                                            <option v-for="hotel in hotels" :key="hotel" :value="hotel">{{
                                                                hotel }}
                                                            </option>
                                                        </select>
                                                    </div>
                                                    <div class="flex-grow">
                                                        <select name="" id="" @change="airport_roundtrip"
                                                            v-model="second_end_location"
                                                            class="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base
                                                    transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  ">
                                                            <option value="" disabled selected>End location</option>
                                                            <option value="Los Cabos International Airport (SJD)">Aeropuerto
                                                                Internacional de Los Cabos</option>
                                                            <option v-for="hotel in hotels" :key="hotel" :value="hotel">{{
                                                                hotel }}
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="flex gap-2">
                                                    <input placeholder="Flight number" v-if="show_data_travel2"
                                                        v-model="second_flight_number"
                                                        class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  ">

                                                    <input placeholder="Airline" v-if="show_data_travel2"
                                                        v-model="second_airline"
                                                        class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  ">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section v-if="vista2"
                                    class="w-full h-full personal-information flex justify-center items-center">
                                    <div class="layout intra-layout flex flex-col rounded-lg shadow">
                                        <div class="title">
                                            <div class="flex">
                                                <div class="flex-1 py-5 pl-5 overflow-hidden gap-5">
                                                    <span class="material-symbols-outlined">
                                                        person
                                                    </span>
                                                    <h1 class="ml-5 inline text-2xl font-semibold leading-none">Personal
                                                        Information
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="inputs flex gap-10 justify-center ml-5 mr-5 h-full">
                                            <div class="personal w-1/2">
                                                <input placeholder="Name" v-model="name"
                                                    class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   
                                            transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  ">

                                                <input placeholder="Last name" v-model="last_name"
                                                    class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   
                                            transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  ">

                                                <div class="flex gap-2">
                                                    <input v-model="first_tel" placeholder="First Tel"
                                                        class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   
                                                transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  ">


                                                    <input v-model="second_tel" placeholder="Second Tel"
                                                        class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   
                                                transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  ">
                                                </div>

                                            </div>
                                            <div class="comments w-1/2 grid h-full " style="grid-template-rows: 5fr 1.5fr;">
                                                <div class="commentsa">
                                                    <p>Additional comments</p>
                                                    <div class="intra-layout">
                                                        <textarea v-model="aditionals_comments" name="comments"
                                                            id="comments"
                                                            class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   
                                        transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200"
                                                            style="height: 10rem;">
                                                    </textarea>
                                                    </div>
                                                </div>
                                                <div class="flex text-white justify-end h-full items-center">
                                                    <button @click="showModal = true">Continue</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="populars flex-col flex justify-center items-center">
            <div class="intra-layout flex-col flex justify-center items-center">
                <div class="text flex-col flex justify-center items-center w-1/2 text-center gap-5">
                    <h2>We maintain yout privacy</h2>
                    <p>The provided data is not stored in any local database.</p>
                    <p>If you need to contact us, you can do so at <span class="linked">624 122 6386</span> or <span class="linked">Starcabo21@gmail.com</span></p>
                </div>
            </div>
        </div>
    </div>
    <div class="modals flex justify-center items-end" v-if="showModal">
        <div class="cont bg-white shadow rounded-lg flex justify-center items-center" style="height: auto;">
            <div class="intra-layout grid" style="grid-template-rows: 1fr 6fr 1fr;">
                <div class="flex" style="border-bottom: 1px solid gray;">
                    <div class="flex-1 py-5 pl-5 overflow-hidden gap-5">
                        <span class="material-symbols-outlined">
                            check_circle
                        </span>
                        <h1 class="ml-5 inline text-2xl font-semibold leading-none">
                            Confirm your reservation
                        </h1>
                    </div>
                </div>
                <div class="flex w-full h-full justify-center items-center">
                    <div class="grid grid-cols-2 informacion gap-5 intra-layout">
                        <div class="flex flex-col gap-5">
                            <div class="personal shadow rounded-lg ca h-full">
                            <p class="subtext flex justify-center items-center">Travel Information</p>
                            <div class="flex intra-layout flex-col ml-4 gap-3">
                                        <div class="row2">
                                            <p class="subtext">Trip type: </p>
                                            <p>{{ arrive_information.type_trip }}</p>
                                        </div>
                                        <div class="row2">
                                            <p class="subtext">Start: </p>
                                            <p>{{ arrive_information.star_location }}</p>
                                        </div>
                                        <div class="row2">
                                            <p class="subtext">End: </p>
                                            <p>{{ arrive_information.end_location }}</p>
                                        </div>

                                        <div class="flight gap-2 flex flex-col" v-if="show_data_travel">
                                            <div class="row2">
                                                <p class="subtext">Flight number: </p>
                                                <p>{{ arrive_information.flight_number }}</p>
                                            </div>
                                            <div class="row2">
                                                <p class="subtext">Airline: </p>
                                                <p>{{ arrive_information.airline }}</p>
                                            </div>
                                        </div>
                                        <div class="row2">
                                                <p class="subtext">Date: </p>
                                                <p>{{ arrive_information.arrive_date }}</p>
                                        </div>
                                        <div class="flex gap-4">
                                            <div class="row2">
                                                <p class="subtext">Passagers: </p>
                                                <p>{{ arrive_information.number_passengers }}</p>
                                        </div>
                                        <div class="row2">
                                                <p class="subtext">Hour: </p>
                                                <p>{{ arrive_information.time }}</p>
                                        </div>
                                        </div>
                                    </div>
                        </div>

                        <div class="second-travel w-full h-full rounded-lg shadow ca" v-if="show_travel2">
                                    <p class="subtext flex justify-center items-center">Second Travel Information</p>
                                    <div class="flex intra-layout flex-col ml-4 gap-3">
                                        <div class="row2">
                                            <p class="subtext">Start: </p>
                                            <p>{{ second_arrive_information.star_location }}</p>
                                        </div>
                                        <div class="row2">
                                            <p class="subtext">End: </p>
                                            <p>{{ second_arrive_information.end_location }}</p>
                                        </div>
                                        <div class="flight gap-2 flex flex-col" v-if="show_data_travel2">
                                            <div class="row2">
                                                <p class="subtext">Flight number: </p>
                                                <p>{{ second_arrive_information.flight_number }}</p>
                                            </div>
                                            <div class="row2">
                                                <p class="subtext">Airline: </p>
                                                <p>{{ second_arrive_information.airline }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div class="lat grid gap-5" style="grid-template-rows: 3fr 1fr;">
                            <div class="travel flex rounded-lg gap-5 flex-col">
                                <div class="first-travel w-full h-full rounded-lg shadow ca">
                                    <p class="subtext flex justify-center items-center">personal Information</p>
                                    <div class="flex intra-layout flex-col ml-4 gap-3">
                                <div class="row">
                                    <p class="subtext">Name: </p>
                                    <p>{{ personal_information.name }}</p>
                                </div>
                                <div class="row">
                                    <p class="subtext">Last Name: </p>
                                    <p>{{ personal_information.last_name }}</p>
                                </div>
                                <div class="row">
                                    <p class="subtext">First tel: </p>
                                    <p>{{ personal_information.first_tel }}</p>
                                </div>
                                <div class="row">
                                    <p class="subtext">Second tel: </p>
                                    <p>{{ personal_information.second_tel }}</p>
                                </div>
                            </div>    
                                </div>
                            </div>
                            <div class="payment shadow rounded-lg">
                                <p class="subtext flex justify-center items-center">Total information</p>
                                <div class="flex intra-layout flex-col ml-4 gap-3">
                                    <div class="flex gap-4 justify-around">
                                        <div class="flex justify-center items-center gap-3">
                                            <p class="subtext">Pay in arrive</p>
                                            <input type="radio" checked disabled>
                                        </div>

                                        <div class="flex justify-center items-center gap-3">
                                            <p class="subtext link">Luxury SUV</p>
                                        </div>
                                        
                                    </div>
                                    <div class="flex gap-5">
                                        <p class="subtext">Total: </p>
                                        <p>$ {{ total_price }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-end items-center text-white gap-5">
                    <button @click="showModal = false">Close</button>
                    <button @click="validarCampos()">Confirm reserve</button>
                </div>
            </div>

        </div>
    </div>


    <div class="modal-message shadow-lg flex justify-center items-center"
     v-if="showMessage"
     :class="{ 'animation-in': showMessage, 'animation-out': showOutAnimation }">
  <div class="intra-layout flex-col text-center flex justify-center items-center">
    <h3 class="subtext">
        <span class="material-symbols-outlined">
            {{ ico }}
        </span>
    </h3>
    <p class="subtext">{{ modalMessage }}</p>
  </div>
</div>


<div class="grat-message text-center bg-white shadow-lg flex justify-center items-center"
    v-if="showGrats"
     :class="{ 'animation-pop-in': showMessage, 'animation-pop-out':showPopAnimation}">
     <div class="cookie-card flex justify-center items-center flex-col">
    <h1 class="title">⭐ Star Cabo Services</h1>
    <h2 class="w-full text-center">Tanks {{name}}!</h2>
    <p class="description">Thank you for choosing Star Cabo Transportation Services for your upcoming journey! 🌟 We're thrilled to have you on board.    
    </p>
    <div class="w-full flex justify-between mt-10">
        <h2 style="  font-weight: 600;
  color: rgb(31 41 55);" class="">Transporting Stars 🌟</h2>
        <button @click="showGrats = false" class="text-white">Go it</button>
    </div>

</div>
</div>

</template>


<style scoped>

.cookie-card {
  padding: 1rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 20px 20px 30px rgba(0, 0, 0, .05);
}

.title {
  font-weight: 600;
  color: rgb(31 41 55);
}

.description {
  margin-top: 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  width: 90%;
  color: rgb(75 85 99);
}

.description a {
  --tw-text-opacity: 1;
  color: rgb(59 130 246);
}

.description a:hover {
  -webkit-text-decoration-line: underline;
  text-decoration-line: underline;
}

.grat-message {
    position: absolute;
    top: 50%;
    left: 50%;
    width: auto;
    height: auto;
    transform: translate(-50%, -50%);
    z-index: 1000;
}

.modal-message {
    position: absolute;
    bottom: 3rem;
    left: 3rem;
    width:30%;
    height: 5rem;
    border-radius: 20px;
    background-color: white;
    z-index: 110;
}
.cont{
    width: 80%;
}
.animation-in{
    animation: animation-in 1s ease-in-out;
}

.animation-out{
    animation: animation-out 1s ease-in-out;
}

@keyframes animation-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1; 
    }
}

@keyframes animation-out{
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0; 
    }
}

.animation-pop-in{
    animation: animation-pop-in 1s ease-in-out;
}

.animation-pop-out{
    animation: animation-pop-out 1s ease-in-out;
}



@keyframes animation-pop-in{
    0%{
    transform: scale(1);
  }
  50%{
    transform: scale(1.4);
  }
  60%{
    transform: scale(1.1);
  }
  70%{
    transform: scale(1.2);
  }
  80%{
    transform: scale(1);
  }
  90%{
    transform: scale(1.1);
  }
  100%{
    transform: scale(1);
  }
}

@keyframes animation-pop-out{
    
}

.ca {
    display: grid;
    grid-template-rows: 1.5fr 4fr;
}

.row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e7e7e7;
    margin-bottom: 1rem;
    width: 97%;
}

.row2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e7e7e7;
    margin-bottom: 0.5rem;
    width: 97%;
}

@media only screen and (max-width: 768px) {
    .cont{
        width: 100%;
    }
}
</style>

<script setup>
import { onMounted, ref, watch } from 'vue'
import axios from 'axios'
import { hotelInformation } from '../stores/cunter';
const idHotelStore = hotelInformation();

const showModal = ref(false);
const showMessage = ref(false)
const showOutAnimation = ref(false);
const showGrats = ref(false)
const showPopAnimation = ref(false)
const ico = ref('close')
// one way

const travels = ref(''); 
const show_travel2 = ref(false);
const star_location = ref(''); 
const end_location = ref(''); 
const show_data_travel = ref(false);
const flight_number = ref(''); 
const airline = ref(''); 
const arrive_date = ref(''); 
const number_passengers = ref(''); 
const time = ref(''); 
const preInfo = ref([])
const total_price = ref('') 
const titleModal = ref('')
const modalMessage = ref('')
// roundtrip

const second_start_location = ref('');
const second_end_location = ref('');
const show_data_travel2 = ref(false);

const second_flight_number = ref('');
const second_airline = ref('');

// personal contact
const name = ref('') 
const last_name = ref('') 
const first_tel = ref('') 
const second_tel = ref('') 
const aditionals_comments = ref('') 


// peticiones 
const hotels = ref([])



// vistas

const vista1 = ref(true)
const vista2 = ref(false)


const arrive_information = ref({
    type_trip: travels.value,
    star_location: star_location.value,
    end_location: end_location.value,
    flight_number: flight_number.value,
    airline: airline.value,
    arrive_date: arrive_date.value,
    number_passengers: number_passengers.value,
    time: time.value,
})

const second_arrive_information = ref({
    star_location: second_start_location.value,
    end_location: second_end_location.value,
    flight_number: second_flight_number.value,
    airline: second_airline.value,
})

const personal_information = ref({
    name: name.value,
    last_name: last_name.value,
    first_tel: first_tel.value,
    second_tel: second_tel.value,
    aditionals_comments: aditionals_comments.value,
})


// functions

const show_travel = () => {
    travels.value == "Roundtrip" ? show_travel2.value = true : show_travel2.value = false;
}

const airport = () => {
    if (star_location.value == "Los Cabos International Airport (SJD)" ||
         end_location.value == "Los Cabos International Airport (SJD)") {
        show_data_travel.value = true;
    } else {
        show_data_travel.value = false;
    }
}

const airport_roundtrip = () => {
    if (second_start_location.value == "Los Cabos International Airport (SJD)" ||
         second_end_location.value == "Los Cabos International Airport (SJD)") {
        show_data_travel2.value = true;
    } else {
        show_data_travel2.value = false;
    }
}

const showMessageAndReturnFalse = (message) => {
    modalMessage.value = message;
    showMessage.value = true;
    setTimeout(() => {
        showOutAnimation.value = true;
        showPopAnimation.value = true;
        setTimeout(() => {
            showMessage.value = false;
            showOutAnimation.value = false;
            showPopAnimation.value = false;
        }, 1000);
    }, 3000);
    return false;
};

const validarCampos = () => {
    if (travels.value == '') {
        return showMessageAndReturnFalse('Trip type is required');
    }
    if (star_location.value == '') {
        return showMessageAndReturnFalse('Start location is required');
    }
    if (end_location.value == '') {
        return showMessageAndReturnFalse('End location is required');
    }
    if (arrive_date.value == '') {
        return showMessageAndReturnFalse('Arrive date is required');
    }
    if (number_passengers.value == '') {
        return showMessageAndReturnFalse('Number passengers is required');
    }
    if (time.value == '') {
        return showMessageAndReturnFalse('Time is required');
    }
    if (name.value == '') {
        return showMessageAndReturnFalse('Name is required');
    }
    if (last_name.value == '') {
        return showMessageAndReturnFalse('Last name is required');
    }
    if (first_tel.value == '') {
        return showMessageAndReturnFalse('First tel is required');
    }

    SendEmail();
};


// Peticiones1

const getHotels = async () => {
    const res = await axios.get('http://127.0.0.1:8000/hotels/name')
    hotels.value = res.data
}

const getTotal = async () => {
    const datas ={
        destine1: end_location.value,
        destine2: second_end_location.value
    }
    const res = await axios.post('http://127.0.0.1:8000/destines/pay', datas)
    total_price.value = res.data.price
}

const getInformacionById = async (id) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/hotels/id/${id}`);
        preInfo.value = response.data
        end_location.value = preInfo.value.name
    } catch (error) {
        console.error('Error fetching information by ID:', error);
        throw error;
    }
};


const SendEmail = async () => {
    try {
        const data = {
            arrive_information: {
                type_trip: travels.value,
                star_location: star_location.value,
                end_location: end_location.value,
                flight_number: flight_number.value,
                airline: airline.value,
                arrive_date: arrive_date.value,
                number_passengers: number_passengers.value,
                time: time.value,
            },
            second_arrive_information: {
                star_location: second_start_location.value,
                end_location: second_end_location.value,
                flight_number: second_flight_number.value,
                airline: second_airline.value,
            },
            personal_information: {
                name: name.value,
                last_name: last_name.value,
                first_tel: first_tel.value,
                second_tel: second_tel.value,
                aditionals_comments: aditionals_comments.value,
            },
        };

        await axios.post('http://127.0.0.1:8000/send-email', data);
        showGrats.value = true
    } catch (error) {
        console.error('Error al enviar el correo:', error);
    }
};



watch(
    [travels, star_location, end_location, flight_number, airline, arrive_date,
        second_start_location, second_end_location,
        second_flight_number, second_airline,  number_passengers, time
        , name, last_name, first_tel, second_tel, aditionals_comments], () => {

            arrive_information.value = {
                type_trip: travels.value,
                star_location: star_location.value,
                end_location: end_location.value,
                flight_number: flight_number.value,
                airline: airline.value,
                arrive_date: arrive_date.value,
                number_passengers: number_passengers.value,
                time: time.value,
            };

            second_arrive_information.value = {
                star_location: second_start_location.value,
                end_location: second_end_location.value,
                flight_number: second_flight_number.value,
                airline: second_airline.value,
            };

            personal_information.value = {
                name: name.value,
                last_name: last_name.value,
                first_tel: first_tel.value,
                second_tel: second_tel.value,
                aditionals_comments: aditionals_comments.value,
            };
            getTotal()
        });

const setDataHotel = () => {
    const idHotel = idHotelStore.var;
    if (idHotel !== '') {
        getInformacionById(idHotel);
    }
}

onMounted(() => {
    setDataHotel()
    getHotels()
})
</script>
