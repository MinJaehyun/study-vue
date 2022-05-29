<template>
  <div>
    <h1>문자를 입력하면 그 문자를 포함한 항목만 표시하는 예제</h1>
    <input type="text" v-model="isClick" />
    <p v-for="(item, index) in results" :key="index">{{ item }}</p>
  </div>
  {{ results }}
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ComputedTest4',
  data() {
    return {
      myArr: ['설악산', '한라산', '북한산', '백두산', '지리산'],
      isClick: '',
    };
  },
  computed: {
    results() {
      // 각각의 아이템에 indexOf 로 입력한 문자를 포함하고 있으면 true 처리되므로, 해당 item 자체를 result 에 담게된다.
      return this.myArr.filter((item: string) => {
        return item.indexOf(this.isClick) >= 0;
      });
    },
  },
});
</script>
<style scoped></style>
<!--
1. data 에 있는 배열을 반복문에서 사용하는게 아닌, filter 처리된 배열을 반복문에서 사용하는게 포인트!
2.
-->