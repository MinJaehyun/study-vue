<template>
  <div id="app">
    <label>
      <input type="checkbox" v-model="myVisible" />
      표시
    </label>
    <p v-if="myVisible">체크박스 ON</p>
    <p v-else :style="{ display: noneDisplay }">체크박스 OFF</p>
    <hr />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IfTest1',
  data() {
    return {
      myVisible: false,
    };
  },
  computed: {
    noneDisplay() {
      return 'none';
    },
  },
});
</script>

<style scoped></style>
<!-- checkbox 는 최초 fasle 상태이고, 선택하면 checkbox 는 true 상태이다. 
v-model 을 통해 체크상태를 확인할 수 있다. -->

<!--v-show 보기-->
