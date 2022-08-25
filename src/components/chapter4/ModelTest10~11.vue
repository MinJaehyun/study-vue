<template>
  <div>
    <!-- lazy -->
    <input v-model.lazy="lazyText" />
    <p>입력후 표시 {{ lazyText }}</p>
    <hr />

    <!-- @click -->
    <input v-model.trim="changeValue" @change="test" />
    <!-- <p>입력후 표시 {{ myText }}</p> -->
    <p>입력후 표시 {{ changeValue }}</p>
    <hr />

    <!-- v-model.number -->
    <input v-model.number="myNumber" />
    <p>100을 더해서 표시: {{ 100 + myNumber }}</p>
    <hr />

    <!-- type="number" -->
    <input v-model="myNumber" type="number" />
    <p>100을 더해서 표시: {{ 100 + myNumber }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ModelTest10~11',
  data() {
    return {
      lazyText: '',
      myNumber: 0,
      changeValue: '',
    };
  },
  methods: {
    // 1
    test(e: any) {
      console.log(e.target.value);
      this.value = e.target.value;
    },
  },
});
</script>
<!-- @input, @change 차이? 
  1. @input  는 값이 변경될 때마다 나타난다. 
  2. @change 는 변경 완료된 값을 나타난다.
-->

<!-- v-model.lazy 란? 
  입력값을 enter 하거나 포커스를 다른 곳으로 이동하기 전까지 출력되지 않게 하는 v-model 의 수식어 중 하나. 
-->

<!-- v-model.lazy 와 @click 메서드 
  @click 사용하여 변경 완료된 값을 가져오므로 lazy 기능과 유사하다
-->

<!-- v-model.trim 란? 
  앞에 공백만 제거된다 (뒤는 제거 안됨?) 
-->

<!-- 
  1. v-model.number 는 문자 입력된다.
  2. 문자 아예 입력 안되게 하는 input 속성인 type="number" 적용하는게 낫다
  3. input 의 type='string' 는 없는 타입이다 
  4. input 요소: https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input
-->
<!--  -->
