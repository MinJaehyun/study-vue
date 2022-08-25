<template>
  <div>
    <h1>ToDo 리스트</h1>
    <div align="left">
      <ul v-for="(list, index) in listData" :key="index">
        <li style="list-style: none">
          <input type="checkbox" v-model="list.done" />
          <span :class="{ doneStyle: list.done }">{{ list.text }}</span>
        </li>
      </ul>
      <ul>
        <input
          type="text"
          placeholder="할 일"
          v-model="inputText"
          @keyup.enter="pushList"
        />
        <p><button @click="deleteList">처리완료삭제</button></p>
        <li style="list-style: none">
          {{ remaining }} / {{ listData.length }}건 처리
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
interface Provider {
  done: boolean;
  text: string;
}
export default {
  name: 'TodoList1New',
  data() {
    return {
      inputText: '',
      listData: [
        { done: false, text: '빵사기' },
        { done: true, text: '커피사기' },
      ],
    };
  },
  methods: {
    pushList() {
      this.listData.push({ done: false, text: this.inputText });
    },
    deleteList() {
      // check true 상태인 객체를 delete
      this.listData = this.listData.filter((cur: Provider) => {
        return cur.done === false;
      });
    },
  },
  computed: {
    remaining() {
      return this.listData.filter((cur: Provider) => {
        return cur.done;
      }).length;
    },
  },
};
</script>
<style>
.doneStyle {
  text-decoration: line-through;
  color: lightgray;
}
</style>
