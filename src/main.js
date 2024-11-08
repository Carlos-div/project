import './assets/main.css'

import { createApp } from 'vue'
import AOS from 'aos';
import App from './App.vue'
import 'aos/dist/aos.css';
import router from './router'
import './index.css'

AOS.init({ duration: 1200, 
    easing: 'ease-in', 
     once: false, 
})


const app = createApp(App)

app.use(router)

app.mount('#app')
