<template>
  <div class="w-6/12 p-5">
    <label
      for="default-select-input"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      :class="labelClass"
      >{{ label }}</label
    >
    <select
      id="default-select-input"
      class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      :class="class"
      :name="name"
      :disabled="disabled"
      :required="required"
      v-model="model"
    >
      <option
        :style="`display : ${hideDefaultChooseOption ? 'none' : 'block'}`"
        selected
        value=""
        :class="optionClass"
      >
        {{ optionLabel }}
      </option>
      <option
        v-for="option in options"
        :value="option.value"
        :class="optionClass"
      >
        {{ option?.name }}
      </option>
    </select>
  </div>
</template>
<script setup lang="ts">
interface IOption {
  id?: number | string;
  name?: string;
  value?: string | number;
}
interface Props {
  label?: string;
  labelClass?: string;
  class?: string;
  optionClass?: string;
  name?: string;
  disabled?: boolean;
  required?: boolean;
  optionLabel?: string;
  options?: IOption[] | null;
  hideDefaultChooseOption?: boolean;
}

withDefaults(defineProps<Props>(), {
  label: "Default Select",
  labelClass: "",
  class: "",
  optionClass: "",
  name: "select-input",
  disabled: false,
  required: false,
  selected: "Choose a option",
  options: null,
  hideDefaultChooseOption: false,
});
const model = defineModel<string | null | number>();
</script>
