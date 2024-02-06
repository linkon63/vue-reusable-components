<template>
  <!-- {{ content }} -->
  <!-- <BaseTabView>
    <template #tabViewContent>
    </template>
  </BaseTabView> -->
</template>
<script lang="ts" setup>
import { provide } from "vue";
import BaseTabView from "../BaseTabView.vue";
interface Props {
  content: string;
}
const props = withDefaults(defineProps<Props>(), {
  content: "Default",
});

// // can react to changes happening here.
// const content = props.content;
// provide("message", content);
</script>
