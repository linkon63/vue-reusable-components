<template class="w-full">
  <h1>Testing Components from here</h1>
  <div class="p-8">
    <BaseToggle
      label="Hello Toggle"
      toggle-classes="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"
      toggle-ball-classes="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"
    />
    <BaseToggle
      label="Sound"
      toggle-classes="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"
      toggle-ball-classes="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"
    >
      <template #labelPrefix>📢</template>
    </BaseToggle>
  </div>

  <!-- <BaseModalTest /> -->
  <!-- <ButtonTest /> -->
  <!-- <RadioboxTest /> -->
  <!-- <SelectInputTest /> -->
  <!-- <TextAreaTest /> -->
  <!-- <CheckboxTest /> -->
  <!-- <InputBoxTest /> -->
</template>
<script setup lang="ts">
import BaseModalTest from "./components/reusable-component-playground/BaseModalTest.vue";
import ButtonTest from "./components/reusable-component-playground/ButtonTest.vue";
import RadioboxTest from "./components/reusable-component-playground/RadioboxTest.vue";
import SelectInputTest from "./components/reusable-component-playground/SelectInputTest.vue";
import TextAreaTest from "./components/reusable-component-playground/TextAreaTest.vue";
import BaseTextArea from "./components/reusable-components/BaseTextArea.vue";
import BaseToggle from "./components/reusable-components/BaseToggle/BaseToggle.vue";
</script>
