
import { createApp } from 'vue'

import {createHead} from '@vueuse/head'
import App from './App.vue'
import router from './router'
import 'jquery'


const head = createHead();


// swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// css
import "./assets/css/all.min.css"
import "./assets/css/bootstrap.min.css"
import "./assets/css/locomotive-scroll.min.css"
import "./assets/css/meanmenu.min.css"
 import "./assets/css/progressbar.css"
import "./assets/css/swiper-bundle.min.css"
import "./assets/css/master.css"

// scss
// import "./assets/scss/master.css"


// Vue.use(Vuelidate)
createApp(App).use(head).use(router).mount('#app');
