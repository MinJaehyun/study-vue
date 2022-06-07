<template>
  <div class="container">
    <label>글제목: <input type="text" :value="inputTitle" ></label>
    <div>
      <textarea :value="inputTextarea" cols="100" rows="10" style="margin: 10px;"></textarea>
    </div>
    <button @click="$emit('onClickGetList')">목록</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DetailBoard',
  props: {
    inputTextarea: String,
    inputTitle: String,
  },
});
</script>
<style scoped></style>
