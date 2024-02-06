<template class="w-full">
  <h1>Testing Components from here</h1>
  <BaseTabView>
    <!-- <BaseTabItem name="Profile" content="Hello profile it is working" />
    <BaseTabItem name="Dashboard" content="Hello dashboard" /> -->

    <template #tabHeader>
      <BaseTabHeader :id="id1" name="Profile" />
      <BaseTabHeader :id="id2" name="Dashboard" />
    </template>
    <template #tabContent>
      <BaseTabContent
        :id="id1"
        content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
      voluptatem quasi illum quaerat expedita maxime reprehenderit aliquam
      architecto quod magnam harum non doloremque ut quam quos laudantium,
      deserunt iure sunt dolorum. Dolore veniam similique minima, fugit, nemo
      accusantium inventore voluptatem consectetur nobis suscipit soluta, vel
      velit dolorum natus vero voluptate?"
      />
      <BaseTabContent
        :id="id2"
        content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
      voluptatem quas"
      />
    </template>
    
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
import BaseTabItem from "./components/reusable-components/BaseTabView/components/BaseTabItem.vue";
const id1 = generateRandomId();
const id2 = generateRandomId();

function guidGenerator() {
  var S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  );
}

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

// Example usage:
const myId = generateRandomId();
console.log(myId);

console.log(id1, id2);
</script>
