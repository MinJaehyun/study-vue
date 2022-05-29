<template>
  <div>
    <li v-for="(item, index) in 10" :key="index">
      {{ index }}: {{ item }} * 5 = {{ item * 5 }}
    </li>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ForeTest3',
});
</script>

<style scoped></style>
