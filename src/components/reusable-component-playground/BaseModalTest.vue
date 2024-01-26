<template>
  <button @click="modal = true">Modal Open</button>

  <BaseModal v-if="modal" :persistent="false" @close="() => (modal = false)" size="sm">
    <template #header>
      <div class="">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
          Terms of Service
        </h3>
      </div>
    </template>
    <template #footer>
      <div
        class="flex items-center p-4 md:p-5 border-gray-200 rounded-b dark:border-gray-600"
      >
        <button
          data-modal-hide="default-modal"
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          I accept
        </button>
        <button
          data-modal-hide="default-modal"
          type="button"
          class="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
        >
          Decline
        </button>
      </div>
    </template>
  </BaseModal>
</template>
<script setup>
import { ref } from "vue";
import BaseModal from "../reusable-components/BaseModal/BaseModal.vue";
const modal = ref(false);
</script>
