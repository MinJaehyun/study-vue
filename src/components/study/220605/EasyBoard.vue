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

interface testObj { // 인터페이스 참고하기
  id: string,       // id? 설정하면, 아래 testObj 의 id 는 없어도 된다(option)
  title: string,
  content: string,
  searchCount: string,
}
interface dataObj {
  loadBoardData: {content: string, title: string, searchCount: string}[], // ts 배열 참고하기
  testObj: { // testObj 의 각각의 속성의 타입을 명시할 수 있다.
    content: string;
    title: string;
  },
  inputTitle: string,
  inputTextarea: string,
  mode: string
}

export default defineComponent({
  name: 'EasyBoard',
  data(): dataObj {  // 함수 뒤 ts 는 return 타입을 명시한다.
    return {
      loadBoardData: [{
        title: '',
        content: '',
        searchCount: '',
      }],
      testObj: {
        title: '',
        content: '',
      },
      inputTitle: '',
      inputTextarea: '',
      mode: '',
    };
  },
  components: {
    TableListBoard,
    WriteBoard,
    DetailBoard,
  },
  computed: {
    initializedWrite(): testObj {
      return {
        id: `${this.loadBoardData.length + 1}`, // id 는 문자열이므로 선언은 stirng 으로 한다
        title: this.testObj.title,
        content: this.testObj.content,
        searchCount: ''
      };
    }
  },
  methods: {
    eventInputTitle(data: string): string{
      return this.testObj.title = data;
    },
    eventInputTextarea(data: string): string{
      return this.testObj.content = data;
    },
    // 리스트 저장하기
    onClickSaveList(): undefined {
      let data: string = '' as string;  // NOTE: 이 부분 학습하기!!
      if (this.loadBoardData.length === 0) return;
      let filename = 'src/assets/data/220605/board.json';
      if (typeof data === 'object') { // 위에 string 설정하였으므로 여기서 타입체크 불필요하다.
         data = JSON.stringify(data, undefined, 2);
         // 위 data 는 문자열이 아니여야 한다. 이 뜻은 JSON.stringify(data, undefined, 2) 이 문자열이 아니여야 한다는 의미이다.
         // console.log(data) // json 문자열
      }
      let blob = new Blob([data], {type: 'application/json'});
      // console.log(blob) // {size: 480, type: 'text/json'}
      let a = document.createElement('a');
      // console.log(a)
      // <a download="src/assets/data/220605/board.json" href="blob:http://localhost:8080/0b19f052-09c7-435c-b9b3-f1d4bec968a3" data-downloadurl="text/json:src/assets/data/board.json:blob:http://localhost:8080/0b19f052-09c7-435c-b9b3-f1d4bec968a3"></a>
      a.download = filename;
      a.href = window.URL.createObjectURL(blob);
      // console.log(a)
      // <a download="src/assets/data/220605/board.json" href="blob:http://localhost:8080/1a8c243c-547f-4849-af46-b66a671388f1" data-downloadurl="text/json:src/assets/data/220605/board.json:blob:http://localhost:8080/1a8c243c-547f-4849-af46-b66a671388f1"></a>
      a.dataset.downloadurl = ['application/json', a.download, a.href].join(':');
      console.log(a)
      a.click()  // 클릭 시, 브라우저에 저장된다. json 데이터에는 저장되지 않는다.
    },
    // 게시글 목록 불러오기
    onClickGetList(): void {
      this.mode = 'read';
    },
    // 게시글 상세 화면 설정 및 실행
    onClickDetailBoard(index: number): void {
      // 화면 띄우기
      this.mode = 'detail';
      this.onChangeDetailBoard(index)
    },
    // 게시글 상세 화면 띄우기
    onChangeDetailBoard(index: number): void {
      this.testObj = this.loadBoardData[index];
      this.loadBoardData[index].searchCount = String(Number(this.loadBoardData[index].searchCount) + 1)
    },
    // 게시글 삭제
    onClickDeleteBoard(index: number): void {
      this.loadBoardData.splice(index, 1);
      // console.log(this.loadBoardData);
      // FIXME: 삭제 후 id 값이 재정렬 되야한다
    },
    // 게시글 생성
    onclickWriteBoard(): void {
      this.mode = 'write'
    },
    // 게시글 제출
    submitWriteBoard(): void {
      this.loadBoardData.push(this.initializedWrite);
      this.inputTitle = '';
      this.inputTextarea = '';
      this.mode = 'read';
    },
    // 파일 선택 후 목록 불러오기
    onChangeFileReader(e: { target: { files: FileReader[]; }; }): void {
      let file = e.target.files[0];
      if(file) {
        let reader = new FileReader()
        // let vm = this;
        // this 를 화살표 함수에서 사용하면 전역 객체로 바인딩한다.
        reader.onload = (e) => {
          let json = JSON.parse(e.target?.result as string)
          this.loadBoardData = json.board[0];
          this.mode = 'read';
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

<!-- 220607. 피드백
1. 기본타입, 함수, 인터페이스, 타입 추론, 타입 호환, 타입 별칭, ts 배열 블로그 검색하기
2. EasyBoard.vue - ts 적용하기
3. 함수가 return 이 없으면 undefined 또는 void 를 사용한다.
4. FIXME: 128: 부터 타입 수정하기!!
-->

<!-- 157: TS2531: Object is possibly 'null'.
- 객체가 비어 있을 수도 있는데 해당 객체의 내부 메소드를 사용하거나 내부 객체 키에 값을 넣어주려고 할 때 입니다.

e.target 값이 있을 수도 비어 있을 수도 있다.
이를 옵셔널체이닝을 사용하여 처리함
-->