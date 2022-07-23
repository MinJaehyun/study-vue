<template>
	<div>
		<h1>추가 기능 todolist</h1>
		<div v-for="(item, index) in items" :key="index">
			<input type="checkbox" v-model="item.bool" />
			<span :class="{ 'strike-throught': item.bool }">
				{{ item.text }} (완료일 {{ item.dueDate }})
			</span>
			<button @click="dueDateExtension(index)">완료일 연장</button>
		</div>
		<br />
		<input type="text" v-model="inputText1" @change="addInput1" /> /
		<input type="text" v-model="inputText2" @change="addInput1" />(YYYYMMDD
		형식으로 입력)
		<div>
			<button @click="checkedDelete">처리완료삭제</button>
			<button @click="ascTodo">할일순으로 정렬</button>
			<button @click="dueDataTodo">완료일으로 정렬</button>
		</div>
		<p>{{ items.length }}건 중 {{ checkedCount }}건 처리, ? 완료일 지남</p>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

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
		dueDateExtension(index: number) {
			// console.log(this.items[index]); // 기존값
			// 현재일 기준(result)으로 +1일 완료일을 처리한다
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
		dueDataTodo() {
			this.items.sort((a: any, b: any) => {
				return a.dueDate < b.dueDate ? 1 : -1;
			});
		},
		ascTodo() {
			// items.text.sort정렬
			this.items.sort((a: any, b: any) => {
				return a.text > b.text ? 1 : -1;
			});
		},
		checkedDelete() {
			this.items = this.items.filter((item: any) => {
				return item.bool === false;
			});
		},
		addInput1() {
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
		checkedCount() {
			return this.items.filter((item: any) => {
				return item.bool === true;
			}).length;
		},
	},
});
</script>

<style scoped>
.strike-throught {
	text-decoration: line-through;
}
</style>
<!-- fix: 날짜 32일인 경우 처리하는 로직 만들어야 한다. -->
