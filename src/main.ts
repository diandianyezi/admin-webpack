// import { str } from '@/add.ts';
// console.info(str);

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import '@/style.css';

import App from '@/App.vue';
import router from '@/routes';

createApp(App).use(router).use(createPinia()).mount("#app")   