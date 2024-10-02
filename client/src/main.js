import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia';
import router from './common/router/router'
import './assets/styles.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';


const pinia = createPinia();

createApp(App)
.use(router)
.use(pinia)
.mount('#app')
