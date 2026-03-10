import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createNotivue } from "notivue";
import { PiniaColada } from '@pinia/colada'

import App from './App.vue'
import router from './router'

import 'notivue/notification.css'
import 'notivue/animations.css'

const notivue = createNotivue()
const app = createApp(App)

const pinia = createPinia()
app.use(pinia)
app.use(notivue)
app.use(PiniaColada, {
  queryOptions: {
    staleTime: 300_000,
  },
})
app.use(router)

app.mount('#app')
