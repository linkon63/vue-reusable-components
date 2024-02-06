<template>
  <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
    <slot />
  </div>
  <div id="default-tab-content">
    <div class="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
      == / {{ message }} === Hello
      <!-- <slot /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue";

const message = inject("message");
console.log("Message", message);

// import { inject, ref } from "vue";
// import BaseTabContent from "./components/BaseTabContent.vue";

// // const message = inject("message");

// interface Props {
//   class?: string;
// }

// withDefaults(defineProps<Props>(), {
//   class: "",
// });

// const content = ref("Default contents");
</script>
