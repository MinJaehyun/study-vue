<template>
	<div>
		카운터:
		<button @click="clickCount">증가</button>
		{{ count }}
		<hr />
		나는 {{ item }} 입니다.
		<hr />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'Hello_',
	props: {
		item: String,
		// myName: String
	},
	data() {
		return {
			count: 0,
		};
	},
	methods: {
		clickCount() {
			this.count += 1;
		},
	},
	created() {
		this.myName;
	},
});
</script>

<style scoped></style>
<!-- v-for 에서 개별 item 값을 :item="item" 바인딩하여 props 로 내려주면 개별아이템을 사용할 수 있다 -->
