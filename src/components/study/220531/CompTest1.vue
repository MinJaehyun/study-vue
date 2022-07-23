<template>
	<div>
		<h1>컴포넌트를 만들어서 표시하는 예제</h1>
		<Hello v-for="(item, index) in items" :item="item" :key="index"></Hello>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Hello from '@/components/study/220531/Hello.vue';

export default defineComponent({
	name: 'CompTest1',
	data() {
		return {
			items: ['철수', '영희', '민수', '광수'],
		};
	},
	methods: {},
	components: {
		Hello,
	},
});
</script>

<style scoped></style>
