import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';

const app = createApp(App);

app.use(VueAxios, axios);
app.provide('axios', app.config.globalProperties.axios);

app.use(router);
app.use(store);
app.mount('#app');
