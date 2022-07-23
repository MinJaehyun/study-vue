<template>
	<div>
		<h1>체크박스로 표시/비표시에 애니메이션 효과 주는 예제</h1>
		<label><input type="checkbox" v-model="aniCheck" />변경</label>
		<transition>
			<p v-if="aniCheck">체크박스가 true 이므로 표시 상태이다</p>
			<!-- <p v-else>체크박스가 false 이므로 비표시 상태이다</p>-->
		</transition>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'TransTest1',
	data() {
		return {
			aniCheck: false,
		};
	},
	methods: {},
});
</script>
<style>
.v-enter-from {
	opacity: 0;
}
.v-enter-active {
	transition: 2.5s;
}
.v-enter-to {
	opacity: 1;
}

.v-leave-from {
	opacity: 1;
}
.v-leave-active {
	transition: 1.5s;
}
.v-leave-to {
	opacity: 0;
}
</style>
<!-- NOTE: Vue 2 버전일 경우 아래 설정해야 하고, Vue 3 버전일 경우 하단을 참고한다.
1. v-enter 관련
- v-enter 는 나타나기 전 상태
- v-enter-action 는 나타나고 있는 상태
- v-enter-to 는 나타난 상태

2. v-leave 관련
- v-leave 는 사라지기 전의 상태
- v-leave-active 는 사라지고 있는 상태
- v-leave-to 는 사라진 상태
-->

<!-- Vue 3 버전일 경우 v-enter-from 으로 진입하는 명칭만 달라졌다
1. v-enter-from 는 나타나기 전 상태
2. v-leave-from 써도 되고 안 써도 된다.
-->

<!--
1. input checkbox 에 체크 시, true 값이 v-model 에 설정한 변수의 값으로 지정된다.
2. transition 컴포넌트에 name 지정하면, 기본 v- 사용하지 않고, 설정한 name 으로 지정하여 사용할 수 있다.
-->
