<template>
  <div>
    <label
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      :class="labelClass"
      >{{ label }}</label
    >
    <div class="relative block w-full">
      <slot name="prefix"></slot>
      <input
        v-model="model"
        id="inputBox"
        class="w-full text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        :class="class"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        :title="title"
        :size="size"
        :maxlength="maxLength"
        :min="minLength"
        :pattern="regExpForInput ? regExpForInput : ''"
        :autofocus="autoFocus"
      />
      <slot name="suffix"></slot>
    </div>
    <p
      v-if="validationStatus"
      class="mt-2 text-sm"
      :class="validationMessageStyle"
      :style="validationCustomCss"
    >
      {{ validationMessage }}
    </p>
  </div>
</template>
<script setup lang="ts">
type TInputType = "text" | "number" | "phone" | "email" | "tel" | "search";

interface Props {
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  class?: string;
  labelClass?: string;
  title?: string;
  type?: TInputType;
  size?: number;
  maxLength?: string;
  minLength?: string;
  regExpForInput?: string;
  validationStatus?: boolean;
  validationMessage?: string;
  validationMessageStyle?: string;
  validationCustomCss?: string;
  autoFocus?: boolean;
}
withDefaults(defineProps<Props>(), {
  type: "text",
  placeholder: "",
  label: "",
  disabled: false,
  required: false,
  class: "",
  labelClass: "",
  size: 20,
  maxLength: "32",
  minLength: "0",
  regExpForInput: "",
  validationMessage: "Somethings went wrong !",
  validationMessageStyle: "",
  validationCustomCss: "",
  validationStatus: false,
  autoFocus: false,
  title: "",
});
const model = defineModel();
</script>
