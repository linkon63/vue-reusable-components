<template class="w-full">
  <div class="p-12">
    <BaseTabView
      :tab-items="tabItems"
      tab-list-class="bg-red-400 w-4/12"
      tab-content-class="bg-green-400 w-4/12"
      tab-header-class="border-t-2 border-teal-700"
    />
  </div>
</template>
<script setup lang="ts">
import BaseTabView from "./components/reusable-components/BaseTabView/BaseTabView.vue";
import type { TabItemType } from "./components/reusable-components/BaseTabView/types";
const tabItems: TabItemType[] = [
  {
    id: 1,
    tabName: "Home",
    tabContent: "lorem ipsum dolor sit Home",
    tabClass: "bg-red-400 text-white",
    tabSelectedClass: "bg-blue-400 text-white",
    prefixIcon: "fab fa-js",
  },
  {
    id: 2,
    tabName: "About",
    tabContent: "lorem ipsum dolor sit About",
    tabSelectedClass: "bg-green-400 text-white",
    prefixIcon: "fab fa-vuejs",
  },
  { id: 3, tabName: "Profile", tabContent: "lorem ipsum dolor sit Profile" },
  {
    id: 4,
    tabName: "Dashboard",
    tabContent: "lorem ipsum dolor sit Dashboard",
  },
];
</script>
