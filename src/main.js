import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

window.$ = window.jQuery = require("jquery");

const app = createApp(App)
app.use(router)
app.mount("#app")