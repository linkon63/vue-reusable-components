<template class="w-full">
  <h1>Testing Components from here</h1>
  <div class="p-8">
    <BaseChips />
    <BaseChips label="Stop" :remove-button="true" label-class="bg-green-900 text-red-500">
      <template #prefix>
        ⛔
      </template>
    </BaseChips>
    <BaseChips label="Pin" :remove-button="true">
      <template #prefix>
        📌
      </template>
    </BaseChips>
  </div>
</template>
<script setup lang="ts">
import BaseChips from "./components/reusable-components/BaseChips/BaseChips.vue";
</script>
