
import * as VueRouter from 'vue-router';
import Home from '../views/Home';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    }
];

const router = new VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

export default router;
