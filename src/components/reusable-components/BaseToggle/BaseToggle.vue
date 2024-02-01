<template>
  <label
    :class="labelClasses"
    class="relative inline-flex items-center me-5 cursor-pointer"
  >
    <input
      type="checkbox"
      :value="model"
      :name="name"
      class="sr-only peer"
      :disabled="disabled"
      :required="required"
      :checked="checked"
      @click="click"
      @change="changes"
    />
    <div
      class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
      :class="toggleClasses"
    ></div>
    <span
      :class="toggleBallClasses"
      class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"
    >
      <slot name="labelPrefix" />
      {{ label }}
      <slot name="labelSuffix" />
    </span>
  </label>
</template>

<script lang="ts" setup>
interface ToggleProps {
  disabled?: boolean;
  checked?: boolean;
  label?: string;
  labelClasses?: string;
  toggleClasses?: string;
  toggleBallClasses?: string;
  modelValue?: boolean;
  size?: string;
  name?: string;
  required?: boolean;
}

withDefaults(defineProps<ToggleProps>(), {
  disabled: false,
  label: "Toggle",
  modelValue: false,
  size: "md",
  toggleClasses: "",
  checked: false,
  name: "toggle",
  required: false,
});

const model = defineModel();
const emit = defineEmits<{
  (e: "onClick", event: Event): void;
  (e: "onChange", event: Event): void;
}>();

const click = (e: Event): void => {
  emit("onClick", e);
};
const changes = (e: Event): void => {
  emit("onChange", e);
};
</script>
