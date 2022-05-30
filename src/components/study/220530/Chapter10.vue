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
    <button @click="showGuGu">구구단 보이기</button>
    <!-- NOTE: v-if, v-for 사용 시, v-if 를 template 에 작성하여 처리하면 된다. -->
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
  name: 'Chapter10_',
  data() {
    return {
      isClick: false,
      numberList: [2, 3, 4, 5, 6, 7, 8, 9, 102, 203, 204, 206],
    };
  },
  methods: {
    // NOTE: 다시보기
    changeItem(index: any) {
      let change_num = this.numberList[index] + 100;
      // 재귀함수 알아보기
      while(true) {
        // 1. 클릭 시, +100 증가값이 없으면 종료한다
        if (this.numberList.indexOf(change_num) === -1) {
          break;
        }
        // 2. 클릭 시, +100 증가값이 있으면, 100 증가된 값에 +1을 더하여 나타낸다.
        else change_num += 1;
      }
      // 기존 값을 변경한다.
      this.numberList.splice(index, 1, change_num)
    },
    deleteItem(index: any) {
      // 해당 값을 삭제한다.
      this.numberList.splice(index, 1);
    },
    addNumber() {
      // 맨 뒤에 숫자 1추가하기
      this.numberList.push(1);
    },
    sortNumber(data: any) {
      this.numberList = data
        .sort(function (a: any, b: any) {
          return a < b ? -1 : 1;
        })
        .reduce((prev: any, cur: any) => {
          if (prev.indexOf(cur) === -1) {
            prev.push(cur);
          } else if (prev.indexOf(cur) > -1) {
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
<style scoped></style>
<!--재귀함수 알아보기-->