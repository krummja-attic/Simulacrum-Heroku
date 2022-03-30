
import * as VueRouter from 'vue-router';
import Home from '../views/Home';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue')
    }
];

const router = new VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

export default router;
