<template>
  <div>
    <p v-for="(item, index) in myArr" :key="index">{{ item }}</p>
    <div>
      <button @click="testObj(myArr.length, 0, '맨 뒤 추가')">
        맨 뒤 추가
      </button>
    </div>
    <div><button @click="testObj(3, 0, '추가')">네 번째에 추가</button></div>
    <div>
      <button @click="testObj(0, 1, '첫 번째 변경')">첫 번째를 변경</button>
    </div>
    <div><button @click="testObj(1, 1)">두 번째 삭제</button></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'for-test5',
  data() {
    return {
      myArr: ['첫번째', '두번째', '세번째', '네번째'],
      myArr2: ['첫', '두', '세', '네'],
    };
  },
  methods: {
    // 하단의 메서드를 하나로 통합하는 방법
    testObj(index: number, deleteCount: number, addText?: string) {
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
<!-- vue 에서 arr[0]=100 으로 변경하는 대신 splice 사용하여 변경하는 이유? -->
<!-- splice 4가지 사용법
  1. 끝에 추가  : splice(index)
  2. 중간에 추가: splice(index, 0, '추가 데이터')
  3. 중간에 삭제: splice(index, 1)
  4. 중간에 변경: splice(index, 1, '변경 데이터')
-->
