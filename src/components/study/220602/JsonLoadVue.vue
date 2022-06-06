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
  // obj 의 메서드 안에 this 는 obj 를 가리킨다..
  // 메서드 안에 this 는 obj 를 가리킨다.
  // 고로, onChangeFile 메서드 안에 함수로 감싸지지 않은 this 는 obj 이다
  // 전역에 접근하기 위해서는??
  // 임의 함수로 감싸서 this 사용한다
  methods: {
    onChangeFile(e: any){
      console.log(typeof this) // object
      // console.log(JSON.parse(JSON.stringify(this)))
      let file: FileReader = e.target.files[0];
      if (file) {
        let reader = new FileReader()
        const testThis = function (): void {
          // let vm = this;
          console.log(this) //
          // console.log(vm) // this 를 vm 에 담으면 뭘 할 수 있나?
          reader.onload = function(e) {
            let json = JSON.parse(e.target.result as string)
            // console.log(typeof this)
            // vm.loadData = json;
          }
          reader.readAsText(file as any)
        }
        testThis();
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