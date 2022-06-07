<template>
  <div class="container">
    <table  class="table">
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
    <button @click="$emit('onclickWriteBoard')">글쓰기</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: 'TableListBoard',
  props: {
    loadBoardData: Object as PropType<any>,
  },
  data() {
    return {
      headers: ['글 번호', '글 제목', '조회수']
    }
  }
});
</script>
<style scoped>
.table {
  border: 1px solid #0069d9;
  margin: 10px;
  padding: 10px 12px;
}
</style>
