<template>
  <button
    class="inline-block p-4 border-b-2 rounded-t-lg hover:border-b-2 hover:border-teal-700"
    :class="`${
      preSelected &&
      `border-b-2 border-teal-700 ${tabHeaderClass}  ${item?.tabSelectedClass}`
    }  ${item.tabClass}`"
    type="button"
    @click="click(item.id)"
  >
    <span v-if="item.prefixIcon" :class="item?.prefixIconClass">
      <i :class="item.prefixIcon"></i>
    </span>
    {{ item.tabName }}
    <span v-if="item.suffixIcon" :class="item?.suffixIconClass">
      <i :class="item.suffixIcon"></i>
    </span>
  </button>
</template>
<script lang="ts" setup>
import { TabItemType } from "../types";
interface Props {
  item: TabItemType;
  preSelected?: boolean;
  tabHeaderClass?: string;
}
withDefaults(defineProps<Props>(), {
  id: "",
  name: "Default",
  preSelected: false,
  tabHeaderClass: "",
});

const emit = defineEmits<{
  (id: "on-tab-click", event: string | number): void;
}>();

const click = (id: string | number): void => {
  emit("on-tab-click", id);
};
</script>
