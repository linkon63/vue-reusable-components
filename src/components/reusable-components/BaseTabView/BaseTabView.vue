<!-- <template>
  <slot />
</template>

<script setup lang="ts">
interface Props {
  tabHeader?: string;
  tabContent?: string;
}
withDefaults(defineProps<Props>(), {
  tabHeader: "Default",
  tabContent: "",
});
</script> -->

<template>
  <slot></slot>
  <!-- <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
    <ul
      class="flex flex-wrap -mb-px text-sm font-medium text-center"
      id="default-tab"
      data-tabs-toggle="#default-tab-content"
      role="tablist"
    >
      <slot name="tabHeader" />
    </ul>
  </div>
  <div id="default-tab-content">
    <slot name="tabContent"></slot>
  </div> -->
</template>

<script setup lang="ts"></script>
