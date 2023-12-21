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
            <buttonComp text="Get Services"/>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
        <img
          alt="Student"
          src="https://images.unsplash.com/photo-1621274790572-7c32596bc67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
          class="h-40 w-full object-cover sm:h-56 md:h-full"
        />

        <img
          alt="Student"
          src="https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          class="h-40 w-full object-cover sm:h-56 md:h-full"
        />
      </div>
    </div>
  </div>
</section>
</template>

<script setup>
import buttonComp from "../controllers/btOrange.vue"
</script>