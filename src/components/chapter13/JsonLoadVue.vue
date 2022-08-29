<template>
  <div>
    <h1>JSON 읽어들이는 예제</h1>
    <input type="file" @change="onChangeFile" />
    <p>읽어 들인 데이터: {{ loadData }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'JsonLoadVue',
  data() {
    return {
      loadData: '',
    };
  },
  methods: {
    onChangeFile(e: any) {
      console.log('this', this); // object(jsonData, Array(4))
      let file: FileReader = e.target.files[0];
      if (file) {
        let reader = new FileReader();
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let vm = this;
        // NOTE: 아래 메서드 안 내부함수 안에서의 this 는 값이 전역객체인 obj 에서 window 로 바인딩 되므로 이를 방지하려면 변수에 담아 사용하여 obj 객체를 유지할 수 있다
        // console.log('vm', vm);
        console.log('this.loadData;: ', this.loadData);

        // test 1. function
        reader.onload = function (e) {
          let json = JSON.parse(e.target.result as string);
          // this.loadData = json; // error
          vm.loadData = json;
          // console.log(vm);
          // 질문하기: 콘솔에 Proxy 로 나타내는데, 이를 window 나 object 로 나타내는게 맞는지?
        };
        reader.readAsText(file as any);

        // test 2. arrow function. 일반함수를 화살표함수로 변경 시, this 는 전역객체로 바인딩한다.
        // reader.onload = (e) => {
        //   let json = JSON.parse(e.target.result as string)
        //   this.loadData = json;
        //   console.log(this)  // arrow 사용하여 window 객체로 변경되나?
        // }
        // reader.readAsText(file as any)
      }
    },
  },
});
</script>
<!-- vm 위치 아는지?
1. this 위치가 내부함수(일반함수, 콜백함수)인지, 메서드 안에 있는지 확인해야 한다
2. 인자에 타입 설정 file as any
-->

<!--
  import 로 json 파일을 직접 가져오는게 아닌, 등록한 파일을 가져오는 방법이다(FileReader)
-->
