import { createApp } from 'vue'
import App from './App.vue'
import { createWebHashHistory, createRouter } from 'vue-router'
import Hellow from './components/Hellow2.vue'
import test from './components/tese2.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [{ path: '/', component: Hellow },
    { path: '/xxx', component: test }]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
