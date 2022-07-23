<template>
	<div>
		<button :disabled="isClick" @click="onClick">좋아~!</button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'OneTest2',
	data() {
		return {
			isClick: false,
		};
	},
	methods: {
		onClick() {
			this.isClick = true;
			alert('좋아~');
		},
	},
});
</script>

<style scoped></style>
<!-- 요구 사항:
버튼 클릭 시, 경고창 '좋아' 출력하고, 버튼 비활성화 한다.
-->

<!-- 흐름:
1. '좋아' 버튼 클릭 시, onClick 함수를 실행하고,
2. isClick 값을 true 로 변경한다.
3. disabled 값을 true 로 변경하여 버튼을 비활성화 한다.
 -->

<!-- 포인트
disabled 이 false 상태이므로 버튼이 보인다. 버튼 클릭 시 상태값을 true 로 변경하는게 포인트
-->
