<template>
  <div>
    <h1>간단한 게시판</h1>
    <p>게시판 데이터 json 파일 읽기</p>
    <input type="file" class="inputFile" @change="onChangeFileReader">
    <button @click="onClickSaveList">게시판 저장하기</button>

    <!-- loadData 있으면 table 구조 보여주기 -->
    <TableListBoard
        @onClickDetailBoard="onClickDetailBoard" @onClickDeleteBoard="onClickDeleteBoard" @onclickWriteBoard="onclickWriteBoard"
        :loadBoardData="loadBoardData" :listBoard="listBoard" :writeBool="writeBool"
        :detailBoard="detailBoard" :headers="headers"
        :inputTitle="inputTitle" :inputTextarea="inputTextarea"/>

    <!-- WriteBoard -->
    <WriteBoard @submitWriteBoard="submitWriteBoard" @inputTitle="eventInputTitle" @inputTextarea="eventInputTextarea"
                :inputTitle="inputTitle" :inputTextarea="inputTextarea" :writeBool="writeBool"/>

    <!-- DetailBoard -->
    <DetailBoard v-if="detailBoard"
        @onClickGetList="onClickGetList" :detailBoard="detailBoard"
        :inputTitle="inputTitle" :inputTextarea="inputTextarea"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TableListBoard from "@/components/study/220605/TableListBoard.vue";
import WriteBoard from "@/components/study/220605/WriteBoard.vue"
import DetailBoard from "@/components/study/220605/DetailBoard.vue";

export default defineComponent({
  name: 'EasyBoard',
  data() {
    return {
      headers: ['글 번호', '글 제목', '조회수'],
      loadBoardData: null,
      inputTitle: '',
      inputTextarea: '',
      listBoard: false,
      writeBool: false,
      detailBoard: false,
    };
  },
  components: {
    TableListBoard,
    WriteBoard,
    DetailBoard,
  },
  methods: {
    eventInputTitle(data: any){
      this.inputTitle = data
    },
    eventInputTextarea(data: any){
      this.inputTextarea = data
    },
    // FIXME: 리스트 저장하기
    onClickSaveList(){
      let data = this.loadBoardData
      if (data.length === 0) return;
      let filename = 'src/assets/data/220605/board.json';
      if (typeof data === 'object') {
         data = JSON.stringify(data, undefined, 2);
         // console.log(data) // json 문자열
      }
      let blob = new Blob([data], {type: 'application/json'});
      // console.log(blob) // {size: 480, type: 'text/json'}
      let a = document.createElement('a');
      // console.log(a)
      // <a download="src/assets/data/220605/board.json" href="blob:http://localhost:8080/0b19f052-09c7-435c-b9b3-f1d4bec968a3" data-downloadurl="text/json:src/assets/data/board.json:blob:http://localhost:8080/0b19f052-09c7-435c-b9b3-f1d4bec968a3"></a>
      a.download = filename;
      // console.log(a)
      a.href = window.URL.createObjectURL(blob);
      // console.log(a)
      // <a download="src/assets/data/220605/board.json" href="blob:http://localhost:8080/1a8c243c-547f-4849-af46-b66a671388f1" data-downloadurl="text/json:src/assets/data/220605/board.json:blob:http://localhost:8080/1a8c243c-547f-4849-af46-b66a671388f1"></a>
      a.dataset.downloadurl = ['application/json', a.download, a.href].join(':');
      console.log(a)
    },
    // 게시글 목록 불러오기
    onClickGetList(){
      this.listBoard = true;
      this.writeBool = false;
      this.detailBoard = false;
    },
    // 게시글 상세 화면 설정 및 실행
    onClickDetailBoard(index: any){
      // 화면 띄우기
      this.listBoard = false;
      this.writeBool = false;
      this.detailBoard = true;
      this.onChangeDetailBoard(index)
    },
    // 게시글 상세 화면 띄우기
    onChangeDetailBoard(index: any){
      this.inputTitle = this.loadBoardData[index].title;
      this.inputTextarea = this.loadBoardData[index].content;
      this.loadBoardData[index].searchCount = String(Number(this.loadBoardData[index].searchCount) + 1)
      // console.log(typeof this.loadBoardData[index])
    },
    // 게시글 삭제
    onClickDeleteBoard(index: any){
      this.loadBoardData.splice(index, 1);
      // console.log(this.loadBoardData);
      // FIXME: 삭제 후 id 값이 재정렬 되야한다
    },
    // 게시글 생성
    onclickWriteBoard(){
      this.writeBool = true;
      this.listBoard = false;
    },
    // 게시글 제출
    submitWriteBoard(){
      let obj = { id: `${this.loadBoardData.length + 1}`, title: this.inputTitle, content: this.inputTextarea, searchCount: '0' };
      this.loadBoardData.push(obj)
      this.initInput();
      this.listBoard = true;
      this.writeBool = false;
    },
    // 초기화
    initInput(){
      this.inputTitle = '';
      this.inputTextarea = '';
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
          this.listBoard = true;
        }
        reader.readAsText(file as any)
      }
    },
  },
});
</script>
<style scoped>
.inputFile {
  border: 1px solid #0069d9;
  margin: 10px;
  padding: 10px 12px;
}
</style>