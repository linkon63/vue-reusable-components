<template>
  <button
    type="button"
    class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
    :class="accordionPanelClass"
    @click="state.isOpenAccordion = !state.isOpenAccordion"
  >
    <slot name="panelPrefix" />
    <span>{{ accordionLabel }}</span>
    <slot name="panelSuffix" />
    <slot name="panelIcon" />
    <span v-if="!visiblePanelIcon">
      <svg
        data-accordion-icon
        class="w-3 h-3 shrink-0"
        :class="state.isOpenAccordion ? 'rotate-180' : ' rotate-0'"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5 5 1 1 5"
        />
      </svg>
    </span>
  </button>
  <div :class="state.isOpenAccordion ? 'block' : 'hidden'">
    <div
      class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"
      :class="accordionContentClass"
    >
      <slot name="accordionContent" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, reactive, ref } from "vue";
interface Props {
  alwaysOpen?: boolean;
  accordionPanelClass?: string;
  accordionLabel?: string;
  accordionContentClass?: string;
  visiblePanelIcon?: boolean;
}
interface State {
  isOpenAccordion?: boolean;
}
const props: Props = withDefaults(defineProps<Props>(), {
  alwaysOpen: false,
  accordionPanelClass: "",
  accordionLabel: "Default Levels",
  accordionContentClass: "",
  visiblePanelIcon: false,
});
const state: State = reactive<State>({
  isOpenAccordion: false,
});
onMounted(() => {
  if (props.alwaysOpen) {
    state.isOpenAccordion = true;
  }
});
</script>
