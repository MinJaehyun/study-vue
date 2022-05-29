<template>
  <div>
    {{ testObj.num1 }}
    <br />
    {{ testObj.num2 }}
    <br />
    <!-- 1. call by ref -->
    <!-- {{ refSum(testObj) }}-->

    <!-- 2. call by ref -->
    {{ sumWithDeepCopy(testObj) }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CallByRef',
  data() {
    return {
      testObj: {
        num1: 1,
        num2: 2,
      },
    };
  },
  methods: {
    refSum(testObj: any) {
      // console.log(testObj);
      const { num1, num2 } = testObj;
      testObj.num1 = 5;
      testObj.num2 = 6;
      return num1 + num2;
    },
    sumWithDeepCopy(obj: any) {
      // 객체에 접근하면 원본이 변경되지만, 아래처럼 JSON.stringify, JSON.parse 처리하면 원본을 변경하지 않고 객체를 처리할 수 있다!
      const { num1, num2 } = obj;
      const formattedObj = JSON.stringify(obj);
      const parsedObj = JSON.parse(formattedObj);
      parsedObj.num1 = 2;
      parsedObj.num2 = 3;
      // 구조분해할당 치리된 값은 바로 사용할 수 있다.
      console.log('num1: ', num1);
      return num1 + num2;
    },
  },
  // created() {
  //   this.refSum(this.testObj);
  // },
  // computed: {
  //   test() {
  //     return this.refSum(this.testObj);
  //   },
  // },
});
</script>
<style scoped></style>
<!-- 구조 분해 할당(객체 or 배열)
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
-->
