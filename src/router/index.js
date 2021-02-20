import { createRouter, createWebHistory } from '@ionic/vue-router';
//import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'
import Issue from '../views/Issue'


const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },

    {
        path: '/Issue',
        name: 'Issue',
        component: Issue,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router