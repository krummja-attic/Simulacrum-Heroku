import * as VueRouter from 'vue-router';
import HomeView from '../views/HomeView';
import AboutView from '../views/AboutView';
import GardenView from '../views/GardenView';
import ProjectsView from '../views/ProjectsView';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/garden',
        name: 'garden',
        component: GardenView,
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
    },
    {
        path: '/admin',
        redirect: () => {
            return { path: '/api/admin' }
        }
    }
];

const router = new VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
});

export default router;
