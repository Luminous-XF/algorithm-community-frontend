import {createApp} from 'vue';
import './style.css';
import App from './App.vue';
import router from './router/index.js';
import '@/assets/css/font.css';
import '@/assets/css/common-layout.css';
import '@icon-park/vue-next/styles/index.css';

createApp(App)
    .use(router)
    .mount('#app');