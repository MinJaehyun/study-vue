<template>
  <div>
    <h1>ToDo 추가 및 삭제</h1>
    <div v-for="(item, index) in items" :key="index">
      <input type="checkbox" v-model="item.bool" />
      <span :class="{ 'line-throught': item.bool }">{{ item.text }}</span>
    </div>
    <input
      type="text"
      placeholder="할일"
      v-model="inputText"
      @change="addInputFunc"
    />
    <br />
    <button @click="checkedDeleteTodo">처리완료삭제</button>
    <hr />
    {{ checkedCount }} / {{ items.length }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TodoList2',
  data() {
    return {
      items: [
        { bool: false, text: '빵사기' },
        { bool: false, text: '커피사기' },
      ],
      inputText: '',
    };
  },
  methods: {
    addInputFunc() {
      // { bool: false, text: '입력한 글은 v-model 을 통해 inputText 에 저장된다'}
      this.items.push({ bool: false, text: this.inputText });
      // console.log(this.items);
    },
    checkedDeleteTodo() {
      this.items = this.items.filter((item: any) => {
        return item.bool === false;
      });
      // 체크 안 된 아이템만 기존 배열에 담는다.
    },
  },
  computed: {
    checkedCount() {
      return this.items.filter((item: any) => {
        return item.bool;
      }).length;
    },
  },
});
</script>

<style scoped>
.line-throught {
  text-decoration: line-through;
}
</style>
<!-- 막힘: 직접 객체 추가 방법
push({ name: 1, age: this.items })
-->
<!-- 체크 안 된 내용만 다시 기존 배열에 넣어서 처리하는게 삭제하는 방법 -->
<!-- 36: 굳이 const 변수에 담을 필요없이 바로 기존 배열에 넣으면 된다 -->
