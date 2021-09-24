import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import element from 'element-plus'
import 'element-plus/dist/index.css'
import cookie from 'js-cookie'




const app = createApp(App)
app.use(router)
app.use(store)
app.use(element)
app.config.globalProperties.$cookie = cookie

app.mount('#app')
