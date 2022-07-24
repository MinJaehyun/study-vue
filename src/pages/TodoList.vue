<template>
	<TodoList>
		<!--    <template #icon>-->
		<!--      &lt;!&ndash;      <span></span>&ndash;&gt;-->
		<!--    </template>-->
		<!--    <template #text>-->
		<!--      <span>Banana</span>-->
		<!--    </template>-->
	</TodoList>
</template>

<script lang="ts">
import TodoList from '@/components/TodoList.vue';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'TodoList.vue',
	components: {
		TodoList,
	},
});
</script>

<style scoped></style>
