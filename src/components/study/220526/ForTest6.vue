<template>
  <div>
    <h1>버튼 클릭 시, sort 하는 예제</h1>
    <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    <button @click="sortFunction(items)">sort</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ForTest6',
  data() {
    return {
      items: ['one', 'two', 'three', 'four'],
    };
  },
  methods: {
    sortFunction(data: any) {
      // NOTE: JSON.parse, JSON.stringify 기능 검색하기
      // const test = JSON.parse(JSON.stringify(data));
      data.sort(function (a: any, b: any) {
        return a < b ? -1 : 1;
      });
    },
  },
});
</script>

<style scoped></style>
<!--
1. 오름차순 의미: a->b
2. 메서드에 인자를 전달할 수 있다.
3. 오름차순 정렬: a < b ? -1 : 1
- a 가 b 보다 작으면 -1 을 return 한다.
-->
