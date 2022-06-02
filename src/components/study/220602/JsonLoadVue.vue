<template>
  <div>
    <h1>JSON 을 읽어들이는 예제</h1>
    <!--    <div>-->
    <!--      {{ typeof data }}-->
    <!--      <br>-->
    <!--      {{ data }}-->
    <!--      <br>-->
    <!--      {{ data[0].title }}  -->
    <!--    </div>-->
    <input type="file" @change="onChangeFile">
    <p>읽어 들인 데이터: {{ loadData }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import testJsonfile from '@/components/study/220602/test.json';
// const data = testJsonfile;

export default defineComponent({
  name: 'JsonLoadVue',
  data() {
    return {
      loadData: '',
    };
  },
  methods: {
    onChangeFile(e: any){
      let file: FileReader = e.target.files[0];
      if (file) {
        let reader = new FileReader()
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        // let vm = this;
        reader.onload = function(e) {
          let json = JSON.parse(e.target.result as string)
          // console.log();
          // 숙제 this 까지 설명하기, 아래 접근 안 되는 이유 설명하기
          // this.loadData = json;
        }
        reader.readAsText(file as any)
      }
    },
  },
});
</script>

<style scoped></style>
<!-- vm 위치 아는지?
1. this 는 전역이 아닌 해당 컴포넌트(defineComponent) 이다.
2. 인자에 타입 설정하기 위해서는 file as any 설정해야 한다.
-->

<!--
import 로 json 파일을 직접 가져오는게 아닌, FileReader 사용하여 가져와야 한다.
-->