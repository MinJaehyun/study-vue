<template>
  <div>
    <h1>리스트 순서가 이동하면서 변하는 애니메이션 예제</h1>
    <transition-group>
      <li v-for="(num, index) in numList" :key="index">{{ num }}</li>
    </transition-group>
    <button @click="sortNumList">소트</button>
    <button @click="shuffleData">셔플</button>
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
    shuffleData() {
      // 총 길이에서 1 까지 감소시키며 반복한다
      // Math.random() * 총길이 사용하여 랜덤한 소수를 생성하고
      // 위를 Math.floor 로 감싸서 정수를 뽑아내서 변수로 만든다
      // 이 변수는 기존데이터에 인덱스로 활용하여, 임시 데이터에 추가하고
      // 위에 설정한 기존데이터에 있던 인덱스는 삭제한다
      // 반복문이 끝나면 임시데이터를 기존데이터에 담는다
      let originLength = this.numList.length;
      for(let i=originLength; originLength>=1; originLength--) {
        let r = Math.floor(Math.random() * originLength)
        this.newShuffleData.push(this.numList[r]);
        this.numList.splice(r, 1);
      }
      this.numList = this.newShuffleData;
    },
  },
});
</script>

<style>
.v-move {
  /*transition: 5s;*/
  /*transition: transform 0.8s ease;*/
  transition: transform 0.5s ease-out
}
</style>
<!--
1. 질문하기: v-move 설정 안되는 이유?
-->