<template>
  <div>
    <h1>배열 데이터를 컴포넌트로 나열하는 예제</h1>
    <div>
      <input type="file" @change="onChangeFile" />
    </div>
    <div v-for="(item, index) in loadData" :key="index">
      <p style="background-color: gray">{{ item.title }}</p>
      <p>해설: {{ item.body }}</p>
    </div>
    <button @click="sortFunction">소트</button>
    <button @click="shuffleData">셔플</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'JsonTest1',
  data() {
    return {
      loadData: [],
    };
  },
  methods: {
    shuffleData() {
      this.loadData.sort(() => Math.random() - 0.5);
    },
    sortFunction() {
      // 오름차순 정렬
      this.loadData.sort((a: any, b: any) => {
        return a.title > b.title ? 1 : -1;
      });
    },
    onChangeFile(e: any) {
      let file: FileReader = e.target.files[0];
      if (file) {
        let reader = new FileReader();
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let vm = this;
        reader.onload = e => {
          let json = JSON.parse(e.target?.result as string);
          vm.loadData = json;
        };
        reader.readAsText(file as any);
      }
    },
  },
});
</script>
