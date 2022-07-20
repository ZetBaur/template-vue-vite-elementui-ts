import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import './assets/main.css';

// import ru from 'element-plus/es/locale/lang/ru';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus);
// app.use(ElementPlus, {
//     locale: ru
// });

app.mount('#app');

console.log(import.meta.env);
