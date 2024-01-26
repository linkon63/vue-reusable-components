<template>
  <button
    type="button"
    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    :class="class"
    :disabled="disabled"
    @click="click"
  >
    <slot name="prefix" />
    {{ name }}
  </button>
</template>
<script setup lang="ts">
interface Props {
  class?: string;
  name?: string;
  disabled?: boolean;
}

withDefaults(defineProps<Props>(), {
  class: "",
  name: "base-button",
  disabled: false,
});
const emit = defineEmits<{
  (e: "onClick"): void;
}>();

const click = (): void => {
  emit("onClick");
};
</script>
