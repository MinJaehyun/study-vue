<template>
  <div>{{ $store.state.counter }}</div>
  <button @click="setAsyncCounter">동기적 카운터 증가</button>
  <button @click="setSyncCounter">비동기적 카운터 증가</button>
</template>

<script lang="ts">
export default {
  name: 'test-vuex',
  methods: {
    setAsyncCounter() {
      this.$store.commit('setAsyncCounter');
    },
    setSyncCounter() {
      this.$store.dispatch('setSyncCounter');
    },
  },
};
</script>

<style scoped></style>
