<template>
  <TodoInput
    :item="todoText"
    @inputValue="inputValue"
    @addToStorage="addToStorage"
  />
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
      todoText: 'abc',
    };
  },
  methods: {
    inputValue(value: string) {
      console.log('value : ', value);
      this.todoText = value;
    },
    addToStorage() {
      // storage 에 저장하는 방법?
      // console.log('test');
      const value = this.todoText;
      // console.log('addtostorageValue :', value);
      localStorage.setItem('value', value);
      this.initTodoText();
    },
    initTodoText() {
      this.todoText = '';
    },
  },
});
</script>

<style scoped></style>
