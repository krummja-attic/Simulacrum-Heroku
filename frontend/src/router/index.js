import * as VueRouter from 'vue-router';
import Home from '../views/Home';
import About from '../views/About';
import Blog from '../views/Blog';
import Projects from '../views/Projects';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: { transition: 'slide-right' }
    },
    {
        path: '/blog',
        name: 'blog',
        component: Blog,
        meta: { transition: 'slide-right' }
    },
    {
        path: '/projects',
        name: 'projects',
        component: Projects,
        meta: { transition: 'slide-right' }
    },
    {
        path: '/about',
        name: 'about',
        component: About,
        meta: { transition: 'slide-right' }
    }
];

const router = new VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
});

// router.beforeEach((to, from) => {
//     console.log(to);
// });

export default router;
