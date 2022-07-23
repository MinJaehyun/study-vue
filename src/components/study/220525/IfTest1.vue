<template>
	<div>
		<label>
			<input type="checkbox" v-model="myVisible" />
			표시
		</label>
		<p v-if="myVisible">체크박스 ON</p>
		<p v-else :style="{ display: noneDisplay }">
			체크박스를 noneDisplay 처리함!
		</p>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'IfTest1',
	data() {
		return {
			myVisible: false,
		};
	},
	computed: {
		noneDisplay() {
			return 'none';
		},
	},
});
</script>

<style scoped></style>
<!-- checkbox 는 최초 fasle 상태이고, 선택 시 true 로 변경된다. -->
