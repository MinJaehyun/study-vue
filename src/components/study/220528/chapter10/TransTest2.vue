<template>
  <div class="container">
    <h1>버튼 누르면 리스트 증감하며 애니메이션 효과 주는 예제</h1>
    <transition-group>
      <li v-for="(flower, index) in flowers" :key="index">{{ flower }}</li>
    </transition-group>
    <input type="text" v-model="inputFlower" />
    <button @click="addFlower">추가</button>
    <div>
      <button @click="deleteLastFlower">맨 뒤 1개 삭제</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TransTest2',
  data() {
    return {
      inputFlower: '',
      flowers: ['벚꽃', '산수유', '진달래', '철죽'],
    };
  },
  methods: {
    addFlower() {
      this.flowers.push(this.inputFlower);
    },
    deleteLastFlower() {
      // console.log(this.flowers.length)
      this.flowers.splice(this.flowers.length - 1, 1);
    },
  },
});
</script>
<style scoped>
.v-enter-from {
  opacity: 0;
}
.v-enter-active {
  transition: 1.5s;
}
.v-enter-to {
  opacity: 1;
  transform: translateY(-5px);
}
.v-leave-from {
  opacity: 1;
}
.v-leave-active {
  transition: 1.5s;
}
.v-leave-to {
  opacity: 0;
  transform: translateY(15px);
}
.container {
  text-align: left;
}
</style>
<!--
1. 애니메이션 효과를 나타낼 부분을 <transition> 처리하는게 포인트
2. 이 예제에서는 리스트 증감에 애니 효과를 주는 것이 목표이므로 li 를 <transition> 처리한다.
3. <transition-group> 는 꼭 li 태그를 사용할 필요 없다!!
- https://kr.vuejs.org/v2/guide/transitions.html - 리스트 트랜지션 내용
-->
