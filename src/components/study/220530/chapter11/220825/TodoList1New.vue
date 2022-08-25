<template>
  <div>
    <h1>ToDo 리스트</h1>
    <ul
      align="left"
      style="list-style: none"
      v-for="(list, index) in listData"
      :key="index"
    >
      <li>
        <!-- NOTE: checkbox 가 true, false 인지 판단하기 위한 v-model 설정 -->
        <input type="checkbox" v-model="list.done" />
        <!-- NOTE: list.done 이 true 이면 doneStyle class 를 적용한다 -->
        <span :class="{ doneStyle: list.done }">{{ list.text }}</span>
      </li>
    </ul>
    <ul align="left" style="list-style: none">
      <!-- 앞: 체크한(true) 개수, 뒤: 총 li 개수 -->
      <li>{{ remaining }}/{{ listData.length }} 처리</li>
    </ul>
  </div>
</template>
<script lang="ts">
interface Provider {
  done: boolean;
  text: string;
}
export default {
  name: 'TodoList1New',
  data() {
    return {
      listData: [
        { done: false, text: '빵사기' },
        { done: true, text: '커피사기' },
      ],
    };
  },
  methods: {},
  computed: {
    remaining() {
      return this.listData.filter((cur: Provider) => {
        return cur.done;
      }).length;
    },
  },
};
</script>
<style>
.doneStyle {
  text-decoration: line-through;
  color: lightgray;
}
</style>
<!-- 배운 점
  1. listData 만들 때, 
    빵사기, 커피사기 문구를 저장할 state 와
    체크 상태를 저장할 state 를 하나로 만들어야 하므로
    [{checkBool: boolean},{text: ""}] 형태로 만들어야 한다.
  2. v-model 는 한개의 속성을 가져오는데, 반복문에 속성안에 속성을 넣어 처리할 수도 있다 
  3. checkbox 와 text 는 하나의 객체이다. 이점이 중요
  4. 12: list.done 아닌, lists.done
  5. cur.done 의 타입 설정은 interface 로 정의함
-->
