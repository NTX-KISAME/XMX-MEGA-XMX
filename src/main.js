import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bulma/bulma.sass'

createApp(App).use(store).use(router).mount('#Natsu')
