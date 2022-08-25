<!-- FIXME: 전체적으로 개선하기 -->
<template>
  <div>
    <div v-for="(item, index) in items" :key="index">
      <input type="checkbox" v-model="item.bool" />
      <span :class="{ 'strike-through': item.bool }">
        {{ item.text }} (완료일 {{ item.dueDate }})
      </span>
      <button @click="dueDateExtension(index)">완료일 연장</button>
    </div>
    <br />
    <input
      type="text"
      v-model="inputText1"
      @change="addInput1"
      placeholder="할일"
    />
    /
    <input
      type="text"
      v-model="inputText2"
      @change="addInput1"
      placeholder="완료일"
    />(YYYYMMDD 형식으로 입력)
    <div>
      <button @click="checkedDelete">처리 완료 삭제</button>
      <button @click="ascTodo">할 일 순 정렬</button>
      <button @click="dueDataTodo">완료일 정렬</button>
    </div>
    <p>{{ items.length }}건 중 {{ checkedCount }}건 처리, ? 완료일 지남</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
interface Provider {
  bool: boolean;
  text: string;
  dueDate: number;
}
export default defineComponent({
  name: 'TestTodoList',
  data() {
    return {
      items: [
        { bool: false, text: '빵사기', dueDate: 20220615 },
        { bool: false, text: '커피사기', dueDate: 20230615 },
      ],
      inputText1: '',
      inputText2: '',
    };
  },
  methods: {
    // 연장일
    dueDateExtension(index: number) {
      // console.log(this.items[index])
      // 현재일 기준(result)으로 +1일 완료일 처리
      // console.log(this.items[index].text);
      let date = new Date();
      let year = date.getFullYear();
      let month = ('0' + (1 + date.getMonth())).slice(-2);
      let day = ('0' + date.getDate()).slice(-2);
      let result = Number(year + month + day) + 1;
      // console.log(result); // 날짜만 +1 변경됨
      this.items.splice(index, 1, {
        bool: false,
        text: this.items[index].text,
        dueDate: result,
      });
    },
    // 연장일 정렬
    dueDataTodo() {
      this.items.sort((a: Provider, b: Provider) => {
        return a.dueDate < b.dueDate ? 1 : -1;
      });
    },
    // text 정렬
    ascTodo() {
      this.items.sort((a: Provider, b: Provider) => {
        return a.text > b.text ? 1 : -1;
      });
    },
    // 체크리스트 삭제
    checkedDelete() {
      this.items = this.items.filter((item: Provider) => {
        return item.bool === false;
      });
    },
    addInput1() {
      // 값 둘 다 입력되야 하며
      if (this.inputText1 !== '' && this.inputText2 !== '') {
        // 길이 8 이어야 하고
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
              if (
                this.inputText2.slice(0, 1) !== '+' &&
                this.inputText2.slice(0, 1) !== '.' &&
                this.inputText2.slice(0, 1) !== '0'
              ) {
                this.items.push({
                  bool: false,
                  text: this.inputText1,
                  dueDate: this.inputText2,
                });
              }
            }
          }
        }
      }
    },
  },
  computed: {
    // 체크 처리된 개수 count
    checkedCount() {
      return this.items.filter((item: Provider) => {
        return item.bool === true;
      }).length;
    },
  },
});
</script>
<style>
.strike-through {
  text-decoration: line-through;
}
</style>
<!-- FIXME: 날짜 32일 경우 처리 로직 만들기 -->
