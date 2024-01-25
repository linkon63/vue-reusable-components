<template>
  <div class="flex items-center">
    <input
      id="default-radio-2"
      type="radio"
      v-model="model"
      :value="value"
      :name="name"
      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
    <label
      for="default-radio-2"
      class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      :class="labelClass"
      >{{ label }}</label
    >
  </div>
</template>
<script setup lang="ts">
interface Props {
  label?: string;
  labelClass?: string;
  class?: string;
  checked?: boolean;
  name?: string;
  disabled?: boolean;
  value?: string | number | boolean;
}

withDefaults(defineProps<Props>(), {
  label: "Radio Button",
  labelClass: "",
  class: "",
  checked: false,
  name: "default-radio",
  disabled: false,
  value: "",
});
const model = defineModel();
</script>
