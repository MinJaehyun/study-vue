<template>
  <div>
    <h1>입력한 글자에 해당하는 전체 단어를 표시하는 예제 (검색 기능)</h1>
    <input type="text" v-model="isClick" />
    <p v-for="(item, index) in results" :key="index">{{ item }}</p>
  </div>
  <hr />
  {{ myArr }}
  <hr />
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
      // 입력한 글자가 단어에 포함되어 있으면 true 이며 results 에 담기므로,
      // 상단에 {{ results }} 출력하면 검색한 단어만 나온다. 원본 myArr 는 변하지 않는다
      return this.myArr.filter((item: string) => {
        return item.indexOf(this.isClick) > -1;
      });
    },
  },
});
</script>
<!-- myArr 을 사용하는게 아닌, filter 처리된 배열을 반복문에서 사용하는게 포인트 -->
<!-- v-model.lazy -->
