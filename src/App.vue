<template class="w-full">
  <h1>Testing Components from here</h1>
  <BaseTabView>
    <BaseTabHeader>
      <BaseTabHeaderItem name="About" content="hello about"></BaseTabHeaderItem>
      <BaseTabHeaderItem name="Content" content="hello content"></BaseTabHeaderItem>
      <BaseTabHeaderItem name="YoYo" content="hello content Yoyo"></BaseTabHeaderItem>
    </BaseTabHeader>
  </BaseTabView>
  <h1>Testing Components from here</h1>
</template>
<script setup lang="ts">
import BaseAccordion from "./components/reusable-components/BaseAccordion/BaseAccordion.vue";
import BaseChips from "./components/reusable-components/BaseChips/BaseChips.vue";
import BaseTabView from "./components/reusable-components/BaseTabView/BaseTabView.vue";
import BaseTabContent from "./components/reusable-components/BaseTabView/components/BaseTabContent.vue";
import BaseTabHeader from "./components/reusable-components/BaseTabView/components/BaseTabHeader.vue";
import BaseTabHeaderItem from "./components/reusable-components/BaseTabView/components/BaseTabHeaderItem.vue";
</script>
