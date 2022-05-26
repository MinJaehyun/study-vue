<template>
  <div id="app">
    <h1>숫자 배열 조작과 구구단 출력</h1>
    <ul>
      <li v-for="(item, index) in numberList" :key="item.id">
        {{ item }}
        <button @click="changeItem(index)">변경</button>
        <button @click="deleteItem(index)">삭제</button>
      </li>
    </ul>
    <button @click="addNumber">추가</button>
    <button @click="sortNumber(numberList)">sort</button>
    <button>구구단 보이기</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Chapter6Test',
  data() {
    return {
      numberList: [2, 3, 4, 5, 6, 7, 8, 9],
    };
  },
  methods: {
    changeItem(index: any) {
      console.log(index); // 7
      console.log(typeof this.numberList[index]); // Number
      console.log(this.numberList[index]); // 9
      this.numberList.splice(index, 1, (this.numberList[index] += 1));
      console.log(this.numberList);
    },
    deleteItem(index: any) {
      // 해당 값을 삭제한다.
      this.numberList.splice(index, 1);
    },
    addNumber() {
      // 맨 뒤에 숫자 1추가하기
      this.numberList.push(1);
    },
    // sortNumber(data: any) {
    //   // 오름차순 정렬하되 중복 제거하기
    //   // 1->2, 중복제거? 검색하기
    //   let result = data.sort.reduce((acc: any, cur: any) => {
    //     acc.push(cur);
    //   }, []);
    //   result.sort(function (a: any, b: any) {
    //     return a < b ? -1 : 1;
    //   });
    // },
  },
});
</script>

<style scoped></style>
<!-- 
* splice 사용하면
1. 배열 중간에 데이터를 추가하는 방법?
2. splice(?, 1, 내용) 사용하면 기존 배열 다 날라가므로, push 사용하여 기존 배열을 변경할 수 있게 한다.
-->
