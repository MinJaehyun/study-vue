<template>
  <div>
    <h1>남은 시간이 0초가 되면 alert 를 띄우는 예제</h1>
    <p>{{ setTime }}</p>
    <button @click="startTimer">START</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WatchTest2',
  data() {
    return {
      setTime: 5,
      timeNum: 0,
    };
  },
  methods: {
    startTimer() {
      if (this.setTime > 1) {
        // setInterval 처리한 변수를(timeNum) clearInterval 함수에서 처리하기 위해 객체에 담는다
        this.timeNum = setInterval(() => {
          this.setTime -= 1;
        }, 1000);
        // console.log(typeof this.timeNum)
        console.log(this.timeNum);
      }
    },
  },
  watch: {
    setTime() {
      // time 이 5 에서 0 이 될 때, clearInterval 을 통해 중지된다.
      if (this.setTime <= 0) {
        clearInterval(this.timeNum);
      }
    },
  },
});
</script>
<!-- 학습 목표: 
  1. setTimeout, setInterval, clearInterval 개념 이해
  2. 질문: 28: 결과 3 인 이유는?
    - 반환 intervalID된 값은 호출에 의해 생성된 타이머를 식별하는 0이 아닌 숫자 값.
-->

<!-- 흐름:
  1. data 값을 watch 에서 가져와 감시할 것이다
  2. start 클릭 시, startTimer 메서드 호출하여 setInterval 로 1초씩 감소할 것이다
  3. 시간이 0 이면 중단하기 위해 watch 함수에 clearInterval 함수를 사용한다
-->
