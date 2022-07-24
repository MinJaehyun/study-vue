<template>
  <div>
    <h1>ToDo 리스트</h1>
    <div v-for="(item, index) in items" :key="index">
      <!-- v-model="item.checked"
      1. items.checked 로 접근하면 모든 체크가 선택된다.
      2. item.checked 로 접근해야 체크가 하나씩 선택된다.
      -->
      <input type="checkbox" v-model="item.checked" />
      <span :class="{ 'line-through': item.checked }">{{ item.text }}</span>
    </div>
    <!-- checked 개수 --><!-- 전체 개수 -->
    <p>{{ checkedCount.length }} / {{ items.length }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TodoList1',
  data() {
    return {
      items: [
        // 여러 속성을 전달하기 위해 객체를 설정한다.
        { checked: false, text: '빵사기' },
        { checked: false, text: '커피사기' },
      ],
      count: 0,
    };
  },
  methods: {},
  computed: {
    checkedCount() {
      // items 를 반복하면서 items[0].checked 값이 true 의 개수를 구한다
      return this.items.filter((item: any) => {
        return item.checked === true;
      });
    },
  },
});
</script>

<style scoped>
.line-through {
  text-decoration: line-through;
}
</style>
<!--
1. 체크 시, 해당값에 style 을 toggl 해야 하므로, :class 사용한다.
2. style="text-decoration:line-through
3. filter().length  // 필터 처리가 끝난 다음에 length 를 사용하면 된다.
-->
