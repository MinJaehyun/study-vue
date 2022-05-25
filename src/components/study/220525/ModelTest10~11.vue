<template>
  <div id="app">
    <!-- 1. -->
    <input v-model.lazy.trim="myText" @change="test" />
    <p>입력후 표시 {{ myText }}</p>
    <hr />
    <!-- 2. -->
    <input v-model="myNumber" type="number" />
    <p>100을 더해서 표시: {{ 100 + myNumber }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Modeltest10~11_',
  data() {
    return {
      myText: '',
      myNumber: 0,
    };
  },
  // methods: {
  //   // 1
  //   test(e: any) {
  //     console.log(e.target.value);
  //   },
  // },
});
</script>

<style scoped></style>
<!-- v-model.lazy 특징:
input 태그에 v-model 사용하면 입력값이 한글자씩 표시된다.
그러나 input 태그에 v-model.lazy 사용하면 입력값을 enter 누르거나 포커스를 다른 곳으로
이동하기 전까지 출력되지 않는다. -->
<!-- lazy 와 trim 을 붙여 사용 가능 -->

<!-- input 의 type 은 string 을 넣을 수 없다!! -->
<!-- https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input -->
