<template>
  <HelloWorld msg="Vue.js + TypeScript todoList App" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: 'App',
  created() {
    console.log('hi');
    this.testString();
  },
  methods: {
    testString() {
      let str: string = 'hi';
    },
  },
  components: {
    HelloWorld,
  },
});
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
