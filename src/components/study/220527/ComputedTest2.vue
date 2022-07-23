<template>
	<div>
		<input type="number" v-model="price" />원 *
		<input type="number" v-model="count" />개
	</div>
	<p>합계: {{ sumPrice }}</p>
	<p>세금포함: {{ taxIncluded }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'ComputedTest',
	data() {
		return {
			price: 100,
			count: 0,
		};
	},
	methods: {},
	computed: {
		sumPrice() {
			return this.price * this.count;
		},
		taxIncluded() {
			return this.sumPrice * 1.08;
		},
	},
});
</script>

<style scoped></style>
<!-- input type number 지정하면 화살표로 가격 조절할 수 있다 -->
