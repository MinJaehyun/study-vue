<template>
  <div>
    <button :disabled="isClick" @click="onClick">좋아~!</button>
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
<!-- 요구 사항:
  클릭 시 '좋아' 경고창 출력하고 버튼 비활성화 한다.
-->

<!-- 흐름:
  1. '좋아' 클릭 시 onClick 함수 실행,
  2. isClick 값 true 로 변경.
  3. disabled 값 true 로 변경하여 버튼 비활성화 한다.
-->
