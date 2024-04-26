import { createApp } from 'vue'
import App from './App.vue'
import VueSplide from '@splidejs/vue-splide';
import router from './router'
import store from './store'

createApp(App).use(VueSplide).use(store).use(router).mount('#app')
