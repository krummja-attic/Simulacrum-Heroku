import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
// import { createPinia } from 'pinia';
import axios from 'axios';
// import VueAxios from 'vue-axios';

import '@unocss/reset/tailwind.css';
import 'uno.css';

import router from './router';

import App from './App.vue';


// App
const app = createApp(App);

// Router
app.use(router);

// Axios
// app.use(VueAxios, axios);
// app.provide('axios', app.config.globalProperties.axios);

// Pinia
// const pinia = createPinia();
// app.use(pinia);

// Head
const head = createHead();
app.use(head);


app.mount('#app');
