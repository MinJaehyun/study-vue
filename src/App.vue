<template>
  <!-- 아래 그냥 컴포넌트를 불러오는 것과 router-view 를 통해 URL 접근 시 불러오는 것의 차이점을 이해 -->
  <!--  <TodoList />-->
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import TodoList from '@/components/TodoList.vue';

export default defineComponent({
  name: 'App',
  // components: {
  //   TodoList,
  // },
});
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
