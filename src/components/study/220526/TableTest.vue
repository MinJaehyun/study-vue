<template>
	<div id="app">
		<table>
			<tr>
				<th v-for="(item, index) in header" :key="index">{{ item }}</th>
			</tr>
			<tbody>
				<tr v-for="(line, index) in ranking" :key="index">
					<td v-for="(item, index) in line" :key="index">{{ item }}</td>
				</tr>
			</tbody>
		</table>
	</div>
	<hr />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'TableTest',
	data() {
		return {
			header: ['프로그램 언어', 2011, 2012, 2013, 2014, 2015],
			ranking: [
				['java', 1, 2, 1, 1, 16],
				['c', 2, 1, 2, 2, 1],
				['c++', 3, 4, 3, 3, 2],
				['python', 4, 7, 6, 11, 23],
				['js', 7, 10, 8, 7, 20],
			],
		};
	},
});
</script>

<style scoped>
table {
	width: 100%;
	text-align: left;
}
table th {
	padding: 12px;
	border-bottom: 2px solid darkgray;
}
table td {
	padding: 12px;
}
table tr:nth-of-type(even) {
	background-color: rgba(0, 0, 255, 0.1);
}
</style>
<!--
1. v-for 를 이차원 배열로 사용할 수 있다.
2. 헤더는 1차원 배열로 바디는 2차원 배열로 나타내면 된다.
-->
