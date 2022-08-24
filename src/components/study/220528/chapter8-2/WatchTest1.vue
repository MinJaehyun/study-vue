<template>
  <div>
    <h1>목표: 입력한 문자가 금지 문자면 alert 띄우기</h1>
    <p>금지 문자는 '{{ checkText }}' 입니다.</p>
    <textarea cols="100" rows="10" v-model="inputText">
      test
    </textarea>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WatchTest1',
  data() {
    return {
      inputText: '',
      checkText: '안돼',
    };
  },
  watch: {
    inputText() {
      // console.log(1);
      // NOTE: this.checkText 값이 this.inputText 안에 있는지 확인하기
      if (this.inputText.indexOf(this.checkText) > -1) {
        alert('금지어는 입력할 수 없습니다');
      }
    },
  },
});
</script>

<!-- watch
  입력값을 watch 에 메서드로 연결하면, 입력값을 감지할 수 있다
-->

<!-- indexOf
  1. === -1 이면 존재하지 않는 경우 (-1)
  2. > -1 이면 존재하는 경우 (0 또는 양수)
-->
