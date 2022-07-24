<template>
  <div>
    <h1>문자을 입력하면 남은 글자수를 표시하는 예제</h1>
    <textarea
      v-model="textLength"
      maxlength="140"
      placeholder="140 글자 이내로 입력해 주세요."
    ></textarea>
    <p>총 글자는 {{ totalLength }}</p>
    <p :style="{ color: colorComputed }" v-if="textRemind > 0">
      남은 글자는 {{ textRemind }}
    </p>
    <p :style="{ color: colorComputed }" v-if="textRemind <= 0">
      140 글자 수를 초과 하실 수 없습니다!
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ComputedTest3',
  data() {
    return {
      textLength: '',
      color: 'black',
    };
  },
  computed: {
    totalLength() {
      return this.textLength.length;
    },
    textRemind() {
      // 140 - 입력한 글자 수
      return 140 - Number(this.totalLength);
    },
    colorComputed() {
      // 남은 글자가 140 이하면 녹색, 이상이면 빨강 v-if
      let color = '';
      if (this.textRemind <= 0) {
        color = 'red';
      } else {
        color = 'green';
      }
      return color;
    },
  },
  // watch: {
  //   textLength(val) {
  //     console.log(val);
  //     if (val.length > 140) {
  //       this.textLength = String(val).slice(0, 140);
  //     }
  //   },
  // },
});
</script>

<style scoped></style>
<!-- 140 글자 이상은 아예 못쓰게 만들기
1. html textarea 속성 maxlength=140 설정하기
-->
