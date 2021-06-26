import {
    createWebHistory,
    createRouter
} from 'vue-router'

import Home from '@/views/Home'
import NotFound from '@/views/NotFound'
const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/:catchAll(.*)',
        component: NotFound,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;