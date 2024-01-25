<template>
  <BaseDropDown />
  <!-- <BaseSelectInput
    v-model="message"
    :options="options"
    option-class="bg-red-500"
    :hide-default-choose-option="true"
    optionLabel="Your status"
  /> -->
  {{ message }}
</template>
<script setup lang="ts">
import { ref } from "vue";
import BaseSelectInput from "../reusable-components/BaseSelectInput.vue";
import BaseDropDown from "../reusable-components/BaseDropDown.vue";

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
