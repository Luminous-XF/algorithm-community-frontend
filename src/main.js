import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from "./router/index.js";
import '@/assets/css/common-layout.css';
import '@/assets/css/problem-set.css';
import '@/assets/css/login.css';
import '@icon-park/vue-next/styles/index.css';

createApp(App).use(router).mount('#app')
