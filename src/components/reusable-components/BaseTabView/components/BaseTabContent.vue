<template>
  <p
    class="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
    :class="tabContentClass"
  >
    {{ content }}
  </p>
</template>
<script lang="ts" setup>
interface Props {
  content?: string;
  tabContentClass?: string;
}
withDefaults(defineProps<Props>(), {
  content: "Default",
  tabContentClass: "",
});
</script>
