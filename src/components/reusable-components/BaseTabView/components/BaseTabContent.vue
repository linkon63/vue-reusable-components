<template>
  <div
    class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
    :id="id"
    role="tabpanel"
    :aria-labelledby="id + 'tab'"
  >
    <p class="text-sm text-gray-500 dark:text-gray-400">
      {{ content }}
    </p>
  </div>
</template>
<script lang="ts" setup>
import { provide } from "vue";
import BaseTabView from "../BaseTabView.vue";
interface Props {
  content?: string;
  id?: string;
}
const props = withDefaults(defineProps<Props>(), {
  content: "Default",
  id: "",
});
</script>
