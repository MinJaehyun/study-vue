<template>
  <div id="app">
    <h1>입력폼 활용</h1>
    <form @submit.prevent="submitForm">
      <p>
        이름: <input type="text" placeholder="홍길동" v-model.lazy="myName" />
      </p>
      <p>좋아하는 색은:</p>
      <div>
        <input type="radio" name="drone" value="red" v-model="checked" />
        <label>빨강</label>
        <input type="radio" name="drone" value="green" v-model="checked" />
        <label>초록</label>
        <input type="radio" name="drone" value="blue" v-model="checked" />
        <label>파랑색</label>
      </div>
      <input type="submit" />
    </form>
    <hr />
    <!-- <p>내 이름은 {{ myName }} 이고, 좋아하는 색은 {{ checked }} 입니다.</p>-->
    <p :style="{ color }">
      내 이름은 {{ name }} 이고, 좋아하는 색은 {{ color }} 입니다.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'test_',
  data() {
    return {
      myName: '',
      checked: 'black',
      color: 'black',
      name: '',
    };
  },
  methods: {
    submitForm() {
      this.name = this.myName;
      this.color = this.checked;
    },
  },
});
</script>

<style scoped></style>
<!-- input radio box 에는 name 값이 있어야지 한가지만 선택할 수 있다. -->

<!-- 할 것: 
1. form 태그에서 submit 되면, 설정한 색깔, 이름 나오도록 만들기
2. 입력폼에서 쓸 것과 적용할 것에 쓸 것 하나씩 만들기
-->
