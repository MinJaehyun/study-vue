<template>
  <div>
    <h1>클릭하면 셔플하는 예제</h1>
    <button @click="shuffleData">셔플</button>
    <p>{{ originData }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ShuffleTest',
  data() {
    return {
      originData: ['one', 'two', 'three', 'four', 'five', 'six'],
      tempData: [],
    };
  },
  methods: {
    shuffleData() {
      let originLen = this.originData.length; // 6
      for(let i=originLen; originLen>0; originLen--) {
        // Math.floor  기능? 소수의 정수만 나타낸다 (5.05 는 5, -5.05 는 -6)
        // Math.random 기능? 0~1 사이에 소수를 표현한다.
        console.log(Math.random() * originLen)
        let r = Math.floor(Math.random() * originLen);
        // console.log(r) // 2,3,3,1,1,0  한번씩 돌면서 아래에서 인덱스를 추가 후 삭제하므로 숫자가 중복되도 된다.

        this.tempData.push(this.originData[r]);
        this.originData.splice(r,1);
      }
      // 반복 완료 후, 임시데이터를 기존데이터에 덮어서 셔플로 나타낸다.
      this.originData = this.tempData;
    },
  },
});
</script>

<style scoped></style>
<!--
1. 알고리즘 학습하기
-->