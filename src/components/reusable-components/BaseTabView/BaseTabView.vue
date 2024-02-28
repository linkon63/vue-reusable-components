<template>
  <ul
    class="flex flex-wrap -mb-px text-sm font-medium text-center"
    :class="tabListClass"
  >
    <span v-for="item in tabItems">
      <BaseTabHeader
        :item="item"
        :pre-selected="item.id === state.tabSelectedId"
        :tab-header-class="tabHeaderClass"
        @on-tab-click="tabClick"
      />
    </span>
  </ul>
  <div v-if="state.content">
    <BaseTabContent
      :content="state.content"
      :tab-content-class="tabContentClass"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";
import BaseTabContent from "./components/BaseTabContent.vue";
import BaseTabHeader from "./components/BaseTabHeader.vue";
import type { TabItemType } from "./types";

interface State {
  content: string;
  tabSelectedId: string | number;
}

interface Props {
  tabItems: TabItemType[];
  tabListClass?: string;
  tabContentClass?: string;
  tabHeaderClass?: string;
}

const props = withDefaults(defineProps<Props>(), {
  tabItems: () => [
    {
      id: 1,
      tabName: "Home",
      tabContent: "lorem ipsum dolor sit Home",
      tabClass: "bg-red-400 text-white",
      tabSelectedClass: "bg-blue-400 text-white",
    },
    {
      id: 2,
      tabName: "About",
      tabContent: "lorem ipsum dolor sit About",
      tabSelectedClass: "bg-green-400 text-white",
    },
  ],
  tabListClass: "",
  tabContentClass: "",
});

const state = reactive<State>({
  content: "Default content",
  tabSelectedId: "",
});

const tabClick = (id: number | string): void => {
  let contentObj: TabItemType | undefined;
  if (props.tabItems) {
    contentObj = props.tabItems.find((tabItem) => tabItem.id == id);
  }
  if (contentObj?.tabContent) {
    state.content = contentObj.tabContent;
    state.tabSelectedId = id;
  }
};

onMounted(() => {
  if (props.tabItems[0].id && props.tabItems[0]?.tabContent) {
    state.tabSelectedId = props.tabItems[0]?.id;
    state.content = props.tabItems[0]?.tabContent;
  }
});
</script>
