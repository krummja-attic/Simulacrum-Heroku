import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';

import '@unocss/reset/tailwind.css';
import 'uno.css';

import generatedRoutes from 'virtual:generated-pages';
import { setupLayouts } from 'virtual:generated-layouts';

import App from './App.vue';


// App
const app = createApp(App);

// Axios
app.use(VueAxios, axios);
app.provide('axios', app.config.globalProperties.axios);

// Pinia
const pinia = createPinia();
app.use(pinia);

// Head
const head = createHead();
app.use(head);

// Router
const routes = setupLayouts(generatedRoutes);
const router = createRouter({
  history: createWebHistory(),
  routes,
});
app.use(router);


app.mount('#app');
