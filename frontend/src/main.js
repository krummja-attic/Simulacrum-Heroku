import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';

const app = createApp(App);

// Vue Router
app.use(router);

// Vuex
app.use(store);

// Vue-Axios
app.use(VueAxios, axios);
app.provide('axios', app.config.globalProperties.axios);

app.mount('#app');
