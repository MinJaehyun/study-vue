// vue-router 라이브러리 { createWebHistory, createRouter } 사용
import { createWebHistory, createRouter } from 'vue-router';

// routes 설정
const routes = [
  {
    // path: '/',
    // redirect: '/main',
    // component: MainPage,
    // component: () => import('@/pages/MainPage'),
  },
  {
    path: '/todolist',
    component: () => import('@/pages/todolist'),
  },
  {
    path: '/:anything(.*)',
    component: () => import('@/pages/PageNotFound.vue'),
  },
];

//  위에 설정한 routes 경로 가져와서 라이브러리 적용
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
