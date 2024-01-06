<template>
    <footer style="background-color: #f5f4ed;">
  <div class="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="flex justify-center text-teal-600">
      <img class="h-20" src="../../assets/Img/logo.png" alt="">
    </div>

    <p class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
      Star Cabo <br>
      live the best adventure in star cabo services. <br>
hotel - airport⭐
Airports- hotel⭐
Activities⭐
dinners⭐
    </p>

    <ul class="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
      <li>
        <router-link :to="{name: 'AboutUs'}">
          <a class="text-gray-700 transition hover:text-gray-700/75" > About Us</a>
        </router-link>
      </li>

      <li>
        <router-link :to="{name: 'GetService'}">
          <a class="text-gray-700 transition hover:text-gray-700/75" > Reserve </a>
      </router-link>
      </li>

      <li>
        <router-link :to="{name: 'GetService'}">
          <a class="text-gray-700 transition hover:text-gray-700/75"> Destiness </a>
        </router-link>
      </li>
    </ul>
    <ul class="flex justify-center items-center gap-20 mt-10">
      <li>
        <div class="flex gap-5 number">
      <span class="material-symbols-outlined">
call
</span>
    <p>624 122 6386</p>
    </div>
      </li>

      <li>
        <div class="flex gap-5 number">
      <span class="material-symbols-outlined">
mail
</span>
    <p>Starcabo21@gmail.com</p>
    </div>
      </li>
      
    </ul>

    <ul class="mt-12 flex justify-center gap-6 md:gap-8">
      <li>
        <a
        href="https://www.facebook.com/profile.php?id=100091885013064" 
          rel="noreferrer"
          target="_blank"
          class="text-gray-700 transition hover:text-gray-700/75"
        >
          <span class="sr-only">Facebook</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill-rule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </li>
    </ul>
  </div>
</footer>
</template>