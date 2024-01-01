<template>
    <section>
  <div class="mx-auto max-w-screen px-4 ">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div class="p-8 md:p-12 lg:px-16 lg:py-24" style="background-color: #312e1b;">
        <div class="mx-auto max-w-xl h-full flex flex-col justify-center">
          <h2 class="text-2xl font-bold text-white md:text-3xl text-left">
            Let’s explore the beauty of Los Cabos
          </h2>

          <p class="hidden text-white/90 sm:mt-4 sm:block text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus 
          </p>

          <div class="mt-4 md:mt-8 flex">
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
        <div class="img1 h-full w-full flex justify-center items-center">
          <img
          alt="Student"

          
          
          src="../../assets/Img/fotos/palm.webp"
          class="sm:h-80 object-cover "
        />
        </div>
        <div class="img1 h-full w-full  flex justify-center items-center">
        <img
          alt="Student"
          src="../../assets/Img/fotos/persona.webp"
          class=" sm:h-80 object-cover"
        />
      </div>
      </div>
    </div>
  </div>
</section>
</template>

<script setup>
import axios from 'axios'
import { onMounted, ref } from "vue";

const hotelData = ref({
  name: "",
  location: "",
  cellphone: "",
  rating: 0,
  website: "",
  is_open: false,
  image: ""
});

const getData = async () => {
    const response = await axios.get('http://192.168.1.11:8000/info/hotel/ChIJ10lh6Pg1r4YRrvtcw6IZmu4');
    hotelData.value = response.data;
};

</script>


<style scoped>
.img1{
  background-color: #575130;
}
</style>