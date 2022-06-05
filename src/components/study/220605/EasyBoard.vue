<template>
  <div>
    <h1>간단한 게시판</h1>
    <p>게시판 데이터 json 파일 읽기</p>
    <input type="file" class="inputFile" @change="onChangeFileReader">
    <button>게시판 저장하기</button>

    <!-- if loadData 있으면 table 구조 보여주기 -->
    <table v-if="listBoard" class="table">
      <tr>
        <th style="width: 200px" v-for="(item, index) in header" :key="index">{{ item }}</th>
      </tr>
      <tbody>
        <tr v-for="(line, index) in loadBoardData" :key="index">
          <td @click="onClickDetailBoard(index)" style="cursor: pointer">{{ line.id }}</td>
          <td @click="onClickDetailBoard(index)" style="cursor: pointer">{{ line.title }}</td>
          <td>{{ line.searchCount }}</td>
          <button @click="onClickDeleteBoard(index)">삭제</button>
        </tr>
      </tbody>
    </table>
    <button v-if="listBoard" @click="onclickWriteBoard">글쓰기</button>

    <!-- WriteBoard -->
    <form @submit.prevent="submitWriteBoard()" class="container" v-if="writeBool">
      <label>글제목: </label>
      <input type="text" v-model="inputTitle">
      <div>
        <textarea v-model="inputTextarea" cols="100" rows="10" style="margin: 10px;"></textarea>
      </div>
      <input type="submit" value="저장">
    </form>

    <!-- DetailBoard -->
    <div class="container" v-if="detailBoard">
      <label>글제목: </label>
      <input type="text" v-model="inputTitle">
      <div>
        <textarea v-model="inputTextarea" cols="100" rows="10" style="margin: 10px;"></textarea>
      </div>
      <button @click="onClickGetList">목록</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EasyBoard',
  data() {
    return {
      header: ['글 번호', '글 제목', '조회수'],
      loadBoardData: '',
      inputTitle: '',
      inputTextarea: '',
      listBoard: false,
      writeBool: false,
      detailBoard: false,
    };
  },
  methods: {
    // 게시글 목록 불러오기
    onClickGetList(){
      this.listBoard = true,
      this.writeBool = false,
      this.detailBoard = false
    },
    // 게시글 상세 화면 설정 및 실행
    onClickDetailBoard(index: any){
      // 화면 띄우기
      this.listBoard = false;
      this.writeBool = false;
      this.detailBoard = true;
      this.submitDetailBoard(index)
    },
    // 게시글 상세 화면 띄우기
    submitDetailBoard(index: any){
      // console.log(index); // 0
      // cl 로 loadBoardData 의 index 의 inputTitle, inputTextarea 값을 확인한다
      // console.log(this.loadBoardData) // Array(3)
      // console.log(this.loadBoardData[index]) // {첫 번째 글}
      this.inputTitle = this.loadBoardData[index].title;
      this.inputTextarea = this.loadBoardData[index].content;
      this.loadBoardData[index].searchCount = String(Number(this.loadBoardData[index].searchCount) + 1)
      // "0" + 1 는 01 이다
      // "0" 을 Number 로 바꿔서 += 1 더해주고, 결과값인 1을 String() 으로 변환한다
      console.log(typeof this.loadBoardData[index])
    },
    // 게시글 삭제
    onClickDeleteBoard(index: any){
      this.loadBoardData.splice(index, 1);
      console.log(this.loadBoardData);
      // FIXME: 삭제 후 id 값이 재정렬 되야한다..
    },
    // 게시글 제출
    submitWriteBoard(){
      // console.log(this.loadBoardData[0]) // { id: '1', title: '첫 번째 글', content: '첫 번째 글의 내용입니다.', searchCount: '0' }
      // console.log(this.loadBoardData.length) // 3
      let obj = { id: `${this.loadBoardData.length + 1}`, title: this.inputTitle, content: this.inputTextarea, searchCount: '0' };
      this.loadBoardData.push(obj)

      // input 값 초기화
      this.initInput();
      // list 나타내기
      this.listBoard = true;
      this.writeBool = false;
    },
    // 초기화
    initInput(){
      this.inputTitle = '';
      this.inputTextarea = '';
    },
    // 게시글 생성
    onclickWriteBoard(){
      this.writeBool = true;
      this.listBoard = false;
    },
    // 파일 선택 후 목록 불러오기
    onChangeFileReader(e: { target: { files: FileReader[]; }; }){
      let file = e.target.files[0];
      if(file) {
        let reader = new FileReader()
        // let vm = this;
        reader.onload = (e) => {
          let json = JSON.parse(e.target.result as string)
          this.loadBoardData = json.board[0];
          // console.log(this.loadBoardData)
          this.listBoard = true;
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
-->
<!--
1. <thead> 대신 <tr> 사용하기
-->