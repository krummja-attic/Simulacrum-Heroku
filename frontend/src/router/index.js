import * as VueRouter from 'vue-router';
import generatedRoutes from 'virtual:generated-pages';
import { setupLayouts } from 'virtual:generated-layouts';
const routes = setupLayouts(generatedRoutes);

const router = new VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

export default router;
