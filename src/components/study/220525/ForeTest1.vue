<template>
  <div>
    <h1>금일 식사 리스트</h1>
    <ul>
      <li v-for="item in myArray" :key="item.id">{{ item }}</li>
    </ul>
    <hr />
    <ul>
      <li v-for="obj in myObj" :key="obj.id">{{ obj.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ForeTest1',
  data() {
    return {
      myArray: ['오무라이스', '돈가스', '만두'],
      myObj: [
        { name: '국밥', price: 10000 },
        { name: '국수', price: 7000 },
      ],
    };
  },
});
</script>

<style scoped></style>
<!-- v-for 는 배열뿐만 아니라, 객체까지 나타낼 수 있다. -->
