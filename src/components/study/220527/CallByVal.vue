<template>
  <div>
    <h1>call by value 를 이해하기 위한 예제</h1>
    {{ sum(num1, num2) }}
    <hr />
    {{ num1 }}, {{ num2 }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CallByVal',
  data() {
    return {
      num1: 1,
      num2: 2,
    };
  },
  methods: {
    sum(num1: number, num2: number) {
      const result = num1 + num2;
      num1 = 0;
      num2 = 0;
      return result;
    },
  },
});
</script>

<style scoped></style>
