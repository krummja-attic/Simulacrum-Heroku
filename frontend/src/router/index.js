import * as VueRouter from 'vue-router';
import HomeView from '../views/HomeView';
import AboutView from '../views/AboutView';
import BlogView from '../views/BlogView';
import ProjectsView from '../views/ProjectsView';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/blog',
        name: 'blog',
        component: BlogView,
    },
    {
        path: '/projects',
        name: 'projects',
        component: ProjectsView,
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView,
    }
];

const router = new VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
});

export default router;
