<template>
  <div class="flex items-center">
    <input
      id="bordered-checkbox-2"
      type="checkbox"
      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      :class="class"
      :value="model"
      :name="name"
      :checked="checked"
      :disabled="disabled"
      :readonly="readonly"
      :required="required"
      @click="click"
      @change="changes"
    />
    <label
      for="bordered-checkbox-2"
      class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      :class="labelClass"
    >
      {{ label }}
      <slot name="inside" />
    </label>
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
  readonly?: boolean;
  required?: boolean;
}

withDefaults(defineProps<Props>(), {
  label: "",
  labelClass: "",
  checked: false,
  class: "",
  name: "bordered-checkbox",
  disabled: false,
  readonly: false,
  required: false,
  insideTemplate: false,
});
const model = defineModel();
const emit = defineEmits<{
  (e: "onClick", event: Event): void;
  (e: "onChange", event: Event): void;
}>();

const click = (e: Event) => {
  emit("onClick", e);
};
const changes = (e: Event) => {
  emit("onChange", e);
};
</script>
