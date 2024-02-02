<template class="w-full">
  <h1>Testing Components from here</h1>
  <div class="px-48">
    <BaseAccordion
      accordion-panel-class="bg-red-500 text-white w-3/12"
      accordion-content-class="w-3/12 bg-green-600"
      :always-open="true"
    >
      <template #panelPrefix>❕</template>
      <template #panelSuffix>🚭</template>

      <template #accordionContent>
        <p class="mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, soluta!
        </p>
        <p class="">
          Lorem ipsum dolor sit amet.
          <a
            href="/docs/getting-started/introduction/"
            class="text-blue-600 dark:text-blue-500 hover:underline"
            >Start Your Things</a
          >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam,
          laborum qui! Beatae rerum cum optio asperiores, similique natus
          sapiente odit!
        </p>
      </template>
    </BaseAccordion>
  </div>
  <BaseAccordion accordion-label="Hello Accordion" />
  <BaseAccordion id="ac-id-1" label="Reusable Components" key="1234" />

  <br />
  <br />
  <br />
  <br />
  <!-- <BaseAccordion id="ac-id-1" label="Reusable Components" key="1234"/> -->

  <BaseAccordion id="ac-id-1" label="Reusable Components" key="4321" />

 
</template>
<script setup lang="ts">
import BaseAccordion from "./components/reusable-components/BaseAccordion/BaseAccordion.vue";
import BaseChips from "./components/reusable-components/BaseChips/BaseChips.vue";
</script>
