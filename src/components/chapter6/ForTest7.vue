<template>
  <div>
    <h1>짝수만 표시</h1>
    <template v-for="(item, index) in items" :key="index">
      <p v-if="items">
        {{ item }}
      </p>
    </template>
    <button @click="evenData">짝수만 표시</button>
    <button @click="originData">원래대로</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ForTest7',
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6],
      originItems: [1, 2, 3, 4, 5, 6],
    };
  },
  methods: {
    evenData() {
      const newItems: number[] = this.items.filter((item: number) => {
        return item % 2 === 0;
      });
      this.items = newItems;
    },
    originData() {
      console.log('this.items: ', this.items);
      this.items = this.originItems;
    },
  },
});
</script>
<!-- 
  v-for, v-if 를 같은 태그에 적용할 수 없으므로 template 에 v-for 작성하고, 그 안에 v-if 작성한다.
-->

<!-- 복수 형태 변수 s 붙이기 -->

<!-- v-show 특징: v-show 는 html 이 남아 있다 -->

<!-- myArr[0] = 1 처럼 변경하지 않고, splice 사용하여 변경하는 이유는?
 splice 는 새 복사본을 반환한다. 즉, 원본은 변하지 않는다.
-->
