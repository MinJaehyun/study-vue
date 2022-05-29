<template>
  <div>
    <h1>문자 입력 시, 그 문자를 포함한 항목만 표시하는 예제</h1>
    <input type="text" v-model.lazy="textStr">
    <ul>
      <li v-for="(item, index) in checkStr" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ReComputedTest4',
  data() {
    return {
      // 입력값을 받을 변수가 필요하다
      textStr: '',
      myArr: ['설악산', '한라산', '북한산', '백두산', '지리산'],
    };
  },
  methods: {},
  computed: {
    // 아래 checkStr 함수의 타입은 [] 이므로, 반복문을 돌려서 처리할 수 있다!!
    checkStr() {
      // 입력값을 배열을 돌면서(filter), 한글자 값이 있으면 해당 값을 배열에 넣는다
      return this.myArr.filter((item: any)=>{
        // console.log(item);
        if (item.indexOf(this.textStr) >= 0) {
          return true;
        }
      })
    }
  },
});
</script>

<style scoped></style>
<!--
1. NOTE: 반복문을 돌 때, data 에 있는 객체만 돌 수 있는게 아니다..
2. 핵심: computed 에 설정한 객체인 메서드를 반복문에서 가져와 처리할 수도 있다!!!
3. 언제 이렇게 사용하나??
- 연산처리(filter,reduce,indexOf 등등)된 객체를 기존 배열에 덮어씌울 때 사용한다.
-->