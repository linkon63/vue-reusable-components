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
      :class="[toggleClasses, toggleColor]"
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
import { ComputedRef, computed } from "vue";

interface ToggleProps {
  color?: string;
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

const props = withDefaults(defineProps<ToggleProps>(), {
  color: "",
  disabled: false,
  label: "Toggle",
  modelValue: false,
  size: "md",
  toggleClasses: "",
  checked: false,
  name: "toggle",
  required: false,
});

const toggleColorClasses: Record<string, string> = {
  red: "peer-focus:ring-red-300 dark:peer-focus:ring-red-800 peer-checked:bg-red-600",
  green:
    "peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:bg-green-600",
  purple:
    "peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:bg-purple-600",
  yellow:
    "peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:bg-yellow-400",
  teal: "peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:bg-teal-600",
  orange:
    "peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:bg-orange-500",
};

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

const toggleColor: ComputedRef<string> = computed(
  (): string => toggleColorClasses[props.color]
);
</script>
