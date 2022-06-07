<template>
  <div>
    <h1>간단한 게시판</h1>
    <p>게시판 데이터 json 파일 읽기</p>
    <input type="file" class="inputFile" @change="onChangeFileReader">
    <button @click="onClickSaveList">게시판 저장하기</button>

    <!-- loadData 있으면 table 구조 보여주기 -->
    <TableListBoard v-if="mode === 'read'"
                    @onClickDetailBoard="onClickDetailBoard"
                    @onClickDeleteBoard="onClickDeleteBoard"
                    @onclickWriteBoard="onclickWriteBoard"
                    :loadBoardData="loadBoardData"
        />

    <!-- WriteBoard -->
    <WriteBoard v-if="mode === 'write'"
                @submitWriteBoard="submitWriteBoard"
                @inputTitle="eventInputTitle"
                @inputTextarea="eventInputTextarea"
                />

    <!-- DetailBoard -->
    <DetailBoard v-if="mode === 'detail'"
                @onClickGetList="onClickGetList"
                 :inputTitle="testObj.title"
                 :inputTextarea="testObj.content"/>
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
      loadBoardData: null,
      testObj: {
        title: '',
        content: '',
      },
      inputTitle: '',
      inputTextarea: '',
      mode: '',
      // listBoard: false,
      // writeBool: false,
      // detailBoard: false,
    };
  },
  components: {
    TableListBoard,
    WriteBoard,
    DetailBoard,
  },
  computed: {
    initializedWrite() {
      return {
        id: `${this.loadBoardData.length + 1}`,
        title: this.testObj.title,
        content: this.testObj.content,
        searchCount: '0' };
    }
  },
  methods: {
    eventInputTitle(data: any){
      this.testObj.title = data
    },
    eventInputTextarea(data: any){
      this.testObj.content = data
    },
    // 리스트 저장하기
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
      a.click()
    },
    // 게시글 목록 불러오기
    onClickGetList(){
      this.mode = 'read';
      // this.listBoard = true;
      // this.writeBool = false;
      // this.detailBoard = false;
    },
    // 게시글 상세 화면 설정 및 실행
    onClickDetailBoard(index: any){
      // 화면 띄우기
      // this.listBoard = false;
      // this.writeBool = false;
      this.mode = 'detail';
      // this.detailBoard = true;
      this.onChangeDetailBoard(index)
    },
    // 게시글 상세 화면 띄우기
    onChangeDetailBoard(index: any){
      this.testObj = this.loadBoardData[index];
      // this.inputTitle = this.loadBoardData[index].title;
      // this.inputTextarea = this.loadBoardData[index].content;
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
      this.mode = 'write'
      // this.writeBool = true;
      // this.listBoard = false;
    },
    // 게시글 제출
    submitWriteBoard(){
      // let obj = { id: `${this.loadBoardData.length + 1}`, title: this.inputTitle, content: this.inputTextarea, searchCount: '0' };
      // let obj = { id: `${this.loadBoardData.length + 1}`, title: this.testObj.title, content: this.testObj.content, searchCount: '0' };
      this.loadBoardData.push(this.initializedWrite);
      this.inputTitle = '';
      this.inputTextarea = '';
      this.mode = 'read';
      // this.initInput();
      // this.listBoard = true;
      // this.writeBool = false;
    },
    // 초기화
    // initInput(){
    //   this.inputTitle = '';
    //   this.inputTextarea = '';
    // },
    // 파일 선택 후 목록 불러오기
    onChangeFileReader(e: { target: { files: FileReader[]; }; }){
      let file = e.target.files[0];
      if(file) {
        let reader = new FileReader()
        // let vm = this;
        // this 를 화살표 함수에서 사용하면 전역 객체로 바인딩한다.
        reader.onload = (e) => {
          let json = JSON.parse(e.target.result as string)
          this.loadBoardData = json.board[0];
          this.mode = 'read';
          // this.listBoard = true;
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
<!-- refactoring 이 후
1. v-if 를 하위 컴포넌트에서 처리할 필요없다.
2. 불필요한 props 를 내려줄 필요없다.
3. input 값을 객체로 만들어 내려주면 코드가 간결해진다.
4. mode 로 컴포넌트를 처리할 수 있다.
5. id++ 증가 처리되는 과정은 computed 로 처리한다.
6. 초기화 코드 같은 경우, 재사용하는 곳이 1곳 이하이면 사용하지 않는다.
7.
-->