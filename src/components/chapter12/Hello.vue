<template>
  <div>
    카운터: <button @click="clickCount">증가</button>{{ count }}
    <hr />
    나는 {{ item }} 입니다.
    <hr />
  </div>
  {{ myName }}
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Hello_',
  props: {
    item: String,
    myName: String,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    clickCount() {
      this.count += 1;
    },
  },
  // created() {
  //   this.myName;
  // },
});
</script>
