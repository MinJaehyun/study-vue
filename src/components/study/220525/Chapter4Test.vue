<template>
  <div>
    <h1>입력폼 활용</h1>
    <form @submit.prevent="submitForm">
      <p>
        이름: <input type="text" placeholder="홍길동" v-model.lazy="myName" />
      </p>
      <div>
        좋아하는 색은:
        <input type="radio" value="red" v-model="checked" />
        <label>빨강</label>
        <input type="radio" value="green" v-model="checked" />
        <label>초록</label>
        <input type="radio" value="blue" v-model="checked" />
        <label>파랑색</label>
      </div>
      <input type="submit" />
    </form>
    <hr />
    <!-- 아래 2개의 p 태그의 차이점을 이해하는지? -->
    <p :style="{ color }">
      내 이름은 {{ myName }} 이고, 좋아하는 색은 {{ checked }} 입니다.
    </p>
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
<!-- 요구 사항:
1. form 태그를 submit 하면 설정한 색깔, 이름 나오도록 만들기
2. 입력폼에서 쓸 상태와 적용할 것에 쓸 상태 두 개를 만드는게 포인트
-->

<!-- 답
1. 그냥 data 를 v-model 로 바인딩하여 가져오는 것과,
2. form 을 submit 했을 때, 결과값을 저장하여 가져오는 것의 차이
-->
