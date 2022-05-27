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
import ForTest3 from '@/components/study/220526/ForTest3.vue';
import TableTest from '@/components/study/220526/TableTest.vue';
import ForTest5 from '@/components/study/220526/ForTest5.vue';
import ForTest6 from '@/components/study/220526/ForTest6.vue';
import ForTest7 from '@/components/study/220526/ForTest7.vue';
import Chapter6Test from '@/components/study/220526/Chapter6Test.vue';
import CallByVal from '@/components/study/220527/CallByVal.vue';
import CallByRef from '@/components/study/220527/CallByRef.vue';

// routes 설정
const routes = [
  {
    path: '/callbyref',
    component: CallByRef,
  },
  {
    path: '/callbyval',
    component: CallByVal,
  },
  {
    path: '/chapter6test',
    component: Chapter6Test,
  },
  {
    path: '/fortest7',
    component: ForTest7,
  },
  {
    path: '/fortest6',
    component: ForTest6,
  },
  {
    path: '/fortest5',
    component: ForTest5,
  },
  {
    path: '/tabletest',
    component: TableTest,
  },
  {
    path: '/fortest3',
    component: ForTest3,
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
