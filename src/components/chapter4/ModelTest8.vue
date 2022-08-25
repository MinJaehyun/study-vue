<template>
  <select v-model="myColor">
    <option disabled value="">색을 선택해 주세요</option>
    <option>red</option>
    <option>green</option>
    <option>blue</option>
  </select>
  <p :style="{ color: myColor }">선택한 색상은 {{ myColor }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ModelTest',
  data() {
    return {
      myColor: '',
    };
  },
});
</script>
<!-- select option 에서 선택한 값이 v-model 지정한 변수에 지정된다. -->
