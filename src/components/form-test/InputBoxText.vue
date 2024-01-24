<template>
  <div class="w-full border border-red-500 flex justify-center">
    <form class="w-[50%] p-4">
      <div>
        <h1 class="text-2xl">Input Box Test</h1>
      </div>
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <BaseInput
            label="Name"
            labelClass="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            placeholder="Please enter your name"
            inputClass="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            inputTitle="Your Name"
            type="text"
            :size="8"
            maxLength="8"
            :required="true"
            :v-model="states.name"
          >
          </BaseInput>
        </div>
        <div>
          <BaseInput
            label="Password"
            labelClass="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            placeholder="Please enter your password"
            inputClass="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            inputTitle="Password"
            type="password"
            :size="16"
            maxLength="16"
            min="1"
            :validation-status="false"
            :validation-message="'Give your password'"
          >
          </BaseInput>
        </div>
        <div>
          <BaseInput
            label="Name"
            labelClass="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            placeholder="Please enter your name"
            inputClass="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            inputTitle="Your Name"
            type="text"
            :size="16"
            maxLength="16"
            min="1"
          >
          </BaseInput>
        </div>
        <div>
          <BaseInput
            label="Name"
            labelClass="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            placeholder="Please enter your name"
            inputClass="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            inputTitle="Your Name"
            type="text"
            :size="16"
            maxLength="16"
            min="1"
          >
          </BaseInput>
        </div>
      </div>

      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import BaseInput from "../reusable-components/BaseInput.vue";

const states = reactive({
  inputBox1ValidationStatus: false,
  name: "",
  password: "",
});

// watch(inputBox2, (newModel) => {
//   console.log(`newModel is ${newModel}`);
//   if (newModel == "1000" || newModel == "1100") {
//     states.inputBox1ValidationStatus = true;
//   } else {
//     states.inputBox1ValidationStatus = false;
//   }
// });
</script>
