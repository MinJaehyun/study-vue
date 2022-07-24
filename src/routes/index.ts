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
import ForeTest1 from '@/components/study/220525/ForTest1.vue';
import ForTest3 from '@/components/study/220526/ForTest3.vue';
import TableTest from '@/components/study/220526/TableTest.vue';
import ForTest5 from '@/components/study/220526/ForTest5.vue';
import ForTest6 from '@/components/study/220526/ForTest6.vue';
import ForTest7 from '@/components/study/220526/ForTest7.vue';
import Chapter6Test from '@/components/study/220527/Chapter6Test.vue';
import ComputedTest2 from '@/components/study/220527/ComputedTest2.vue';
import ComputedTest3 from '@/components/study/220527/ComputedTest3.vue';
import ComputedTest4 from '@/components/study/220527/ComputedTest4.vue';
import ReComputedTest4 from '@/components/study/220527/ReComputedTest4.vue';
import ComputedTest5 from '@/components/study/220527/ComputedTest5.vue';
import WatchTest1 from '@/components/study/220528/WatchTest1.vue';
import WatchTest2 from '@/components/study/220528/WatchTest2.vue';
import TransTest1 from '@/components/study/220528/TransTest1.vue';
import TransTest2 from '@/components/study/220528/TransTest2.vue';
import ShuffleTest from '@/components/study/220528/ShuffleTest.vue';
import TransTest3 from '@/components/study/220528/TransTest3.vue';
import Chapter10 from '@/components/study/220530/Chapter10.vue';
import TodoList1 from '@/components/study/220530/TodoList1.vue';
import TodoList2 from '@/components/study/220530/TodoList2.vue';
import TestTodoList from '@/components/study/220531/TestTodoList.vue';
import CompTest1 from '@/components/study/220531/CompTest1.vue';
import Chapter12 from '@/components/study/220531/Chapter12.vue';
import JsonLoadVue from '@/components/study/220602/JsonLoadVue.vue';
import JsonTest1 from '@/components/study/220602/JsonTest1.vue';
import OxQuiz from '@/components/study/220602/OxQuiz.vue';
import EasyBoardPage from '@/pages/EasyBoardPage.vue';

// routes 설정
const routes: any = [
  {
    path: '/easyboard',
    component: EasyBoardPage,
  },
  {
    path: '/oxquiz',
    component: OxQuiz,
  },
  {
    path: '/jsontest1',
    component: JsonTest1,
  },
  {
    path: '/jsonloadvue',
    component: JsonLoadVue,
  },
  {
    path: '/chapter12',
    component: Chapter12,
  },
  {
    path: '/chapter12',
    component: Chapter12,
  },
  {
    path: '/comptest1',
    component: CompTest1,
  },
  {
    path: '/testtodolist',
    component: TestTodoList,
  },
  {
    path: '/todolist2',
    component: TodoList2,
  },
  {
    path: '/todolist1',
    component: TodoList1,
  },
  {
    path: '/chapter10',
    component: Chapter10,
  },
  {
    path: '/transtest3',
    component: TransTest3,
  },
  {
    path: '/shuffletest',
    component: ShuffleTest,
  },
  {
    path: '/transtest2',
    component: TransTest2,
  },
  {
    path: '/transtest1',
    component: TransTest1,
  },
  {
    path: '/watchtest2',
    component: WatchTest2,
  },
  {
    path: '/watchtest1',
    component: WatchTest1,
  },
  {
    path: '/computedtest5',
    component: ComputedTest5,
  },
  {
    path: '/recomputedtest4',
    component: ReComputedTest4,
  },
  {
    path: '/computedtest4',
    component: ComputedTest4,
  },
  {
    path: '/computedtest3',
    component: ComputedTest3,
  },
  {
    path: '/computedtest2',
    component: ComputedTest2,
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
