<template>
  <div>
    <h1>부모 컴포넌트에서 자식 컴포넌트를 가져와 사용하는 방법</h1>
    <Hello
      v-for="(item, index) in items"
      :item="item"
      my-name="JH"
      :key="index"
    ></Hello>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Hello from '@/components/chapter12/Hello.vue';

export default defineComponent({
  name: 'CompTest1',
  data() {
    return {
      items: ['철수', '영희', '민수', '광수'],
    };
  },
  components: {
    Hello,
  },
});
</script>
<!-- 학습 목표: 
  1. 부모 컴포넌트에서 자식 컴포넌트로 data 를 내려주는 방법?
  2. v-for 를 사용하여 props 를 내려주는 방법?
    - 부모 컴포넌트에서 작성한 반복문 사용하여 각 item 을 props 로 내려주면, 
    - 자식 컴포넌트에서 props 를 받아서 사용한다.
  3. props 를 직접 내려주는 방법과, props 를 처리를 통해 담아서 내려주는 방법은? (6~7:)
  
-->
