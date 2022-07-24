<template>
	<div>
		<!-- mixins: [myMixin] 설정 하였으므로 onClick 을 가져올 수 있다. -->
		<div @click="onClick">{{ data }}</div>
	</div>
</template>

<script>
import myMixin from '@/components/study/mixin/myMixin';
// import myMixin2 from '@/components/study/mixin/myMixin2';

export default {
	mixins: [myMixin],
	name: 'testA',
	data() {
		return {
			// myMixin.js 에서 props 인 weight 를 가져왔다
			data: 10 + this.weight,
			// NOTE: 여러 믹스인을 사용하면 속성이 어떤 믹스인으로 부터 왔는지 명확하지 알기 어렵다.
		};
	},
	created() {
		console.log('component');
		console.log('data', this.data);
	},
};
</script>

<style scoped></style>
