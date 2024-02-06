<template>
  <li class="me-2" role="presentation">
    <button
      class="inline-block p-4 border-b-2 rounded-t-lg"
      type="button"
      @click="click"
    >
      {{ name }}
    </button>
  </li>
</template>
<script lang="ts" setup>
import { onBeforeUpdate, provide, ref, watch } from "vue";
const message = ref("hello");
provide("message", message);

interface Props {
  name: string;
  content?: string;
}
const props = withDefaults(defineProps<Props>(), {
  name: "Default",
  content: "Default contents are there!",
});

const click = (): void => {
  console.log("click", props.name);
  console.log("contents", props.content);
  message.value = props.content;
  console.log("message.value", message.value);
};
// watch(message, () => {
//   console.log("watch changes message after click", props.name);
//   provide("message", message);
// });
// onBeforeUpdate(() => {
//   console.log("onBeforeUpdate", props.name);
//   //   slots.default.forEach((item) => {
//   //   console.log(item.data.key);
//   // });
// });
// beforeUpdate: function () {
//   this.$slots.default.forEach(item => {
//     console.log(item.data.key)
//   })
// }
</script>
