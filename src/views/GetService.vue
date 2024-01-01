
<style scoped>
form {
    width: 97%;
    height: 95%;

}

.form-section {
    grid-template-rows: 5fr 1.4fr;
}

.contenido {
    position: absolute;
    height: 100%;
    width: 100%;
}

.img-back {
    position: relative;
    z-index: 0;
    background-image: url('../assets/Img/fotos/back.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
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
</style>


<template>
    <div class="contenido bg-black flex justify-center items-center">
        <div class="body-contain w-full h-full grid grid-cols-2 mt-10">
            <section>
                <div class="img w-full h-full">
                    <div class="img-back"></div>
                </div>
            </section>
            <section class="bg-white grid form-section">
                <div class="contenido-form h-full w-full flex justify-center items-center">
                        <section v-if="vista1" class="w-full h-full arrive-information flex justify-center items-center">
                            <div class="layout intra-layout flex flex-col gap-10">
                                <div class="mt-5 bg-white rounded-lg shadow">
                                    <div class="flex">
                                        <div class="flex-1 py-5 pl-5 overflow-hidden gap-5">
                                            <span class="material-symbols-outlined">
                                                no_crash
                                            </span>
                                            <h1 class="ml-5 inline text-2xl font-semibold leading-none">Arrive Information
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
                                                    <option value="Aeropuerto Internacional de Los Cabos">Aeropuerto
                                                        Internacional de Los Cabos</option>
                                                    <option v-for="hotel in hotels" :key="hotel" :value="hotel">{{ hotel }}
                                                    </option>
                                                </select>
                                            </div>
                                            <div class="flex-grow">
                                                <select name="" id="" @change="airport" v-model="end_location"
                                                    class="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base
                                                    transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  ">
                                                    <option value="" disabled selected>End location</option>
                                                    <option value="Aeropuerto Internacional de Los Cabos">Aeropuerto
                                                        Internacional de Los Cabos</option>
                                                    <option v-for="hotel in hotels" :key="hotel" :value="hotel">{{ hotel }}
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
                                                    <input type="number" placeholder="# passengers" v-model="number_passengers"
                                                class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  ">

                                                <input type="time" placeholder="" v-model="time"
                                                class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  ">
                                                
                                                </div>
                                    </div>
                                </div>

                                <!-- SECOND ARRIVE INFORMATION -->

                                <div class="mt-5 bg-white rounded-lg shadow" v-if="show_travel2">
                                    <div class="flex">
                                        <div class="flex-1 py-5 pl-5 overflow-hidden gap-5">
                                            <span class="material-symbols-outlined">
                                                no_crash
                                            </span>
                                            <h1 class="ml-5 inline text-2xl font-semibold leading-none">Second Arrive
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
                                                    <option value="Aeropuerto Internacional de Los Cabos">Aeropuerto
                                                        Internacional de Los Cabos</option>
                                                    <option v-for="hotel in hotels" :key="hotel" :value="hotel">{{ hotel }}
                                                    </option>
                                                </select>
                                            </div>
                                            <div class="flex-grow">
                                                <select name="" id="" @change="airport_roundtrip"
                                                    v-model="second_end_location"
                                                    class="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base
                                                    transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  ">
                                                    <option value="" disabled selected>End location</option>
                                                    <option value="Aeropuerto Internacional de Los Cabos">Aeropuerto
                                                        Internacional de Los Cabos</option>
                                                    <option v-for="hotel in hotels" :key="hotel" :value="hotel">{{ hotel }}
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="flex gap-2">
                                            <input placeholder="Flight number" v-if="show_data_travel2"
                                                v-model="second_flight_number"
                                                class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  ">

                                            <input placeholder="Airline" v-if="show_data_travel2" v-model="second_airline"
                                                class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  ">

                                            <input type="date" placeholder="Arrive date" v-model="second_arrive_date"
                                                class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  ">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section v-if="vista2" class="w-full h-full personal-information flex flex-col justify-center items-center">
                            <div class="layout intra-layout flex flex-col gap-10">
                                <div class="mt-5 bg-white rounded-lg shadow">
                                    <div class="flex">
                                        <div class="flex-1 py-5 pl-5 overflow-hidden gap-5">
                                            <span class="material-symbols-outlined">
                                                person
                                            </span>
                                            <h1 class="ml-5 inline text-2xl font-semibold leading-none">Contact Information
                                            </h1>
                                        </div>
                                    </div>
                                    <div class="px-5 pb-5">
                                        <div class="flex gap-2">
                                            <input 
                                            placeholder="Name"
                                            v-model="name"
                                            class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  ">
                                            
                                            <input 
                                            placeholder="Last name"
                                            v-model="last_name"
                                            class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  ">
                                        
                                        </div>

                                        <div class="flex">
                                            <div class=" pr-2">
                                                <input 
                                                v-model="first_tel"
                                                placeholder="First Tel"
                                                class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  ">
                                            </div>
                                            <div class="">
                                                <input 
                                                v-model="second_tel"
                                                placeholder="Second Tel"
                                                class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  ">
                                            </div>
                                        </div>
                                        <div class="text mt-10">
                                            <p>Aditionals comments</p>
                                        <textarea 
                                        v-model="aditionals_comments"
                                        name="comments" 
                                        id="comments" 
                                        cols="30" 
                                        rows="10" 
                                        class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200">
                                    </textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section v-if="vista3"  
                        class="w-full h-full tiket-information">
                            <div class="layout rounded-lg shadow intra-layout flex flex-col gap-10">
                                <div class="mt-5 h-full w-full grid" style="grid-template-rows: 4fr 1fr;">
                                    <div class="flex">
                                        <h2>Tiket information</h2>
                                    </div>
                                    <div class="confirmar flex justify-end items-center ">
                                        <button class="bg-gray-200 px-5 py-2 rounded-lg">Confirmar reserva</button>                                  
                                    </div>
                                </div>
                            </div>
                        </section>
                </div>
                <div class="navegation-controllers">
                    <div class="flex justify-center items-center">
                        <div class="flex gap-5">
                            <button @click="vista1 = true, vista2 = false, vista3 = false" class="bg-gray-200 px-5 py-2 rounded-lg">1</button>
                            <button @click="vista1 = false, vista2 = true, vista3 = false" class="bg-gray-200 px-5 py-2 rounded-lg">2</button>
                            <button @click="vista1 = false, vista2 = false, vista3 = true" class="bg-gray-200 px-5 py-2 rounded-lg">3</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import axios from 'axios'
import { hotelInformation } from '../stores/cunter';
const idHotelStore = hotelInformation(); 
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
// roundtrip

const second_start_location = ref('');
const second_end_location = ref('');
const show_data_travel2 = ref(false);

const second_flight_number = ref('');
const second_airline = ref('');
const second_arrive_date = ref('');

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
const vista3 = ref(false)


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
    arrive_date: second_arrive_date.value,
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
    if (star_location.value == "Aeropuerto Internacional de Los Cabos" || end_location.value == "Aeropuerto Internacional de Los Cabos") {
        show_data_travel.value = true;
    } else {
        show_data_travel.value = false;
    }
}

const airport_roundtrip = () => {
    if (second_start_location.value == "Aeropuerto Internacional de Los Cabos" || second_end_location.value == "Aeropuerto Internacional de Los Cabos") {
        show_data_travel2.value = true;
    } else {
        show_data_travel2.value = false;
    }
}


// Peticiones1

const getHotels = async () => {
    const res = await axios.get('http://127.0.0.1:8000/hotels/name')
    hotels.value = res.data
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
                arrive_date: second_arrive_date.value,
            },
            personal_information: {
                name: name.value,
                last_name: last_name.value,
                first_tel: first_tel.value,
                second_tel: second_tel.value,
                aditionals_comments: aditionals_comments.value,
            },
        };

        const res = await axios.post('http://127.0.0.1:8000/send-email', data);
        console.log(res.data);
    } catch (error) {
        console.error('Error al enviar el correo:', error);
    }
};



watch(
    [travels, star_location, end_location, flight_number, airline, arrive_date, 
    second_start_location, second_end_location, 
    second_flight_number, second_airline, second_arrive_date, number_passengers, time
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
        arrive_date: second_arrive_date.value,
    };

    personal_information.value = {
        name: name.value,
        last_name: last_name.value,
        first_tel: first_tel.value,
        second_tel: second_tel.value,
        aditionals_comments: aditionals_comments.value,
    };
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
