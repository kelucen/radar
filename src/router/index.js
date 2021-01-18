import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Equipments from '../components/Equipments.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/equipamentos',
        name: 'Equipments',
        component: Equipments
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router