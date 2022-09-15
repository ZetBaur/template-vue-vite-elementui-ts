import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import './assets/main.css';

/* these are necessary styles for vue flow */
import '@braks/vue-flow/dist/style.css';

/* this contains the default theme, these are optional styles */
import '@braks/vue-flow/dist/theme-default.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus);

app.mount('#app');

// console.log(import.meta.env);
