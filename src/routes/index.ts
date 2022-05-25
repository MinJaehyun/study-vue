// vue-router 라이브러리 { createWebHistory, createRouter } 사용
import { createWebHistory, createRouter, RouterOptions } from 'vue-router';
import TodoList from '@/pages/TodoList.vue';
import PageNotFound from '@/pages/PageNotFound.vue';
import TodoInput from '@/pages/TodoInputPage.vue';
import TodoPage from '@/pages/TodoPage.vue';
import Mixin from '@/components/study/mixin/test.vue';
import Vuex from '@/components/study/vuex/test.vue';
import ModelTest from '@/components/study/220525/ModelTest.vue';
import ModelTest9 from '@/components/study/220525/ModelTest9.vue';
import ModelTest10 from '@/components/study/220525/ModelTest10~11.vue';
import Chapter4Test from '@/components/study/220525/Chapter4Test.vue';
import OneTest2 from '@/components/study/220525/OneTest2.vue';
import OneTest3 from '@/components/study/220525/OneTest3~4.vue';
import Test from '@/components/study/220525/test.vue';
import IfTest1 from '@/components/study/220525/IfTest1.vue';
import ForeTest1 from '@/components/study/220525/ForeTest1.vue';
import ForeTest3 from '@/components/study/220525/ForeTest3.vue';

// routes 설정
const routes = [
  {
    path: '/foretest3',
    component: ForeTest3,
  },
  {
    path: '/foretest1',
    component: ForeTest1,
  },
  {
    path: '/iftest1',
    component: IfTest1,
  },
  {
    path: '/test',
    component: Test,
  },
  {
    path: '/onetest3~4',
    component: OneTest3,
  },
  {
    path: '/onetest2',
    component: OneTest2,
  },
  {
    path: '/chapter4test',
    component: Chapter4Test,
  },
  {
    path: '/ModelTest10~11',
    component: ModelTest10,
  },
  {
    path: '/ModelTest9',
    component: ModelTest9,
  },
  {
    path: '/ModelTest',
    component: ModelTest,
  },
  {
    path: '/vuex',
    component: Vuex,
  },
  {
    path: '/mixin',
    component: Mixin,
  },
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
