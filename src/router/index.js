import * as VueRouter from 'vue-router';

import routes from '~pages';
const router = new VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

export default router;
