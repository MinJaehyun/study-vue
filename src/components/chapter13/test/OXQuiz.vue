<template>
  <div>
    <h1>퀴즈 맞추기</h1>
    <form action="">
      <div align="left" v-for="(quiz, index) in loadData" :key="index">
        <!-- number, text, score -->
        <li style="list-style: none">
          문제 {{ index + 1 }}. {{ quiz.text }} (배점: {{ quiz.score }})
        </li>
        <!-- answer -->
        <span>정답:</span>
        <span v-for="(item, index) in quiz.options" :key="index">
          <input
            type="radio"
            :value="item"
            :name="item.name"
            v-model="quiz.temp"
          />{{ item }}</span
        >
        <br />
      </div>
      <button @click.self.prevent="totalScore">제출</button>
    </form>
    <!-- 총 득점 -->
    총 득점: {{ score }}
  </div>
</template>

<script lang="ts">
interface Provider {
  temp: string;
  answer: string;
  score: number;
}
export default {
  name: 'OXQuiz',
  data() {
    return {
      loadData: [
        {
          _id: 0,
          text: '대한민국 수도는 서울입니까?',
          score: 1,
          answer: 'O',
          temp: '',
          options: ['O', 'X'],
          name: 'question1',
        },
        {
          _id: 1,
          text: '4+4=?',
          score: 2,
          answer: 8,
          temp: '',
          options: [4, 8],
          name: 'question2',
        },
      ],
      score: 0,
    };
  },
  methods: {
    totalScore() {
      this.score = this.loadData.reduce((prev: number, cur: Provider) => {
        if (cur.temp === cur.answer) {
          prev += cur.score;
        }
        return prev;
      }, 0);
    },
  },
};
</script>
<!-- 흐름
  1. html 정적인 화면 만들기
  2. html 동적인 화면에 들어갈 data 를 quizData.json 으로 만들기
  3. 문제를 반복문 처리하고, 그 안에 정답을 반복문 처리하여 나타낸다
  4. 체크 박스 설정
    - 1. : 없으면 직접 설정, : 사용하여 동적으로 처리
    - 2. :name 다르게 설정하여 server 로 전달한다
    - 3. :value 로 선택할 radio btn 나타내며,
    - 4. 선택한 값을 v-model 에 담는다
-->
