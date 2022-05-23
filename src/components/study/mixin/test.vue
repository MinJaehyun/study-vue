<template>
  <div>
    <!--   mixins: [myMixin] 설정하였으므로 onClick 을 가져올 수 있다. -->
    <div @click="onClick">{{ data }}</div>
  </div>
</template>

<script>
import myMixin from '@/components/mixin/myMixin';
export default {
  mixins: [myMixin],
  name: 'testA',
  data() {
    return {
      // myMixin.js에서 props인 weight를 가져왔다.
      data: 10 + this.weight,
    };
  },
  created() {
    console.log('component');
    console.log('data', this.data);
  },
};
</script>

<style scoped></style>
