<template>
  <div>
    <h1>퀴즈 맞추기</h1>
    <div v-for="(item, index) in loadData" :key="index">
      <span>문제 {{ index + 1 }}. {{ item.text }} (배점: {{ item.score }}) </span>
      <div>
        정답:
        <!-- {{ item.options }} -->
        <span v-for="(option, optionsIndex) in item.options" :key="index + optionsIndex" >
          <!-- :value="option" 지정하는 부분도 이해하기!! -->
          <!-- :name="" 이해하기        -->
          <!-- v-model="item.temp" 이해하기         -->
          <input type="radio" :value="option" :name="item.name" v-model="item.temp"/>{{option}}
        </span>
      </div>
        <!-- :value="true" 지정했을 경우, radio 선택 시, 해당 :value 에 설정한 값을 v-model 에 지정한 변수에 담기게 된다 -->
        <!-- {{ item.temp }} -->
      <br>
        <!-- {{ typeof item.temp}} -->
    </div>
    <p><button @click="onClickAnswer">정답 제출하기</button></p>
    <p>총 득점: {{ sumScore }}</p>
    <input type="file" @change="onChangeFile">
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
    onClickAnswer(){
      // 방법1. :value 설정하여 간편하게 설정
      // 타입: 초기값 0 설정 했으므로 type 은 number.
      this.sumScore = this.loadData.reduce((prev: number, cur: any) => {
        if (cur.temp === cur.checked) {
          prev += cur.score
        }
        return prev
      }, 0)

      // 방법2. JSON.parse 설정하여 문자열을 boolean 으로 변경하여 설정하는 방법
      // this.sumScore = this.loadData.reduce((prev: any, cur: any) => {
      //   if (cur.checked === JSON.parse(cur.temp)) {
      //     prev += cur.score;
      //   }
      //   return prev
      // }, 0);
    },
    onChangeFile(e: any){
      let file: FileReader = e.target.files[0];
      if (file) {
        let reader = new FileReader()
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let vm = this;
        reader.onload = function(e) {
          let json = JSON.parse(e.target?.result as string)
          vm.loadData = json;
        }
        reader.readAsText(file as any)
      }
    },
  },
});
</script>
<style scoped></style>
<!--
1. checkbox 는 선택 시, true 값
2. radio btn 는 선택 시, value 값이 들어간다.
-->

<!-- string 값을 boolean 으로 만드는 방법을 아는지?
1. Boolean(item.temp) 이 맞는지? string 을 Boolean 타입으로 검사하는게 맞는지 확인하기
2. filter 대신 reduce 사용하기
-->

<!-- 8~9: :value="true" 이해하는지?
1. html 에 {{ value }} 템플릿 문법을 사용할 수 없다!
2. input radio 타입 attr 가진 태그의 value
-->

<!-- name 설정하는 이유?
https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input/radio
-->

<!-- NOTE: 구조 이해 하기
1. loadData 의 각각의 item 을 뽑고, 각각의 item 에 여러개의 속성에 접근하기 위해
가져온 데이터에 item.options 를 사용하여 반복 처리할 수 있다.
-->

<!-- 10:
:value 를 바인딩하여
-->