<template class="w-full">
  <div class="w-full bg-black">
    <BaseInput type="search" v-model="inputBox1" />
  </div>

  <div class="flex w-full">
    <form @submit.prevent="(e) => console.log(e?.target)" class="w-[50%]">
      <div class="">
        <BaseInput />
        <button type="submit" class="rounded bg-green-400 p-2.5 ms-2">
          Submit
        </button>
      </div>
    </form>
  </div>
  <p>V-Model 2: {{ inputBox2 }}</p>
  <p>V-Model 1: {{ inputBox1 }}</p>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from "vue";
import BaseInput from "./components/reusable-components/BaseInput.vue";
const inputBox1 = ref("Hello Default Value 1");
const inputBox2 = ref("Hello Default Value 2");
import InputBoxTest from "./components/form-test/InputBoxText.vue";

const states = reactive({
  inputBox1ValidationStatus: false,
});
watch(inputBox2, (newModel) => {
  console.log(`newModel is ${newModel}`);
  if (newModel == "1000" || newModel == "1100") {
    states.inputBox1ValidationStatus = true;
  } else {
    states.inputBox1ValidationStatus = false;
  }
});
</script>
