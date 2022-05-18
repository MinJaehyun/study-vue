<template>
  <TodoList />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoList from '@/components/TodoList.vue';

export default defineComponent({
  name: 'App',
  // created(): void {
  //   console.log('hi');
  //   this.testString();
  // },
  // methods: {
  //   testString() {
  //     let obj: any = { x: 0 };
  //   },
  // },
  components: {
    TodoList,
  },
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
