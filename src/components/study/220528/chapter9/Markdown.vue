<template>
  <div>
    <textarea v-model="input" cols="30" rows="10"></textarea>
    <div v-html="convertMarkdown"></div>
  </div>
</template>

<script lang="ts">
import { marked } from 'marked';

export default {
  name: 'Markdown_',
  data() {
    return {
      input: '',
    };
  },
  methods: {},
  computed: {
    // input 변하면 convertMarkdown 실행
    convertMarkdown() {
      return marked(this.input);
    },
  },
};
</script>
<!-- TS 에서 marked 사용법
  1. $ npm i marked --save-dev
  2. $ npm i @types/marked -D
  3. v-model 로 양방향 데이터 바인딩 처리 후,
  4. v-html 로 함수 실행하여 v-model data 를 marked() 로 감싸서 실행한다.
 -->
