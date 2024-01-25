<template>
  <div class="p-48">
    <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
      Identification
    </h3>
    <ul
      class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white"
    >
      <li
        class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
      >
        <div class="flex items-center ps-3">
          <BaseRadio
            id="horizontal-list-radio-license"
            type="radio"
            value=""
            name="list-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            label-class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 w-[10%]"
            label="Driving License"
          />
        </div>
      </li>
      <li
        class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
      >
        <div class="flex items-center ps-3">
          <BaseRadio
            id="horizontal-list-radio-license"
            type="radio"
            value=""
            name="list-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            label-class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 w-[10%]"
            label="Passport"
          />
        </div>
      </li>
      <li
        class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
      >
        <div class="flex items-center ps-3">
          <input
            id="horizontal-list-radio-military"
            type="radio"
            value=""
            name="list-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />
          <label
            for="horizontal-list-radio-military"
            class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >ID Card</label
          >
        </div>
      </li>
    </ul>
  </div>
  <div class="p-48">
    <BaseRadio
      label="Yes"
      v-model="radio"
      value="yes"
      label-class="bg-green-500 text-white px-6 w-[10%]"
    />
    <BaseRadio
      label="No"
      v-model="radio"
      value="no"
      label-class="bg-red-500 text-white px-6 w-[10%]"
    />
  </div>

  {{ radio }}
</template>
<script setup lang="ts">
import { ref } from "vue";
import BaseRadio from "../reusable-components/BaseRadio.vue";
const radio = ref("yes");
</script>
