<template>
  <div>
    <h1>버튼 클릭 시, sort 하는 예제</h1>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item }}</li>
    </ul>
    <button @click="sortFunction(items)">sort</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'fortest6_',
  data() {
    return {
      items: ['one', 'two', 'three', 'four'],
      // items: [6, 1, 2, 3, 4, 5],
    };
  },
  methods: {
    sortFunction(data: any) {
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
1. 오름차순 정렬 (a->b), 내림 (z->y)
2. 메서드에 인자를 내려줄 수 있다.
3. a < b ? -1:1
- a 가 b 보다 작으면 -1 을 return 한다.
4. 왜 -1 인지, 1 인지 이해하기
-->
