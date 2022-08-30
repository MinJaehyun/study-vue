<template>
  <div>
    <EasyBoard />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import EasyBoard from '@/components/chapter14/EasyBoard.vue';

export default defineComponent({
  name: 'EasyBoardPage',
  data() {
    return {};
  },
  methods: {},
  components: {
    EasyBoard,
  },
});
</script>
<style scoped></style>
