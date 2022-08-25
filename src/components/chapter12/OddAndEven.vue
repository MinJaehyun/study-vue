<template>
  <div>{{ numItem }} 는 {{ checkNum }} 입니다.</div>
  <!-- numItem % 2 === 0 ? '짝수' : '홀수' -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'OddAndEven',
  props: {
    numItem: Number,
  },
  computed: {
    checkNum() {
      return this.numItem % 2 === 0 ? '짝수' : '홀수';
    },
  },
});
</script>
