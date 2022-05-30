<template>
  <div>
    <h1>리스트 순서가 이동하면서 변하는 애니메이션 예제</h1>
    <transition-group name="flip-list" tag="ul">
      <li v-for="(num, index) in numList" :key="index">{{ num }}</li>
    </transition-group>
    <button @click="sortNumList">소트</button>
    <button @click="shuffleData2">셔플</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TransTest3',
  data() {
    return {
      numList: ['one','two','three','four','five'],
      newShuffleData: []
    };
  },
  methods: {
    sortNumList() {
      this.numList.sort((a: any, b: any)=> {
        return a < b ? -1 : 1
      })
    },
    shuffleData2() {
      this.numList.sort(()=> Math.random() - 1);
      console.log('test', this.numList);
    },
  },
});
</script>

<style scoped>
.flip-list-move {
  /*transition: 0.5s;*/
  transition: transform 0.8s ease;
  /*transition: transform 0.5s ease-out;*/
}
</style>
<!-- v-move 설정 안되는 이유?
- lodash 로는 되는데, 함수 설정해서 실행하면 에러난다
-->