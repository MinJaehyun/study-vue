<template>
  <div>
    <h1>계산기</h1>
    <input type="number" v-model.number="num1" />
    <input type="number" v-model.number="num2" />
    <div>
      <button @click="plus">덧셈</button>
      <button @click="minus">뺄셈</button>
      <button @click="multiple">곱셈</button>
      <button @click="division">나눗셈</button>
    </div>
    <p>결과: {{ result }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'chapter-5-test',
  data() {
    return {
      num1: '',
      num2: '',
      result: 0,
    };
  },
  methods: {
    plus() {
      this.result = this.num1 + this.num2;
    },
    minus() {
      this.result = this.num1 - this.num2;
    },
    multiple() {
      this.result = this.num1 * this.num2;
    },
    division() {
      this.result = this.num1 / this.num2;
    },
  },
});
</script>
<style scoped>
/* @import '../../../../assets/style.css'; */
@import '@/assets/style.css';
</style>
<!-- input 값은 String 이므로, 숫자 계산시 형변환 해준다. -->
<!-- 형변환 번거로우므로, v-model.number 설정하여 바로 형변환 한다 -->
<!-- type=number 설정하여 숫자만 받는다 -->
<!-- 기존 계산기는 음수처리에 에러를 갖는데, type=number 설정 후 해결  -->
