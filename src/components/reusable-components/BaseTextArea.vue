<template>
  <label
    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    :class="labelClass"
    >{{ label }}</label
  >
  <textarea
    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    :class="class"
    :style="`resize : ${autoResize ? 'both' : 'none'}`"
    :value="model"
    :name="name"
    :disabled="disabled"
    :readonly="readonly"
    :required="required"
    :rows="rows"
    :cols="cols"
    :placeholder="placeholder"
    :minlength="minlength"
    :maxlength="maxlength"
    @input="input"
  />
</template>

<script setup lang="ts">
interface Props {
  label?: string;
  labelClass?: string;
  class?: string;
  name?: string;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  rows?: string;
  cols?: string;
  placeholder?: string;
  minlength?: string;
  maxlength?: string;
  autoResize?: boolean;
}

withDefaults(defineProps<Props>(), {
  label: "",
  labelClass: "",
  checked: false,
  class: "",
  name: "base-text-area",
  disabled: false,
  readonly: false,
  required: false,
  rows: "10",
  cols: "30",
  placeholder: "",
  minlength: "",
  maxlength: "",
  autoResize: false,
});
const model = defineModel<string | null | number>();
const input = (e: Event): void => {
  const value: HTMLInputElement = e.target as HTMLInputElement;
  model.value = value.value;
  emit("onChange", e);
};
const emit = defineEmits<{
  (e: "onChange", event: Event): void;
}>();
</script>
