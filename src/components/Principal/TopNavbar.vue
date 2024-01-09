<template>
<nav >
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
  <a href="#" class="logo flex items-center space-x-3 rtl:space-x-reverse">
      <img src="../../assets/Img/logo.png" class="h-10" alt="Flowbite Logo" />
      
      <router-link :to="{name: 'Principal'}">
        <span class="self-center text-2xl font-semibold whitespace-nowrap text-black">Star Cabo</span>
      </router-link>
    
    </a>
  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse justify-center items-center md:gap-10">
    <div class="flex gap-5 number">
      <svg width="20px" height="20px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    
    <title>Whatsapp-color</title>
    <desc>Created with Sketch.</desc>
    <defs>

</defs>
    <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Color-" transform="translate(-700.000000, -360.000000)" fill="#67C15E">
            <path d="M723.993033,360 C710.762252,360 700,370.765287 700,383.999801 C700,389.248451 701.692661,394.116025 704.570026,398.066947 L701.579605,406.983798 L710.804449,404.035539 C714.598605,406.546975 719.126434,408 724.006967,408 C737.237748,408 748,397.234315 748,384.000199 C748,370.765685 737.237748,360.000398 724.006967,360.000398 L723.993033,360.000398 L723.993033,360 Z M717.29285,372.190836 C716.827488,371.07628 716.474784,371.034071 715.769774,371.005401 C715.529728,370.991464 715.262214,370.977527 714.96564,370.977527 C714.04845,370.977527 713.089462,371.245514 712.511043,371.838033 C711.806033,372.557577 710.056843,374.23638 710.056843,377.679202 C710.056843,381.122023 712.567571,384.451756 712.905944,384.917648 C713.258648,385.382743 717.800808,392.55031 724.853297,395.471492 C730.368379,397.757149 732.00491,397.545307 733.260074,397.27732 C735.093658,396.882308 737.393002,395.527239 737.971421,393.891043 C738.54984,392.25405 738.54984,390.857171 738.380255,390.560912 C738.211068,390.264652 737.745308,390.095816 737.040298,389.742615 C736.335288,389.389811 732.90737,387.696673 732.25849,387.470894 C731.623543,387.231179 731.017259,387.315995 730.537963,387.99333 C729.860819,388.938653 729.198006,389.89831 728.661785,390.476494 C728.238619,390.928051 727.547144,390.984595 726.969123,390.744481 C726.193254,390.420348 724.021298,389.657798 721.340985,387.273388 C719.267356,385.42535 717.856938,383.125756 717.448104,382.434484 C717.038871,381.729275 717.405907,381.319529 717.729948,380.938852 C718.082653,380.501232 718.421026,380.191036 718.77373,379.781688 C719.126434,379.372738 719.323884,379.160897 719.549599,378.681068 C719.789645,378.215575 719.62006,377.735746 719.450874,377.382942 C719.281687,377.030139 717.871269,373.587317 717.29285,372.190836 Z" id="Whatsapp">

</path>
        </g>
    </g>
</svg>
    <p>624 122 6386</p>
    </div>
    <router-link :to="{name: 'GetService'}">
      <button type="button" class="bt text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center ">Get Services</button>
    </router-link>
      <button  @click="toggle_mobile" data-collapse-toggle="navbar-cta"  type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false" >
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
      <li>
        <router-link :to="{name: 'Principal'}">
          <a href="#" class="check block py-2 px-3 md:p-0 text-white  rounded md:bg-transparent" aria-current="page">Home</a>
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'destinations'}">
        <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Destinations</a>
      </router-link>
      </li>
      <li>
        <router-link :to="{name: 'AboutUs'}">
          <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About Us</a>        
        </router-link>
      </li>
    </ul>
  </div>
  </div>
</nav>

<div class="nav-mobile flex flex-col items-end" v-show="show_mobile" :class="{ 'transicion-in': show_in, 'transicion-out': show_out }">
    <ul class="nav-list flex flex-col items-end gap-5 p-3">
      <li class="nav-item">
        <router-link :to="{name: 'Principal'}">
          <a class="nav-link">Home</a>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{name: 'destinations'}">
          <a class="nav-link">Destinations</a>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{name: 'AboutUs'}">
          <a class="nav-link">About Us</a>
        </router-link>
      </li>
    </ul>
  </div>


</template>

<script setup>
import {ref} from 'vue'
const show_mobile = ref(false)
const toggle_animation = ref(false)
const show_out = ref(false)
const show_in = ref(false)

const toggle_mobile = () => {
  toggle_animation.value = !toggle_animation.value;

  if (show_mobile.value) {
    show_out.value = true;

    setTimeout(() => {
      show_out.value = false;
      show_mobile.value = false;
    }, 300);
  } else {
    show_mobile.value = true;

    setTimeout(() => {
      show_in.value = false;
    }, 310);
  }
};

</script>

<style scoped>

.nav-mobile{
  position: fixed;
  top: 4.6rem;
  left: 0;
  width: 100%;
}
.transicion-in{
  animation: slideIn 0.3s ease-out;
}

.transicion-out{
  animation: slideOut 0.3s ease-out;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slideOut {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}


.nav-list{
  width: 26%;
  border-radius: 20px 0px 0px 20px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.4);

}
.bt {
  background-color: black;
  border: none;
  transition: background-color 0.3s ease;
}

.bt:hover {
  background-color: white;
  color: black;
  border: 1px solid black;
}

a {
  transition: color 0.6s ease; 
  color: black;
}

a:hover {
  color: black;
}

.check {
  color: black;
}

nav{
  background-color: white;
  position: fixed;
  width: 100%;
  z-index: 1000;
  border-radius: 0px 0px 20px 20px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
}

@media screen and (max-width: 767px) {
  .number{
    display: none;
  }

}
</style>