<template>
  <div>
    <h1>call by value 예제 1.</h1>
    <p>변경 전 num1: {{ num1 }} </p>
    <p>변경 전 num2: {{ num2 }} </p>
    <p>변경 후 num1 + num2 =  {{ sum(num1, num2) }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CallByVal',
  data() {
    return {
      num1: {a: 1},
      num2: 2,
    };
  },
  created() {
    //0x1111 = {a: 5, b: 1}
    const num4 = this.num1;

    num4.b=1
    console.log('equal:', this.num1 === num4);
    console.log('num1:', this.num1)

    this.sum2({}, num4);

    console.log('num4:', num4)
  },
  methods: {
    sum(num1: number, num2: number) {
      // 스코프에 의해 변수값은 함수를 벗어날 수 없다.
      num1 = 0;
      num2 = 0;
      const result = num1 + num2;
      console.log('num1 변경 후:', num1);
      console.log('num2 변경 후:', num2);
      return result;
    },
    sum2(num1: any, num2: any) {
      const test = JSON.parse(JSON.stringify(num2));

      console.log('hello', test)
      test.c = 1
    }
  },
});
</script>

<style scoped></style>
<!--
1. 함수에서 객체를 변경하면 원본이 변하지 않지만,
-->

<!--
매개변수 자체를 변경해도 원본은 변하지 않는다.
매개변수의 속성을 변경하면 원본이 변한다.

num1 = 6 는 매개변수 자체를 변경하였으므로 원본이 변하지 않는다.

변경 전 testObj.num1 는 1이고,
num1 = 6 으로 매개변수 자체를 변경하여도 원본인 testObj.num1 는 변경되지 않는다.
변경 후 num1 은 해당 함수안에서 6으로 나타난다.

* 저장할 수 있는 새로운 메모리에 할당된다.

-->