<template>
	<div>
		<input type="text" :value="item" />
		<button @click="inputHandle" type="button">추가</button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'TodoInput',
	props: ['item'],
	methods: {
		// event 는 타입이 InputEvent 이다.
		inputHandle(event: InputEvent) {
			// console.log('e', e);
			// event.target 는 html element 이므로 아래처럼 설정하면 된다.
			// event.target 는 HTMLInputElement 이라는 설정
			const eventTarget = event.target as HTMLInputElement;
			console.log('eventTarget :', eventTarget);
			// console.log(event.target.value);
			this.$emit('inputValue', eventTarget.value);
		},
	},
});
</script>

<style scoped></style>
