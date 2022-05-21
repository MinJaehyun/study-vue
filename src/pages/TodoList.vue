<template>
  <TodoList></TodoList>
</template>

<script lang="ts">
import TodoList from '@/components/TodoList.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TodoList.vue',
  components: {
    TodoList,
  },
});
</script>

<style scoped></style>
