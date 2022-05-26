<template>
  <div id="app">
    <ul>
      <li v-for="(item, index) in 10" :key="item.id">
        {{ index }}: {{ item }}*5 = {{ item * 5 }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ForeTest3',
  methods: {},
  created() {
    console.log(this.rows);
  },
});
</script>

<style scoped></style>
