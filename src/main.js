import { createApp } from 'vue'
import App from './App.vue'
import store from './store';
import '@mdi/font/css/materialdesignicons.css';


createApp(App).use(store).mount('#app')
