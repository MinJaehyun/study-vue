<template>
  <div>
    <h1>문자를 입력하면 그 문자를 포함한 항목만 표시하는 예제</h1>
    <input type="text" v-model.lazy="isClick" />
    <p v-for="(item, index) in results" :key="index">{{ item }}</p>
  </div>
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
      return this.myArr.filter((item: string) => {
        console.log(item.indexOf('악'), item);
        return item.indexOf(this.isClick) >= 0;
      });
    },
  },
});
</script>
<style scoped></style>
