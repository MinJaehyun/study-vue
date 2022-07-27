<template>
  <div>
    <h1>버튼 클릭 시 매개변수 값 증가 시키는 예제</h1>
    <p>{{ count }}</p>
    <button @click="countUp(3)">3증가</button>
    <button @click="countUp(10)">10증가</button>
    <button @click="countUp(100)">100증가</button>
    <hr />
    <!-- shift + enter 누르면 입력값을 alert 띄운다 -->
    <input @keyup.enter.shift="showAlert" v-model="myText" />
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
    countUp(val: number) {
      this.count += val;
    },
    showAlert() {
      alert('shift + enter 눌렀습니다.');
    },
  },
});
</script>

<style scoped></style>
<!-- 이벤트 함수에 인자 넣는 기능 -->

<!-- 키 입력 이벤트인 @keyup 의 키 수식자 종류와 시스템 수식자 키의 종류 
  1. 키 수식자: enter, down, tab, esc 등등
  2. 시스템 수식자 키: ctrl, alt, shift, window키, command키
-->
