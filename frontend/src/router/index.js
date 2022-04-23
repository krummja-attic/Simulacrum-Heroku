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
        meta: { transition: 'slide-right' }
    },
    {
        path: '/blog',
        name: 'blog',
        component: BlogView,
        meta: { transition: 'slide-right' }
    },
    {
        path: '/projects',
        name: 'projects',
        component: ProjectsView,
        meta: { transition: 'slide-right' }
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView,
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
