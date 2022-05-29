<template>
  <div>
    <h1>적색, 녹색, 청색 의 슬라이더를 움직이면 완성된 색을 표시하는 예제</h1>
    <!-- 색 설정하기 -->
    <div :style="{backgroundColor: checkedColor}">{{ checkedColor }}</div>
    <div><input type="range" v-model="red" min="0" max="255"></div>
    <div><input type="range" v-model="green" min="0" max="255"></div>
    <div><input type="range" v-model="blue" min="0" max="255"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ComputedTest5',
  data() {
    return {
      red: 130,
      green: 130,
      blue: 130,
    };
  },
  computed: {
    checkedColor() {
      // rgb(255,0,0)
      // console.log(this.red);
      return `rgb(${this.red}, ${this.green}, ${this.blue})`;
    },
  },
});
</script>

<style scoped></style>
<!-- NOTE:
1. checkedColor 로 연산된 값을 가져와서 스타일로 지정하면서,
2. 연산 메서드를 {{}} 안에서 표현할 수도 있다!!
3. range 는 slide 를 나타낸다
4. 색상을 나타내는 방법 중 하나로 RGB(255,0,0) 이 있다!
5. 바인딩 된 스타일에 computed 메서드를 연결하고 슬라이드 조절 시, data 에 설정한 값이 바뀐다
6. 요구사항에 slide 사용 시, 관련 내용 html slide 속성 살펴보기 (html input 속성 검색하기)
-->