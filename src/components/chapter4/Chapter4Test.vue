<template>
  <div>
    <h1>입력폼 활용</h1>
    <form @submit.prevent="submitForm">
      <p>
        이름: <input type="text" placeholder="홍길동" v-model.lazy="myName" />
      </p>
      <div>
        좋아하는 색은
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
    <!-- 아래 차이점 이해? -->
    <!-- 1 -->
    <p :style="{ color }">
      내 이름은 {{ myName }} 이고, 좋아하는 색은 {{ checked }} 입니다.
    </p>

    <!-- 2 -->
    <p :style="{ color: checked }">
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
      myName: '?',
      checked: '?',
      // 제출한 값을 담기위한 상태값들
      color: '?',
      name: '?',
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
<!-- 요구 사항:
1. form submit 시 색깔, 이름 나오게 만들기
2. 입력폼에서 사용할 상태와 적용할 것에 쓸 상태, 두 개를 만드는게 포인트
-->

<!-- 1,2번 차이점?
  1번은 입력한 값을 바로 html 에 출력하고,
  2번은 입력한 값을 제출한 뒤 html 에 출력한다.
-->
