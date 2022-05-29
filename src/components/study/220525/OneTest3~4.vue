<template>
  <div>
    <h1>각각의 버튼 클릭 시, 해당 값을 증가 시키는 예제</h1>
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
    countUp(val: any) {
      this.count += val;
    },
    showAlert() {
      alert('shift + enter 눌렀습니다.');
    },
  },
});
</script>

<style scoped></style>
<!-- 이벤트 함수에 인자를 넣어 전달할 수 있다. -->
