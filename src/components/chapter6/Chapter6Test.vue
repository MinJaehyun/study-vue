<template>
  <div id="app">
    <h1>숫자 배열 조작과 구구단 출력</h1>
    <ul>
      <li v-for="(item, index) in numberList" :key="index">
        {{ item }}
        <button @click="changeItem(index)">변경</button>
        <button @click="deleteItem(index)">삭제</button>
      </li>
    </ul>
    <button @click="addNumber">추가</button>
    <button @click="sortNumber(numberList)">sort</button>
    <button @click="showGuGu">구구단 보이기</button>
    <!-- NOTE: v-if, v-for 한 엘리먼트에 사용할 수 없으므로, v-if 를 template 에 작성한다 -->
    <template v-if="isClick">
      <div v-for="(j, index) in numberList" :key="index">
        <div v-for="(i, index) in 9" :key="index">
          <p>{{ j }} * {{ i }} = {{ j * i }}</p>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Chapter6Test',
  data() {
    return {
      isClick: false,
      numberList: [2, 3, 4, 5, 6, 7, 8, 9],
    };
  },
  methods: {
    changeItem(index: number) {
      this.numberList.splice(index, 1, (this.numberList[index] += 1));
    },
    deleteItem(index: number) {
      this.numberList.splice(index, 1);
    },
    addNumber() {
      this.numberList.push(1);
    },
    sortNumber(data: number[]) {
      // 오름차순 정렬 및 중복 제거
      this.numberList = data
        .sort((a: number, b: number) => (a > b ? 1 : -1))
        .reduce((prev: number[], cur: number) => {
          // NOTE: indexOf() 값이 -1 이면 값이 없으므로 추가한다.
          if (prev.indexOf(cur) === -1) prev.push(cur);
          else if (prev.indexOf(cur) > -1) {
            // NOTE: 값이 존재하지 않으므로 아무것도 하지 않는다.
          }
          return prev;
        }, []);
    },
    showGuGu() {
      this.isClick = !this.isClick;
    },
  },
});
</script>
<!-- splice 중간에 데이터 추가 방법? splice(indx), 1, '변경할 내용') -->

<!-- item.id 에러
  1. 현재 Database 를 사용하여 자료를 가져오지 않으므로 .id 는 적용할 수 없다 
  2. client 에서만 사용할 것이면 임시로 index 지정한다.
-->
