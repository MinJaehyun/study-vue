<template>
  <div>
    <h1>설정한 시간으로 부터 남은 시간은 {{ timeRemaining }}초 입니다</h1>
    <!-- 시간 설정 -->
    <!-- <button>1시간 설정</button>
    <button>30분 설정</button>
    <button>15분 설정</button>
    <button>5분 설정</button> -->

    <!-- 추가 기능 -->
    <!-- <button>1시간 추가</button>
    <button>10분 추가</button>
    <button>1분 추가</button> -->

    <!-- 화살표 클릭 1분 추가 및 감소 기능 -->
    <!-- 시,분,초 우측에 화살표 위,아래 만들고 클릭 시 1단위로 증감하는 기능 만들기 -->

    <button @click="discountTimer">start</button>
    <!-- <button @click="resetTimer">reset</button> -->
  </div>
</template>

<script lang="ts">
export default {
  name: 'TimerTest',
  data() {
    return {
      timeRemaining: 2,
    };
  },
  methods: {
    discountTimer() {
      let timer = setInterval(() => {
        this.timeRemaining--;
        if (this.timeRemaining <= 0) {
          alert('제한 시간 입니다');
          clearTimeout(timer);
        }
      }, 1000);
    },
  },
};
</script>
<!-- 흐름
  
-->
