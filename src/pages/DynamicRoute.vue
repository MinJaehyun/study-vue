<!-- NOTE: 동적라우팅 처리 방법 -->
<template>
  <div>parameter: {{ $route.params.id }}</div>
</template>

<script lang="ts">
export default {
  name: 'DynamicRoute',
};
</script>
