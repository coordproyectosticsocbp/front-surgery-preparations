import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './assets/main.css'

import { createSSRApp } from 'vue'
import App from './App.vue'
import router from './router'

 //Import Axios and VueAxios
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createSSRApp(App)

app.use(router)
app.use(VueAxios, axios)

app.mount('#app')
