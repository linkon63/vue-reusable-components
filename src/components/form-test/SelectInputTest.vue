<template>
  <div class="ms-5 p-10">
    <BaseDropDown
      label="Remove low stock product"
      labelClass="bg-red-400 hover:bg-green-500"
      class="bg-gray-200"
      dropdown-class="p-0"
    >
      <template #rightIcon>
        <svg
          class="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </template>
      <template #dropdownItems>
        <div class="ps-4">
          <BaseCheckbox label="Car" />
          <BaseCheckbox label="TV" />
          <BaseCheckbox label="Mobile" />
          <BaseCheckbox label="Watch" />
          <BaseCheckbox label="Bike" />

        </div>
      </template>
    </BaseDropDown>
  </div>
  {{ message }}
</template>
<script setup lang="ts">
import { ref } from "vue";
import BaseSelectInput from "../reusable-components/BaseSelectInput.vue";
import BaseDropDown from "../reusable-components/BaseDropDown.vue";
import BaseCheckbox from "../reusable-components/BaseCheckbox.vue";

const message = ref("");
const options = ref([
  { id: 1, value: "US", name: "United State" },
  {
    id: 2,
    value: " UK",
    name: "United Kingdom",
  },
  {
    id: 3,
    value: "CA",
    name: "Canada",
  },
]);
</script>
