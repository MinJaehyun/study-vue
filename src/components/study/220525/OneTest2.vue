<template>
  <div id="app">
    <!-- disabled 이 true 면 실행된다. -->
    <button value="good" :disabled="isClick" @click="onClick">좋아~!</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OneTest2',
  data() {
    return {
      isClick: false,
    };
  },
  methods: {
    onClick() {
      this.isClick = true;
      alert('좋아~');
    },
  },
});
</script>

<style scoped></style>
<!-- 
 1. 좋아~! 버튼 클릭 시, onClick 함수를 실행하고,
 2. isClick 값을 true 로 변경한다.
 3. 이제 disabled 값이 true 이므로 버튼이 비활성화 된다!!
 -->
