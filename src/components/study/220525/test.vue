<template>
  <div>
    <h1>음수처리에 에러를 갖는 심플한 계산기</h1>
    <input type="text" v-model="num1" />
    <input type="text" v-model="num2" />
    <div>
      <button @click="plus">덧셈</button>
      <button @click="minus">뺄셈</button>
      <button @click="multiple">곱셈</button>
      <button @click="division">나눗셈</button>
    </div>
    <p>결과는 {{ result }} 입니다.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'test_',
  data() {
    return {
      num1: 0,
      num2: 0,
      result: 0,
    };
  },
  methods: {
    plus() {
      this.result = Number(this.num1) + Number(this.num2);
    },
    minus() {
      this.result = Number(this.num1) - Number(this.num2);
    },
    multiple() {
      this.result = Number(this.num1) * Number(this.num2);
    },
    division() {
      this.result = Number(this.num1) / Number(this.num2);
    },
  },
});
</script>

<style scoped></style>
<!-- input 에 입력한 값은 String 이므로 숫자 계산시 형변환 해준다. -->
