<template>
  <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
    <ul
      class="flex flex-wrap -mb-px text-sm font-medium text-center"
      id="default-tab"
      data-tabs-toggle="#default-tab-content"
      role="tablist"
    >
      <BaseTabHeader :id="id1" name="Profile" />
      <BaseTabHeader :id="id2" name="Dashboard" />
    </ul>
  </div>
  <div id="default-tab-content">
    <BaseTabContent :id="id1" content="Hello Profile" />
    <BaseTabContent :id="id2" content="Hello Dashboard" />
  </div>
</template>

<script setup lang="ts">
import BaseTabContent from "./BaseTabContent.vue";
import BaseTabHeader from "./BaseTabHeader.vue";

interface Props {
  name?: string;
  content?: string;
}
withDefaults(defineProps<Props>(), {
  name: "Default",
  content: "content",
});

function generateRandomId() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomId = "";

  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
  }

  return randomId;
}

const id1 = generateRandomId();
const id2 = generateRandomId();

</script>
