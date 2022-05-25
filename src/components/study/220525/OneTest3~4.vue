<template>
  <div id="app">
    <p>{{ count }}</p>
    <button @click="countUp(3)">3증가</button>
    <button @click="countUp(10)">10증가</button>
    <button @click="countUp(100)">100증가</button>
    <hr />
    <input @keyup.enter.shift="showAlert" v-model="myText" />
    <hr />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OneTest3~4',
  data() {
    return {
      count: 0,
      myText: 'hi',
    };
  },
  methods: {
    countUp(val: any) {
      this.count += val;
    },
    showAlert() {
      alert('enter 누름');
    },
  },
});
</script>

<style scoped></style>
<!--
 1. 이벤트 함수에 인자를 넣어 전달할 수도 있다.
 -->
