import * as VueRouter from 'vue-router';
import Home from '../views/Home';
import About from '../views/About';
import Blog from '../views/Blog';
import Projects from '../views/Projects';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/blog',
        name: 'blog',
        component: Blog
    },
    {
        path: '/projects',
        name: 'projects',
        component: Projects
    },
    {
        path: '/about',
        name: 'about',
        component: About
    }
];

const router = new VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
});

export default router;
