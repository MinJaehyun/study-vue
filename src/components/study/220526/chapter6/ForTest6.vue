<template>
  <div align="left">
    <h1>버튼 클릭 시 sort</h1>
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
    <button @click="sortData(items)">sort</button>
    <button @click="reverseData(items)">reverseData</button>
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
    // 1. 문자열 정렬
    sortData(data: string[]) {
      // const test = JSON.parse(JSON.stringify(data));
      data.sort((a: string, b: string) => {
        return a > b ? 1 : -1;
      });
    },
    // 2. 역정렬
    // 결과: ['four', 'three', 'two', 'one']
    reverseData(data: string[]) {
      data.reverse();
    },
  },
});
</script>
