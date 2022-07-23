<template>
	<div>
		<!-- @input, @change 차이점? -->
		<!-- @input 는 값이 변경될 때마다 실행된다. @change 는 변경이 완료된 값을 실행한다. -->
		<input v-model.lazy.trim="myText" @change="test" />
		<p>입력후 표시 {{ myText }}</p>
		<hr />
		<input v-model="myNumber" type="number" />
		<p>100을 더해서 표시: {{ 100 + myNumber }}</p>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'Modeltest10~11_',
	data() {
		return {
			myText: '',
			myNumber: 0,
		};
	},
	methods: {
		// 1
		test(e: any) {
			console.log(e.target.value);
		},
	},
});
</script>

<style scoped></style>
<!-- v-model.lazy 란? 입력값을 enter 누르거나 포커스를 다른 곳으로 이동하기 전까지 출력되지 않는다. -->
<!-- v-model.trim 란? 앞에 공백만 제거된다 (뒤는 제거 안됨) -->

<!-- input 의 type='string' 없는 속성이다!! -->
<!-- https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input -->
