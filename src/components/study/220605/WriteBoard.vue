<template>
  <div>
    <form @submit.prevent="submitWriteBoard" class="container" v-if="writeBool">
      <label>글제목: </label>
      <input type="text" @change="setInputText">
      <div>
        <textarea @change="setInputTextarea" cols="100" rows="10" style="margin: 10px;"></textarea>
      </div>
      <input type="submit" value="저장">
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WriteBoard',
  props: {
    writeBool: Boolean,
    inputTitle: String,
    inputTextarea: String,
  },
  methods: {
    setInputText(e: any){
      this.$emit('inputTitle', e.target.value)
    },
    setInputTextarea(e: any){
      this.$emit('inputTextarea', e.target.value)
    },
    submitWriteBoard(){
      this.$emit('submitWriteBoard')
    },
  },
});
</script>

<style scoped></style>
