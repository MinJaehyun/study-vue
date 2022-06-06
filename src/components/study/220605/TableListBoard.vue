<template>
  <div class="container">
    <table v-if="listBoard" class="table">
      <tr><th style="width: 200px" v-for="(item, index) in headers" :key="index">{{ item }}</th></tr>
      <tbody>
      <tr v-for="(line, index) in loadBoardData" :key="index">
        <td @click="$emit('onClickDetailBoard', index)" style="cursor: pointer">{{ line.id }}</td>
        <td @click="$emit('onClickDetailBoard', index)" style="cursor: pointer">{{ line.title }}</td>
        <td>{{ line.searchCount }}</td>
        <input type="submit" @click="$emit('onClickDeleteBoard', index)" value="삭제">
      </tr>
      </tbody>
    </table>
    <button v-if="listBoard" @click="$emit('onclickWriteBoard')">글쓰기</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TableListBoard',
  props: {
    headers: Array,
    loadBoardData: Object,
    listBoard: Boolean,
    writeBool: Boolean,
    detailBoard: Boolean,
  },
});
</script>
<style scoped>
.table {
  border: 1px solid #0069d9;
  margin: 10px;
  padding: 10px 12px;
}
</style>
