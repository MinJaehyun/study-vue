<template>
  <div>
    <h1>퀴즈 맞추기</h1>
    <div v-for="(item, index) in loadData" :key="index">
      <span
        >문제 {{ index + 1 }}. {{ item.text }} (배점: {{ item.score }})
      </span>
      <div>
        정답:
        <span
          v-for="(option, optionsIndex) in item.options"
          :key="index + optionsIndex"
        >
          <input
            type="radio"
            :value="option"
            :name="item.name"
            v-model="item.temp"
          />{{ option }}
        </span>
      </div>
      <br />
    </div>
    <p><button @click="onClickAnswer">정답 제출하기</button></p>
    <p>총 득점: {{ sumScore }}</p>
    <input type="file" @change="onChangeFile" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OxQuiz',
  data() {
    return {
      loadData: [],
      sumScore: 0,
    };
  },
  methods: {
    onClickAnswer() {
      // 방법1. :value 설정하여 간편하게 설정
      // 타입: 초기값 0 설정 했으므로 type 은 number
      this.sumScore = this.loadData.reduce((prev: number, cur: any) => {
        if (cur.temp === cur.checked) {
          prev += cur.score;
        }
        return prev;
      }, 0);

      // 방법2. JSON.parse 설정하여 문자열을 boolean 으로 변경하여 설정하는 방법
      // this.sumScore = this.loadData.reduce((prev: any, cur: any) => {
      //   if (cur.checked === JSON.parse(cur.temp)) {
      //     prev += cur.score;
      //   }
      //   return prev
      // }, 0);
    },
    onChangeFile(e: any) {
      let file: FileReader = e.target.files[0];
      if (file) {
        let reader = new FileReader();
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let vm = this;
        reader.onload = function (e) {
          let json = JSON.parse(e.target?.result as string);
          vm.loadData = json;
        };
        reader.readAsText(file as any);
      }
    },
  },
});
</script>
<!--
1. check box 선택 시, true 값이 들어간다
2. radio btn 선택 시, value 값이 들어간다
-->

<!-- name 설정 이유?
  https://yangbari.tistory.com/28
-->
