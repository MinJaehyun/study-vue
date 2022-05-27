<template>
  <div>
    <h2>Google Charts 로 원그래프 그리는 예제</h2>
    <h3>선호 점심 메뉴 투표</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// 전역 메서드 여기에서 만들어서 아래에서 google 을 실행해 보도록 한다.
// function testFunction() {
//   google.charts.load('current', { packages: ['corechart'] });
//   google.charts.setOnLoadCallback(drawChart);
// }

export default defineComponent({
  name: 'GoodChart',
  data() {
    return {
      orgdata: [
        ['종류', '개수'],
        ['도시락', 3],
        ['갈비탕', 4],
        ['오므라이스', 5],
        ['짬뽕', 1],
        ['비빔밥', 3],
      ],
    };
  },
  methods: {
    // drawBasic() {
    //   const data = google.visualization.arrayToDataTabe(this.orgdata);
    // },
  },
});
</script>

<style scoped></style>
