// vue-router 라이브러리 { createWebHistory, createRouter } 사용
import { createWebHistory, createRouter, RouterOptions } from 'vue-router';

import PageNotFound from '@/pages/PageNotFound.vue';
import TodoInput from '@/pages/TodoInputPage.vue';
import DynamicRoute from '@/pages/DynamicRoute.vue';
import Mixin from '@/components/study/mixin/test.vue';
import Vuex from '@/components/study/vuex/test.vue';
import ModelTest8 from '@/components/chapter4/ModelTest8.vue';
import ModelTest9 from '@/components/chapter4/ModelTest9.vue';
import ModelTest10 from '@/components/chapter4/ModelTest10~11.vue';
import Chapter4Test from '@/components/chapter4/Chapter4Test.vue';
import OneTest2 from '@/components/chapter5/OneTest2.vue';
import OneTest3 from '@/components/chapter5/OneTest3~4.vue';
import Chapter5test from '@/components/chapter5/Chapter5test.vue';
import IfTest1 from '@/components/chapter6/IfTest1.vue';
import ForeTest1 from '@/components/chapter6/ForTest1.vue';
import ForTest3 from '@/components/chapter6/ForTest3.vue';
import TableTest from '@/components/chapter6/TableTest.vue';
import ForTest5 from '@/components/chapter6/ForTest5.vue';
import ForTest6 from '@/components/chapter6/ForTest6.vue';
import ForTest7 from '@/components/chapter6/ForTest7.vue';
import Chapter6Test from '@/components/chapter6/Chapter6Test.vue';
import ComputedTest2 from '@/components/chapter8/ComputedTest2.vue';
import ComputedTest3 from '@/components/chapter8/ComputedTest3.vue';
import ComputedTest4 from '@/components/chapter8/ComputedTest4.vue';
import ComputedTest5 from '@/components/chapter8/ComputedTest5.vue';
import WatchTest1 from '@/components/chapter8-2/WatchTest1.vue';
import TimerTest from '@/components/chapter8-2/TimerTest.vue';
import WatchTest2 from '@/components/chapter8-2/WatchTest2.vue';
import Practice82 from '@/components/chapter8-2/Practice82.vue';
import Markdown from '@/components/chapter9/Markdown.vue';
import TransTest1 from '@/components/chapter10/TransTest1.vue';
import TransTest2 from '@/components/chapter10/TransTest2.vue';
import ShuffleTest from '@/components/chapter10/ShuffleTest.vue';
import TransTest3 from '@/components/chapter10/TransTest3.vue';
import Chapter10 from '@/components/chapter10/Chapter10.vue';
import TodoList1New from '@/components/chapter11/TodoList1New.vue';
import TodoList2New from '@/components/chapter11/TodoList2New.vue';
import TestTodoList from '@/components/chapter11/TestTodoList.vue';
import CompTest1 from '@/components/chapter12/CompTest1.vue';
import Chapter12 from '@/components/chapter12/Chapter12.vue';
import JsonLoadVue from '@/components/chapter13/JsonLoadVue.vue';
import JsonTest1 from '@/components/chapter13/JsonTest1.vue';
import OXQuiz from '@/components/chapter13/test/OXQuiz.vue';
import EasyBoardPage from '@/pages/EasyBoardPage.vue';
import EasyBoardPage2 from '@/pages/220830/EasyBoardPage2.vue';

// routes 설정
const routes = [
  {
    path: '/easy-board2',
    component: EasyBoardPage2,
  },
  {
    path: '/easyboard',
    component: EasyBoardPage,
  },
  {
    path: '/ox-quiz',
    component: OXQuiz,
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
    path: '/todoList2New',
    component: TodoList2New,
  },
  {
    path: '/todoList1New',
    component: TodoList1New,
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
    path: '/markdown',
    component: Markdown,
  },
  {
    path: '/practice82',
    component: Practice82,
  },
  {
    path: '/watchtest2',
    component: WatchTest2,
  },
  {
    path: '/timerTest',
    component: TimerTest,
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
    path: '/chapter5test',
    component: Chapter5test,
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
    path: '/ModelTest8',
    component: ModelTest8,
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
    component: DynamicRoute,
  },
  {
    path: '/todoinput',
    component: TodoInput,
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
