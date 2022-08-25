<template>
  <div>
    <h1>주제: vue.js 을 서술하시오</h1>
    <h4>
      금지 문자(,로 나누어 복수입력가능)
      <input type="text" v-model="inputText" />
    </h4>
    <!-- <h4>제한 시간을 입력하세요(초)<input type="text" /></h4>
    <h4>남은 시간 0초</h4> -->
    <textarea cols="30" rows="10" v-model="textareaBox"></textarea>
    <h4>{{ textareaBox.trim().length }} 개의 문자를 입력하였습니다</h4>
    <!-- <h4>별점: {{ cnt }}(금지문자 1개당 12점)</h4> -->
  </div>
</template>
<script lang="ts">
export default {
  name: 'Practice82_',
  data() {
    return {
      inputText: '안녕,하세요,글쎄',
      textareaBox: '',
      cnt: 0,
    };
  },
  watch: {
    textareaBox() {
      let arr = this.inputText.replaceAll(' ', '').split(',');
      for (let i = 0; i < arr.length; i++) {
        let pos = this.textareaBox.indexOf(arr[i]);
        if (pos > -1) {
          alert('금지어를 입력하셨습니다.');
          // NOTE: 입력문자에서 금지 문자를 삭제한다.
          this.textareaBox = this.textareaBox.substr(0, pos);
        }
      }
    },
  },
};
</script>
