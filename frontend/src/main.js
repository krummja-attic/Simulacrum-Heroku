import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';

import App from './App.vue';
import '@unocss/reset/tailwind.css';
import 'uno.css';

import generatedRoutes from 'virtual:generated-pages';
import { setupLayouts } from 'virtual:generated-layouts';


// App
const app = createApp(App);

// Axios
app.use(VueAxios, axios);
app.provide('axios', app.config.globalProperties.axios);

// Head
const head = createHead();
app.use(head);

// Pinia
const pinia = createPinia();
app.use(pinia);

// Router
const routes = setupLayouts(generatedRoutes);
const router = createRouter({
  history: createWebHistory(),
  routes,
});
app.use(router);


app.mount('#app');
