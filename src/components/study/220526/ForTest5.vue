<template>
  <div id="app">
    <ul>
      <li v-for="item in myArr" :key="item.id">{{ item }}</li>
    </ul>
    <div>
      <button @click="testObj(myArr.length, 0, '맨 뒤 추가')">
        맨 뒤 추가
      </button>
    </div>
    <div>
      <button @click="testObj(3, 0, '')">네 번째에 추가</button>
    </div>
    <div><button @click="testObj(0, 1, '변경')">첫 번째를 변경</button></div>
    <div><button @click="testObj(1, 1)">두 번째를 삭제</button></div>
  </div>
</template>
<!-- 지정위치 마지막 myArr.length-->
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
    // lastPush() {
    //   this.myArr.push('다섯번째');
    // },
    // addObj(startOne: any, deleteCount: any, item: any) {
    //   this.myArr.splice(start, deleteCount, item);
    // },
    testObj(startOne: any, deleteCount: any, item?: any) {
      if (typeof item !== 'undefined') {
        this.myArr.splice(startOne, deleteCount, item);
      } else {
        this.myArr.splice(startOne, deleteCount);
      }
    },
    // changeObj(0, 1, '변경') {
    //   this.myArr.splice(0, 1, '변경');
    // },
    // deleteObj(1, 1) {
    //   this.myArr.splice(1, 1);
    // },
  },
  // created() {
  //   console.log(this.myArr.length);
  // },
});
</script>

<style scoped></style>
<!--
1. splice(3,0,'내용') 0 사용하면 뒤를 자르지 않고 사이에 넣는다.
2. splice(1,1) 처리하면 해당 인덱스를 삭제한다.
-->
