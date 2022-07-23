<template>
	<div>
		<h1>배열과 객체를 반복문을 사용하여 금일 식사 리스트를 나타내는 예제</h1>
		<li v-for="(item, index) in myArray" :key="index">{{ item }}</li>
		<hr />
		<li v-for="(obj, index) in myObj" :key="index">{{ obj.name }}</li>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'ForeTest1',
	data() {
		return {
			myArray: ['오무라이스', '돈가스', '만두'],
			myObj: [
				{ name: '국밥', price: 10000 },
				{ name: '국수', price: 7000 },
			],
		};
	},
});
</script>

<style scoped></style>
<!-- v-for 는 배열뿐만 아니라, 객체도 나타낼 수 있다. -->
