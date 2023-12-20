<template>
  <div class="shadow-xl grid grid-cols-1 grid-rows-3">
    <figure class="img" :style="{ backgroundImage: `url('${img}')` }"></figure>
    <div class="card-body ">
      <h2 class="card-title">
        {{ title }}
      </h2>
    </div>
  </div>
</template>

<script setup>
  import {defineProps} from 'vue'
  const props = defineProps({
    img: String,
    title: String
  })
</script>


<style scoped>
.img {
  height: auto; 
  width: 100%;
  background-size: cover;
  background-position: center;
}

.card-body {
  padding: 10px;
}

.card-title {
  margin: 0;
}

.grid-rows-3{
  grid-template-rows: 2fr 1fr;
}
</style>
