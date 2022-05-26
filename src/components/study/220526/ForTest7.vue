<template>
  <div>
    <h1>짝수만 표시하는 예제</h1>
    <template v-for="item in items" :key="item.id">
      <ul>
        <li v-if="items">
          {{ item }}
        </li>
      </ul>
    </template>
    <button @click="evenFunction">짝수만 표시</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'fortest7_',
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6],
      newItems: [],
    };
  },
  methods: {
    evenFunction() {
      const items: number[] = this.items.filter((item: number) => {
        return item % 2 === 0;
      });
      this.items = items;
    },
  },
});
</script>

<style scoped></style>
<!-- 
1. template 만들어서 v-for 적용하고, 그 안에서 v-if 적용한다. 
2. 복수 형태는 s 붙여서 나타내기
3. 새로운 변수에 대입할 필요없다. 기존 내용을 대체하는 것이므로, 기존 변수에 덧붙이면 된다.

* 체크 박스
1. 체크하면 체크박스 상태가 true 로 변경되며, 해당 위치에 v-model 을 통해 변수
값이 true 로 변경된다.

* v-if, v-show 차이점?
- v-if 는 html 안에 남아 있지 않는다.
- v-show 는 html 안에는 남아 있다.

* myArr[0] = 1 이렇게 직접 변경하지 않고, myArr.slice 사용하여 변경하는 이유는?
- 새 복사본을 반환한다. 그리고 원본은 바뀌지 않는다.
-->
