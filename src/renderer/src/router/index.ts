import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@renderer/views/home/HomeView.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@renderer/views/login/LoginView.vue'),
    meta: {
      layout: false,
    },
  },
];
const router = createRouter({
  history: createWebHistory('/'),
  routes,
});
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const baiduAccessToken = localStorage.getItem('baiduAccessToken');
    if (!baiduAccessToken) {
      return { name: 'login' };
    }
    return true;
  }
  return true;
});
export default router;
