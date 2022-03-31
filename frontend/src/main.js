import Vue from 'vue';
// import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// const app = createApp(App);
const app = Vue.createApp(App);
app.use(router);
app.mount('#app');
