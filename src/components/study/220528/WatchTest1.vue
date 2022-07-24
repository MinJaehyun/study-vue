<template>
  <div>
    <h1>입력문자를 감지하여 금지문자가 입력되면 alert 를 띄우는 예제</h1>
    <p>금지 문자는 {{ checkText }} 입니다.</p>
    <textarea name="" id="" cols="100" rows="10" v-model="inputText">
test</textarea
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WatchTest1',
  data() {
    return {
      inputText: '',
      checkText: '안돼',
    };
  },
  methods: {},
  watch: {
    inputText() {
      console.log(1);
      // this.checkText 값이 this.inputText 안에 있는지 확인하기
      if (this.inputText.indexOf(this.checkText) >= 0) {
        alert('안돼는 입력할 수 없습니다.');
      }
    },
  },
});
</script>

<style scoped></style>
<!--
1. watch 연습하기
2. 특징: 입력값을 watch 에 메서드로 연결하면, 입력값을 감지할 수 있다
3.
-->
