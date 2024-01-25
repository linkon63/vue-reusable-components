<template>
  <button
    id="dropdownCheckboxButton"
    data-dropdown-toggle="dropdownDefaultCheckbox"
    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    type="button"
    :class="labelClass"
  >
    {{ label }}
    <slot name="rightIcon" />
  </button>

  <!-- Dropdown menu -->
  <div
    id="dropdownDefaultCheckbox"
    class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
    :class="class"
  >
    <span
      class="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="dropdownCheckboxButton"
      :class="dropdownClass"
    >
      <slot name="dropdownItems" />
    </span>
  </div>
</template>
<script setup lang="ts">
interface Props {
  label?: string;
  labelClass?: string;
  class?: string;
  dropdownClass?: string;
}

withDefaults(defineProps<Props>(), {
  label: "Default Select",
  labelClass: "",
  class: "",
  dropdownClass: "",
});
</script>
