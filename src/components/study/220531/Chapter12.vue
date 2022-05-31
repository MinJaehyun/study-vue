<template>
  <div>
    <h1>컴포넌트를 숫자 출력</h1>
    <OddAndEven v-for="(numItem, index) in numberList" :key="index" :numItem="numItem"></OddAndEven>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OddAndEven from "@/components/study/220531/OddAndEven.vue";

export default defineComponent({
  name: 'Chapter12_',
  data() {
    return {
      numberList: [1, 2, 3, 4],
    };
  },
  methods: {},
  components: {
    // eslint-disable-next-line vue/no-unused-components
    OddAndEven
  },
});
</script>

<style scoped></style>
<!-- 부모
1. 데이터 만들고
2. 컴포넌트 설정해서
3. 바인딩으로 데이터 내려준다
-->

<!-- 자식
1.
-->