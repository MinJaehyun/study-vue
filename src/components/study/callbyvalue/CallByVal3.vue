<template>
  <div>
    <h1>call by value 예제 3.</h1>
    {{ testObj.num1 }}
    <br />
    {{ testObj.num2 }}
    <br />
    {{ testObj }}
    <br />
    {{ valSum(testObj) }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CallByVal3',
  data() {
    return {
      testObj: {
        num1: 1,
        num2: 2,
      },
    };
  },
  methods: {
    valSum(testObj: any) {
      testObj = 8;
      console.log(testObj);  // 8, 객체 자체를 수정할 시에는 관계가 깨진다.
    },
  },
});
</script>
<style scoped></style>
