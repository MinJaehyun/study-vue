// vue-router 라이브러리 { createWebHistory, createRouter } 사용
import { createWebHistory, createRouter, RouterOptions } from 'vue-router';
import TodoList from '@/pages/TodoList.vue';
import PageNotFound from '@/pages/PageNotFound.vue';
import TodoInput from '@/pages/TodoInputPage.vue';
import TodoPage from '@/pages/TodoPage.vue';

// routes 설정
const routes = [
  {
    path: '/todo/:id',
    name: 'todo',
    component: TodoPage,
  },
  {
    path: '/todoinput',
    component: TodoInput,
  },
  {
    path: '/todolist',
    component: TodoList,
  },
  {
    path: '/:anything(.*)',
    component: PageNotFound,
  },
];

//  위에 설정한 routes 경로 가져와서 라이브러리 적용
const router = createRouter(<RouterOptions>{
  history: createWebHistory(),
  routes,
});

export default router;
