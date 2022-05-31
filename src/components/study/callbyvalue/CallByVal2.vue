<template>
  <div>
    <h1>call by value 예제 2</h1>
    <p>변경 전 num1: {{ testObj.num1 }}</p>
    <br />
    {{ refSum(testObj) }}
    <br />
    <!-- {{ sumWithDeepCopy(testObj) }}-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CallByVal2',
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
      let { num1, num2 } = testObj;
      // const 대신 let 사용해야 아래 testObj.num1 대신 num1 사용할 수 있다.
      // 위에 const 사용 시, 아래 testObj = 5; 를 통해 변경 전 값인 1 과, 변경 후 값인 5 를 나타낸다.
      // console.log('testObj.num1: ', testObj.num1);
      // 위에 let 으로 변경한 이 후, 콘솔값은 변경 전인 1로 나타난다.
      // testObj.num1 = 7;
      // testObj.num2 = 6;
      // console.log('testObj.num1: 변경 전', testObj.num1);
      // console.log('num1: ', num1);
      num1 = 6;
      // console.log('testObj.num1: 변경 후', testObj.num1);
      // console.log('변경 후', num1);

      // NOTE: stringify 사용하는 이유?
      // console.log('this.testObj: ', this.testObj);
      // console.log('testObj: ', testObj);
      console.log(JSON.stringify(testObj));
      console.log(JSON.stringify(this.testObj));
      testObj.num1 = 10;
      console.log(JSON.stringify(testObj)); // 위 매개변수를 변경해도 이 함수 안에서는 객체의 값은 변경되지 않는다.
      console.log(JSON.stringify(this.testObj));
      // 두 값 비교 이유?
      return testObj.num1 + testObj.num2;
    },

    refSum2(testObj: any) {
      // let { num1, num2 } = testObj;
      // const 대신 let 사용해야 아래 testObj.num1 대신 num1 사용할 수 있다.
      // 위에 const 사용 시, 아래 testObj = 5; 를 통해 변경 전 값인 1 과, 변경 후 값인 5 를 나타낸다.
      // console.log('testObj.num1: ', testObj.num1);
      // 위에 let 으로 변경한 이 후, 콘솔값은 변경 전인 1로 나타난다.
      testObj.num1 = 7;
      // testObj.num2 = 6;
      // num1 = 6;
      console.log(testObj.num1);
      return testObj.num1 + testObj.num2;
    },

    // NOTE: JSON.parse(JSON.stringify(obj)) 는 완전한 복사이지만, 성능이 안 좋다.
    // sumWithDeepCopy(obj: any) {
    //   // 객체에 접근하면 원본이 변경되지만, 아래처럼 JSON.stringify, JSON.parse 처리하면 원본을 변경하지 않고 객체를 처리할 수 있다!
    //   const { num1, num2 } = obj;
    //   const formattedObj = JSON.stringify(obj);
    //   const parsedObj = JSON.parse(formattedObj);
    //   parsedObj.num1 = 2;
    //   parsedObj.num2 = 3;
    //   // 구조분해할당 치리된 값은 바로 사용할 수 있다.
    //   console.log('num1: ', num1);
    //   return num1 + num2;
    // },
  },
});
</script>
<style scoped></style>
<!-- 구조 분해 할당(객체 or 배열)
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
-->
