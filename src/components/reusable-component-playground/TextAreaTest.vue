<template>
  <BaseTextArea
    v-model="message"
    placeholder="Hello Text Area"
    label="Your Message"
    class="w-6/12"
    rows="2"
    cols="10"
    @on-change="(e) => console.log('changes', e.target.value)"
    :autoResize="false"
  />
  {{ message }}
</template>
<script setup lang="ts">
import { ref } from "vue";
import BaseTextArea from "../reusable-components/BaseTextArea.vue";

const message = ref("Write your message");
</script>
