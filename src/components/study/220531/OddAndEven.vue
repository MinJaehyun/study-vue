<template>
  <div>{{ numItem }} 는 {{ numItem % 2 === 0 ? '짝수' : '홀수' }} 입니다.</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OddAndEven',
  data() {
    return {};
  },
  props: {
    numItem: Number,
  },
  methods: {},
  // computed: {
  //   checkNum() {
  //     return this.numItemem % 2 === 0 ? '짝수' : '홀수'
  //   },
  // },
});
</script>

<style scoped></style>
