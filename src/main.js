import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'  
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '/src/router/index.js'


const router = createRouter({
  history: createWebHistory(),
  routes,
})

const pinia = createPinia();

const app = createApp(App)
app.use(router)
app.use(pinia);

app.mount('#app')

