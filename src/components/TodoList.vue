<template>
  <div class="container">
    <h2 class="text-center">Todolist</h2>
    <div class="my-comp">
      <div v-for="todo in todos" :key="todo.id">
        <label>
          <input type="checkbox" v-model="todo.done" />
          <span :clss="{ donestyle: todo.done }">{{ todo.text }}</span>
        </label>
      </div>
      <input
        type="text"
        v-model.trim="addText"
        @keyup.enter="addToDo"
        placeholder="할일을 적어주세요"
      />
      <p><button @click="addToDo">내용 입력 버튼</button></p>
      <p><button @click="cleanToDo">체크한 내용 삭제</button></p>
      <p>{{ remaining }} / {{ todos.length }}건 처리</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList.vue',
  data() {
    return {
      todos: [
        { done: false, text: '돈까스사기' },
        { done: false, text: '커피사기' },
      ],
      addText: '',
    };
  },
  // 체크된 길이를 연산하여 return
  computed: {
    remaining: function () {
      // todo.done 값이 true 이면 길이를 return
      return this.todos.filter(value => {
        return value.done == true;
      }).length;
    },
  },
  methods: {
    // methods addToDo 설정하기
    addToDo: function () {
      if (this.addText) {
        this.todos.push({ done: false, text: this.addText });
      }
      this.addText = '';
    },
    // methods cleanToDo 설정하기
    cleanToDo: function () {
      this.todos = this.todos.filter(value => {
        return value.done == false;
      });
    },
  },
};
</script>
<style>
.donestyle {
  text-decoration: line-through;
  color: lightseagreen;
}
.my-comp {
  width: 100%;
  background-color: #ffffe0;
  border: solid;
  border-color: darkorange;
  border-radius: 8px;
  padding: 8px;
}
</style>
