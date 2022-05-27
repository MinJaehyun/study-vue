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
      setTime: 10,
      timeNum: 0,
    };
  },
  methods: {
    startTimer(){
      // 특징: setInterval 처리한 변수를 clearInterval 함수에서 처리하기 위해 객체에 담는다
      this.timeNum = setInterval(()=>{
        this.setTime -= 1
      }, 1000)
      // console.log(typeof this.timeNum)
      console.log(this.timeNum)
    },
  },
  watch: {
    setTime(){
      // time 이 5 에서 0 이 될 때, clearInterval 을 통해 중지된다.
      if (this.setTime === 0) {
        clearInterval(this.timeObj)
      }
    },
  },
});
</script>

<style scoped></style>
<!--
1. 참고: https://ko.javascript.info/settimeout-setinterval
2. setTimeout, setInterval, clearInterval 개념 이해하기
3. 질문: 26라인 콘솔 3나오는 이유는?ㅎ;
-->

<!-- 흐름:
1. data 에 기본값 설정하고, watch 에서 기본값을 가져와서 감시할 것이다
2. start 버튼 클릭 시, 메서드를 호출하여 반복 실행되는 setInterval 함수로 시간을 1초씩 감소할 것이다.
3. 이 후, 시간이 0 일 경우(-1 초 감소인 경우) 중단을 실행하기 위해 watch 함수에 시간 변수를 건다.
-->