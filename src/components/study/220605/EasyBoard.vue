<template>
  <div>
    <h1>간단한 게시판</h1>
    <p>게시판 데이터 json 파일 읽기</p>
    <input type="file" class="inputFile" @change="onChangeFileReader">
    <button>게시판 저장하기</button>
    <!-- if loadData 있으면 table 구조 보여주기-->
    <table v-if="loadBoardData" class="table">
      <tr>
        <th style="width: 200px" v-for="(item, index) in header" :key="index">{{ item }}</th>
      </tr>
      <tbody>
        <tr v-for="(line, index) in loadBoardData" :key="index">
          <td>{{ line.id }}</td>
          <td>{{ line.title }}</td>
          <td>{{ line.searchCount }}</td>
          <button>삭제</button>
        </tr>
      </tbody>
    </table>
    <button>글쓰기</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EasyBoard',
  data() {
    return {
      loadBoardData: '',
      header: ['글 번호', '글 제목', '조회수'],
    };
  },
  methods: {
    onChangeFileReader(e: { target: { files: FileReader[]; }; }){
      let file = e.target.files[0];
      if(file) {
        let reader = new FileReader()
        // let vm = this;
        reader.onload = (e) => {
          let json = JSON.parse(e.target.result as string)
          this.loadBoardData = json.board[0];
          console.log(this.loadBoardData)
        }
        reader.readAsText(file as any)
      }
    },
  },
});
</script>
<style scoped>
.inputFile, .table {
  border: 1px solid #0069d9;
  margin: 10px;
  padding: 10px 12px;
}
</style>
<!-- 참고:
1. https://codepen.io/aldo814/pen/WNejQgG
2.
-->

<!--
1. <thead> 대신 <tr> 사용하기
-->