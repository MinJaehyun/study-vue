<template>
  <div id="app">
    <select v-model="myColor" multiple style="width: 150px">
      <option>red</option>
      <option>green</option>
      <option>blue</option>
    </select>
    <p>선택한 색상은 {{ myColor }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ModelTest9',
  data() {
    return {
      myColor: [],
    };
  },
});
</script>

<style scoped></style>
