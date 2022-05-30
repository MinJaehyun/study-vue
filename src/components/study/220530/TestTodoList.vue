<template>
  <div>
    <h1>추가 기능 todolist</h1>
    <div v-for="(item, index) in items" :key="index">
      <input type="checkbox" v-model="item.bool">
      <span :class="{'strike-throught': item.bool}">
        {{ item.text }} (완료일 {{ item.dueDate }})
      </span>
    </div>
    <br />
    <input type="text" v-model="inputText1" @change="addInput1"> /
    <input type="text" v-model="inputText2" @change="addInput1">(YYYYMMDD 형식으로 입력)
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TestTodoList',
  data() {
    return {
      items: [
        { bool: false, text: '빵사기', dueDate: 20220615},
        { bool: false, text: '커피사기', dueDate: 20230615},
      ],
      inputText1: '',
      inputText2: '',
    };
  },
  methods: {
    addInput1(){
      // 값은 둘 다 입력되어야 하며
      if (this.inputText1 !== '' && this.inputText2 !== '') {
        // 길이는 8 이어야 하며
        if (this.inputText2.length === 8) {
          // TESTING: input 값이 숫자가 아니면
          // 문자열을 숫자로 바꾸고,
          // console.log(typeof Number(this.inputText2));
          if (!isNaN(Number(this.inputText2))) {
            // 여기까지 +1234567 입력 시, 콘솔창에 1234567 나타내고 있다
            // if -1234567 입력 시, 콘솔창에 -1234567 나타내는게 아니라 1234567 나타내야 한다?
            // NOTE: +, - 가 입력되지 않게 하려면?
            if (Number(this.inputText2) > 0) {
              // splice 앞 글자가 + 아니면 진행한다.
              // console.log(Number(this.inputText2));
              // console.log(this.inputText2.slice(0, 1));
              // console.log(this.inputText2.slice(0, 1) === '+');
              if (this.inputText2.slice(0, 1) !== '+' && this.inputText2.slice(0, 1) !== '.' && this.inputText2.slice(0, 1) !== '0') {
                this.items.push({ bool: false, text: this.inputText1, dueDate: this.inputText2})
              }
            }
          }
        }
      }
    },
  },
});
</script>

<style scoped>
.strike-throught {
  text-decoration: line-through;
}
</style>
