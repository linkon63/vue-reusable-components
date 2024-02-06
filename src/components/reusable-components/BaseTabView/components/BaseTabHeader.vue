<template>
  <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center">
      <slot />
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

interface Props {
  name?: string;
  content?: string;
}
withDefaults(defineProps<Props>(), {
  name: "Default",
  content: "content",
});

const activeTab = ref("");

// <div class="me-2" role="presentation">
//     <!-- data-tabs-target="#profile"
//       aria-selected="false" -->
//     <!-- role="tab" -->
//     <!-- id="profile-tab" -->
//     <button
//       class="inline-block p-4 border-b-2 rounded-t-lg"
//       :class="activeTab === name && 'text-white bg-blue-600 rounded-lg active'"
//       type="button"
//       @click="
//         (e) => {
//           console.log('Header Click pass the props to the base tab view', e);
//           activeTab = name;
//         }
//       "
//     >
//       {{ name }} {{ content }}
//     </button>
//   </div>
</script>
