<template>
  <div>
    <h1>ToDoList</h1>
    <TodoInput :todoText="todoText" @inputValue="inputValue" />
    <div v-for="todo in todos" :key="todo.id">
      <ul>
        <li>{{ todo.text }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoInput from '@/components/TodoInput.vue';

export default defineComponent({
  name: 'TodoInputPage',
  components: {
    TodoInput,
  },
  data() {
    return {
      todoText: '',
      todos: [],
    };
  },
  methods: {
    inputValue(value: string) {
      // console.log('value : ', value);
      this.todos.push({ text: value });
    },
  },
});
</script>

<style scoped></style>
