<template>
  <div>
    <p v-for="(item, index) in myArr" :key="index">{{ item }}</p>
    <div>
      <button @click="testObj(myArr.length, 0, '맨 뒤 추가')">
        맨 뒤 추가
      </button>
    </div>
    <div><button @click="testObj(3, 0, '추가')">네 번째에 추가</button></div>
    <div><button @click="testObj(0, 1, '변경')">첫 번째를 변경</button></div>
    <div><button @click="testObj(1, 1)">두 번째를 삭제</button></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'fortest5_',
  data() {
    return {
      myArr: ['첫번째', '두번째', '세번째', '네번째'],
    };
  },
  methods: {
    // 하단의 메서드를 하나로 통합하여 사용
    testObj(index: any, deleteCount: any, addText?: any) {
      if (typeof addText !== 'undefined') {
        this.myArr.splice(index, deleteCount, addText);
      } else {
        this.myArr.splice(index, deleteCount);
      }
    },
    // lastPush() {
    //   this.myArr.push('다섯번째');
    // },
    // addObj(startOne: any, deleteCount: any, item: any) {
    //   this.myArr.splice(start, deleteCount, item);
    // },
    // changeObj(0, 1, '변경') {
    //   this.myArr.splice(0, 1, '변경');
    // },
    // deleteObj(1, 1) {
    //   this.myArr.splice(1, 1);
    // },
  },
});
</script>

<style scoped></style>
<!--
1. splice(index, deleteCount, '입력할 내용')
2. splice(1,1) 는 2번째 인덱스를 1개 삭제한다.
-->
