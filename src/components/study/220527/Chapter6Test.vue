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
  name: 'Chapter6Test',
  data() {
    return {
      isClick: false,
      numberList: [2, 3, 4, 5, 6, 7, 8, 9],
    };
  },
  methods: {
    changeItem(index: any) {
      // console.log(index); // 7
      // console.log(typeof this.numberList[index]); // Number
      // console.log(this.numberList[index]); // 9
      this.numberList.splice(index, 1, (this.numberList[index] += 1));
      // console.log(this.numberList);
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
      // 오름차순 정렬하되 중복 제거하기
      // console.log(result); // 0~7
      // 결과 값을 가져와서 indexof 로 처리한다
      // numberList 를 반복하여 각각의 값을 넣는다
      // 정렬된 값을 reduce 에서 각각의 값을 indexOf 로 검사한다.
      this.numberList = data
        .sort(function (a: any, b: any) {
          return a < b ? -1 : 1;
        })
        .reduce((prev: any, cur: any) => {
          // NOTE: indexOf() 값이 -1 이면 값이 없으므로 추가한다.
          if (prev.indexOf(cur) === -1) {
            prev.push(cur);
            // console.log(prev);
          } else if (prev.indexOf(cur) > -1) {
            // NOTE: indexOf() 값이 0 이상이면 값이 있으므로 아무것도 하지 않는다.
            // console.log(cur);
          }
          // console.log(this.numberList);
          return prev;
        }, []);
      // NOTE: 이 전에 const numberList 에 담을 필요도 없고, return 할 필요도 없다.
    },
    showGuGu() {
      this.isClick = !this.isClick;
    },
  },
});
</script>

<style scoped></style>
<!-- 
* splice 사용하면
1. 배열 중간에 데이터를 추가하는 방법?
2. splice(?, 1, 내용) 사용하면 기존 배열 다 날라가므로, push 사용하여 기존 배열을 변경할 수 있게 한다.
-->
