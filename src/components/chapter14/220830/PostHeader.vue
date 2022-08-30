<template>
  <div>
    <h1>간단한 게시판</h1>
    <h5>게시판 데이터 json 파일 읽기</h5>
    <input type="file" @change="onClickFile" />

    <!-- 게시판 저장하기: 함수 실행 시, loadData 를 화면에 출력 -->
    <button @click="printTable">게시판 저장하기</button>
    <ul>
      <template v-for="item in loadData" :key="item.no">
        <li
          v-if="postPosition === 1"
          align="left"
          style="list-style: none"
          class="post-frame"
          @click.self.prevent="detailPost(item.no)"
        >
          <p>글번호: {{ item.no }}</p>
          <p>글내용: {{ item.content }}</p>
          <p>조회수: {{ item.view }}</p>
          {{ item.no }}
          <button @click="deletePost(item.no)">삭제</button>

          <br /><br />
        </li>
        <div v-if="postPosition === 1" class="last-hr"></div>
      </template>
    </ul>

    <!-- 글쓰기 클릭 시, 기존 게시글 하단에 data 를 추가한다 -->
    <button @click="createPost">글쓰기</button>
    <ul>
      <li v-if="postPosition === 2" align="left" style="list-style: none">
        <span>글제목:</span>
        <input type="text" v-model="inputTitle" />
        <br />
        <span>글내용:</span>
        <input type="textarea" v-model="inputContent" />
        <br />
        <button @click="savePost">저장</button>
      </li>
    </ul>

    <!-- 게시글 상세보기 -->
    <ul>
      <li v-if="postPosition === 3" align="left" style="list-style: none">
        <span>글제목:</span>
        <!-- readonly 추가하여 변경불가 설정 -->
        <input v-model="inputTitle" readonly />
        <br />
        <span>글내용:</span>
        <input v-model="inputContent" readonly />
        <br />
        <button @click="printTable">목록</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: 'PostHeader',

  data() {
    return {
      loadData: '',
      postPosition: 0,
      inputTitle: '',
      inputContent: '',
    };
    /** postPosition
     * 0: 기본값
     * 1: 게시판 저장하기
     * 2: 글쓰기
     * 3: 게시글 상세보기
     */
  },
  methods: {
    onClickFile(e: { target: { files: FileReader[] } }): void {
      let file = e.target.files[0];
      // console.log(file);

      if (file) {
        // fileReader 설정
        let reader = new FileReader();

        // json -> string
        reader.onload = e => {
          let json = JSON.parse(e.target?.result as string);
          this.loadData = json.board;
        };
        // reader.readAsText 메소드는 텍스트 파일 내용 읽어들일 때 사용됨
        reader.readAsText(file as any);
      }
    },
    printTable() {
      // <!-- 함수를 실행하면 가져온 loadData 를 화면에 테이블로 나타낸다 -->
      this.postPosition = 1;
    },
    deletePost(no: string) {
      console.log('this.loadData: ', this.loadData);
      this.loadData.splice(Number(no) - 1, 1);
      if (Number(no) <= 2) {
        // testing..
      }
      this.postPosition = 1;
    },
    createPost() {
      // 글쓰기 클릭 시, 화면 전환하며, 글제목과 글내용을 입력하는 input box 2개와 저장 및 목록 버튼을 만든다
      this.postPosition = 2;
      console.log(this.loadData.length);
    },
    savePost() {
      this.loadData.push({
        no: this.loadData.length + 1,
        title: this.inputTitle,
        content: this.inputContent,
        view: 1,
      });
      this.postPosition = 1;
    },
    detailPost(no: string) {
      this.postPosition = 3;
      console.log(this.loadData[Number(no) - 1]);
      this.inputTitle = this.loadData[Number(no) - 1].title;
      this.inputContent = this.loadData[Number(no) - 1].content;
    },
  },
};
</script>
<style>
/* Post list */
.post-frame {
  cursor: pointer;
  color: #fff;
  padding: 6px 12px;
  border: 2px;
  background-color: gray;
  border-radius: 6px;
  /* mouse hover 시, 시간 지난 후 색상 변경 */
  transition: background-color 1.6s;
}
/*  */
.post-frame:hover {
  background-color: #584168;
}
/* 마지막 hr */
.last-hr {
  border-top: 3px double #bbb;
}
</style>
<!-- 버튼 클릭 시, 내용 출력하므로 input @change 아닌, button 에 @click 이벤트를 건다 -->
<!-- 아.. file change 되면 실행되는 함수와, post save btn 클릭하는 함수는 따로 작성해야 한다 -->
