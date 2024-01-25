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
        <div>
          <div class="relative">
            <div
              class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none"
            >
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="input-group-search"
              class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Products"
            />
          </div>
          <div class="ps-4">
            <BaseCheckbox label="TV" />
            <BaseCheckbox label="Mobile" />
            <BaseCheckbox label="Watch" />
          </div>
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
