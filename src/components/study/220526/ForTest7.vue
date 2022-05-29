<template>
  <div>
    <h1>짝수만 표시하는 예제</h1>
    <template v-for="(item, index) in items" :key="index">
      <p v-if="items">
        {{ item }}
      </p>
    </template>
    <button @click="evenFunction">짝수만 표시</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ForTest7',
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6],
    };
  },
  methods: {
    evenFunction() {
      // TS 선언하는 부분 (number 이면서 array 을 표현)
      const newItems: number[] = this.items.filter((item: number) => {
        return item % 2 === 0;
      });
      this.items = newItems;
    },
  },
});
</script>

<style scoped></style>
<!-- v-for, v-if 를 같은 태그에 적용할 수 없으므로
1. template 에 v-for 작성하고, 그 안에 v-if 작성한다.
-->

<!--
1. 복수 형태의 변수는 s 붙이기
2. 새 변수에 만들 필요없다. 기존 내용을 대체할 것이므로 기존 변수에 덮는다.
-->

<!-- v-show 특징?
v-show 는 html 안에는 남아 있다.
-->

<!-- myArr[0] = 1 처럼 직접 변경하지 않고, myArr.slice 사용하여 변경하는 이유는?
- slice 는 새 복사본을 반환한다. 즉, 원본은 변하지 않는다.
-->