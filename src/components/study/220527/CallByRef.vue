<template>
  <div>
    <!--    {{ test }}-->
    {{ refSum(testObj) }}
    <!--    {{ sumWithDeepCopy(testObj) }}-->
    <!--    {{ testObj.num1 }}-->
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
      console.log(testObj);
      const { num1, num2 } = testObj;
      testObj.num1 = 5;
      testObj.num2 = 6;
      // console.log(testObj.num1);
      return num1 + num2;
    },
    sumWithDeepCopy(obj: any) {
      const { num1, num2 } = obj;
      const formattedObj = JSON.stringify(obj);
      const parsedObj = JSON.parse(formattedObj);
      parsedObj.num1 = 2;
      parsedObj.num2 = 3;
      console.log(obj.num1);
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
