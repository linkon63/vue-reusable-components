### Vue reusable components

#### | Vue reusable components are there where you can import the component and pass the props for customization..

```bash
$ git clone https://github.com/linkon63/vue-reusable-components/tree/main
$ npm install
$ npm run dev
```

```bash
📑 note : there is reusable-component-playground file, where you can check the components and test and also explore every components 🌀.
```

# Pre-requisites
```bash
Install Tailwind for use this library
Link : https://tailwindcss.com/docs/installation

## OR Include CDN in index.html file in your projects

<link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css"  rel="stylesheet" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>
<script src="https://cdn.tailwindcss.com"></script>


## then install vue-reusable-components

$ npm i vue-reusable-components
```

## 1 BaseInput

#### it is for all the "text" | "number" | "phone" | "email" | "tel" | "search"

```js
// component import
<BaseInput />
/* props you can pass in <BaseInput />
     type,
     placeholder,
     labelClass,
     disable,
     required,
     size,
     maxLength,
     maxLength,
     regExpForInput,
     validationMessage,
     validationMessageStyle,
     validationMessage,
     validationStatus,
     autoFocus,
     title
     */
     <BaseInput>
        <template #suffix>
          <button>
            X
          </button>
        </template>
      </BaseInput>
```

```bash
📑 note : You can pass slots #prefix and #suffix
```

### demo

<div style=" 
    display:block;
    float:none;
    margin-left:auto;
    margin-right:auto;
    width:100%;
    text-align: center;
    ">
    <img src="https://github.com/linkon63/vue-reusable-components/blob/feature/textarea-reusable-component/public/img/baseinputbox1.png?raw=true" alt='base-image'  style="width:100%" />
    <img src="https://github.com/linkon63/vue-reusable-components/blob/feature/textarea-reusable-component/public/img/baseinputbox2.png?raw=true" alt='base-image'   style="width:100%"/>
    <img src="https://github.com/linkon63/vue-reusable-components/blob/feature/textarea-reusable-component/public/img/baseinputbox3.png?raw=true" alt='base-image'  style="width:100%" />
</div>

## 2️ BaseCheckbox

```js
// component import
<BaseCheckbox />
/* props you can pass in <BaseInput />
    label?: string;
    labelClass?: string;
    class?: string;
    checked?: boolean;
    name?: string;
    disabled?: boolean;
    readonly?: boolean;
    required?: boolean;
    */
// Example :
    <BaseCheckbox
    @on-change="(e:Event) => {
    let value : HTMLInputElement = e.target as HTMLInputElement
    if (value) {
        console.log(value.value)
    }
    }"
    />
```

```bash
📑 note : You can pass slots #inside but When you pass #inside slot then in class props given hidden class="hidden"
```

### demo

<div style=" 
    display:block;
    float:none;
    margin-left:auto;
    margin-right:auto;
    width:100%;
    text-align: center;
    ">
    <img src="https://github.com/linkon63/vue-reusable-components/blob/feature/textarea-reusable-component/public/img/basecheckbox1.png?raw=true" alt='base-image'  style="width:100%" />
    <img src="https://github.com/linkon63/vue-reusable-components/blob/feature/textarea-reusable-component/public/img/basecheckbox2.png?raw=true" alt='base-image'  style="width:100%" />
    <img src="https://github.com/linkon63/vue-reusable-components/blob/feature/textarea-reusable-component/public/img/basecheckbox3.png?raw=true" alt='base-image'  style="width:100%" />
</div>

## 3️ BaseTextArea

```js
// component import
<BaseTextArea />
/* props you can pass in <BaseTextArea />
  label?: string;
  labelClass?: string;
  class?: string;
  name?: string;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  rows?: string;
  cols?: string;
  placeholder?: string;
  minlength?: string;
  maxlength?: string;
  autoResize?: boolean;
    */

// example
<BaseTextArea
    v-model="message"
    placeholder="Write you message"
    label="Your Message"
    @on-change="(e) => console.log('changes', e.target.value)"
    :autoResize="false"
/>
```

### demo

<div style=" 
    display:block;
    float:none;
    margin-left:auto;
    margin-right:auto;
    width:100%;
    text-align: center;
    ">
    <img src="https://github.com/linkon63/vue-reusable-components/blob/feature/textarea-reusable-component/public/img/basetextarea.png?raw=true" alt='base-image'
    style="width:100%"
     />
</div>

## 4️ BaseSelectInput

```js
// component import
<BaseSelectInput />
/* props you can pass in <BaseSelectInput />
interface IOption {
  id?: number | string;
  name?: string;
  value?: string | number;
}
interface Props {
  label?: string;
  labelClass?: string;
  class?: string;
  optionClass: string;
  name?: string;
  disabled?: boolean;
  required?: boolean;
  optionLabel?: string;
  options?: IOption[] | null;
  hideDefaultChooseOption: boolean;
}
*/

// example
 <BaseSelectInput
    v-model="message"
    :options="options"
    option-class="bg-red-500"
    :hide-default-choose-option="true"
    optionLabel="Your status"
  />
```

### demo

<div style=" 
    display: flex;
    justify-content: center;
    align-items:center;
    width:100%;
    height: 300px;
    ">
    <img src="https://github.com/linkon63/vue-reusable-components/blob/feature/dropdown-select-reusable-component-4/public/img/basedropdown1.png?raw=true" alt='base-image'
    style="width:48%; width:350px"
     />
     <img src="https://github.com/linkon63/vue-reusable-components/blob/feature/dropdown-select-reusable-component-4/public/img/basedropdown2.png?raw=true" alt='base-image'
    style="width:48%"
     />
</div>

## 5️ BaseDropDown

```js
// component import
<BaseDropDown />
/* props you can pass in <BaseDropDown />
interface Props {
  label?: string;
  labelClass?: string;
  class?: string;
  dropdownClass?: string;
}
*/
// example
 <BaseDropDown
      label="Multi Select Drop Down"
      labelClass="bg-green-400 hover:bg-green-500"
      class="bg-gray-200"
      dropdown-class="p-0"
    >
      <template #rightIcon>
        <svg
          class="w-2.5 h-2.5 ms-3"
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
            d="m1 1 4 4 4-4"
          />
        </svg>
      </template>
      <template #dropdownItems>
        <div class="ps-4">
          <BaseCheckbox label="React" />
          <BaseCheckbox label="Vue" />
          <BaseCheckbox label="Laravel" />
        </div>
      </template>
    </BaseDropDown>
```

### demo

<div style=" 
    display: flex;
    justify-content: center;
    align-items:center;
    width:100%;
    text-align:center;
    ">
    <img src="https://github.com/linkon63/vue-reusable-components/blob/feature/multiselect-dropdown-reusable-component-5/public/img/dd1.png?raw=true" alt='base-image'
    style="width:48%"
     />
     <img src="https://github.com/linkon63/vue-reusable-components/blob/feature/multiselect-dropdown-reusable-component-5/public/img/dd2.png?raw=true" alt='base-image'
    style="width:48%"
     />
</div>
<div style="display: flex;
    justify-content: center;
    align-items:center;
    width:100%;
    text-align:center;
    height: 400px;
    "
    >
<img src="https://github.com/linkon63/vue-reusable-components/blob/feature/multiselect-dropdown-reusable-component-5/public/img/dd3.png?raw=true" alt='base-image'
style="width:48%; height: 350px"
/>
<img src="https://github.com/linkon63/vue-reusable-components/blob/feature/multiselect-dropdown-reusable-component-5/public/img/dd5.png?raw=true" alt='base-image'
style="width:48%; height: 350px"
/>
</div>

## 6️ BaseRadio

```js
// component import
<BaseRadio />
/* props you can pass in <BaseRadio />
interface Props {
  label?: string;
  labelClass?: string;
  class?: string;
  checked?: boolean;
  name?: string;
  disabled?: boolean;
  value?: string | number | boolean;
}
*/
// example
    <BaseRadio
      label="Yes"
      v-model="radio"
      value="yes"
      label-class="bg-green-500 text-white px-6 w-[10%]"
    />
    <BaseRadio
      label="No"
      v-model="radio"
      value="no"
      label-class="bg-red-500 text-white px-6 w-[10%]"
    />
```

### demo

<div style=" 
    width:100%;
    text-align:center;
    ">
    <img src="https://github.com/linkon63/vue-reusable-components/blob/feature/radio-button-reusable-component-6/public/img/rd1.png?raw=true" alt='base-image'
    style="width:100%; margin: 10px"
     />
     <img src="https://github.com/linkon63/vue-reusable-components/blob/feature/radio-button-reusable-component-6/public/img/rd2.png?raw=true" alt='base-image'
    style="width:100%; margin: 10px"
     />
</div>

## 7️ BaseButton

```js
// component import
<BaseButton />
/* props you can pass in <BaseButton />
interface Props {
  class?: string;
  loadingClass?: string;
  name?: string;
  disabled?: boolean;
  loading?: boolean;
}
*/
// example

  <BaseButton
      name="Paypal Payment"
      class="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2"
      @on-click="console.log('log')"
      :disabled="false"
    >
      <template #prefix>
        <svg
          class="w-5 h-5 me-2 -ms-1"
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="apple"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path
            fill="currentColor"
            d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
          ></path>
        </svg>
      </template>
</BaseButton>
```

```bash
📑 note :You can pass slots #prefix and #customPrefix and #customSuffix also #suffix
```

### demo

<div style=" 
    width:100%;
    text-align:center;
    ">
    <img src="https://github.com/linkon63/vue-reusable-components/blob/feature/button-reusable-component-7/public/img/btn1.png?raw=true" alt='base-image'
    style="width:100%; margin: 10px"
     />
     <img src="https://github.com/linkon63/vue-reusable-components/blob/feature/button-reusable-component-7/public/img/btn2.png?raw=true" alt='base-image'
    style="width:100%; margin: 10px"
     />
    <img src="https://github.com/linkon63/vue-reusable-components/blob/feature/button-reusable-component-7/public/img/btn3.png?raw=true" alt='base-image'
    style="width:100%; margin: 10px"
     />
</div>

## 8️ Base Modal

```js
// component import
<BaseModal />
/* props you can pass in <BaseButton />
interface Props {
  notEscapable?: boolean;
  persistent?: boolean;
  size?: ModalSize;
}
*/
// example

<template>
  <button @click="modal = true">Modal Open</button>

  <BaseModal v-if="modal" :persistent="false" @close="() => (modal = false)" size="sm">
    <template #header>
      <div class="">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
          Terms of Service
        </h3>
      </div>
    </template>
    <template #footer>
      <div
        class="flex items-center p-4 md:p-5 border-gray-200 rounded-b dark:border-gray-600"
      >
        <button
          data-modal-hide="default-modal"
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          I accept
        </button>
        <button
          data-modal-hide="default-modal"
          type="button"
          class="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
        >
          Decline
        </button>
      </div>
    </template>
  </BaseModal>
</template>
<script>
const modal = ref(false);
</script>
```

```bash
📑 note :You can pass slots #header and #body and #footer
```

### demo

<div style=" 
    width:100%;
    text-align:center;
    ">
    <img src="https://github.com/linkon63/vue-reusable-components/blob/feature/basemodal-reusable-component-8/public/img/bmodal.png?raw=true" alt='base-image'
    style="width:100%; margin: 10px"
     />
</div>

## 9️ Base Toggle

```js
// component import
<BaseToggle />
/* props you can pass in <BaseToggle />
interface Props {
  disabled?: boolean;
  checked?: boolean;
  label?: string;
  labelClasses?: string;
  toggleClasses?: string;
  toggleBallClasses?: string;
  modelValue?: boolean;
  size?: string;
  name?: string;
  required?: boolean;
}
*/
// example
    <BaseToggle
      label="Hello Toggle"
      toggle-classes="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"
      toggle-ball-classes="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"
    />
    <BaseToggle
      label="Sound"
      toggle-classes="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"
      toggle-ball-classes="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"
    >
      <template #labelPrefix>📢</template>
    </BaseToggle>
  </div>
```

### demo

<div style=" 
    width:100%;
    text-align:center;
    ">
    <img src="https://github.com/linkon63/vue-reusable-components/blob/feature/basetogglebutton-reusable-component-9/public/img/btoggle1.png?raw=true" alt='base-image'
    style="width:100%; margin: 10px"
     />
     <img src="https://github.com/linkon63/vue-reusable-components/blob/feature/basetogglebutton-reusable-component-9/public/img/btoggle2.png?raw=true" alt='base-image'
    style="width:100%; margin: 10px"
     />
</div>

## 10 Base Chips

```js
// component import
<BaseChips />
/* props you can pass in <BaseChips />
interface Props {
label?: string;
  labelClass?: string;
  class?: string;
  removeButton?: boolean;
  removeButtonClass?: string;
  visibility?: boolean;
}
*/
// example
    <BaseChips />
    <BaseChips label="Stop" :remove-button="true" label-class="bg-green-900 text-red-500">
      <template #prefix>
        ⛔
      </template>
    </BaseChips>
    <BaseChips label="Pin" :remove-button="true">
      <template #prefix>
        📌
      </template>
    </BaseChips>
```

```bash
📑 note :You can pass slots #prefix and #suffix
```

### demo

<div style=" 
    width:100%;
    text-align:center;
    ">
    <img src="https://github.com/linkon63/vue-reusable-components/blob/feature/basechips-reusable-component-10/public/img/bchips1.png?raw=true" alt='base-image'
    style="width:100%; margin: 10px"
     />
</div>

## 11 Base Accordion

```js
// component import
<BaseAccordion />
/* props you can pass in <BaseAccordion />
interface Props {
  alwaysOpen?: boolean;
  accordionPanelClass?: string;
  accordionLabel?: string;
  accordionContentClass?: string;
  visiblePanelIcon?: boolean;
}
*/
// example
    <BaseAccordion
      accordion-panel-class="bg-red-500 text-white w-3/12"
      accordion-content-class="w-3/12 bg-green-600"
      :always-open="true"
    >
      <template #panelPrefix>❕</template>
      <template #panelSuffix>🚭</template>

      <template #accordion-content>
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
```

```bash
📑 note :You can pass slots #panelPrefix and #panelSuffix , #panelIcon ,#accordionContent
```

### demo

<div style=" 
    width:100%;
    text-align:center;
    ">
    <img src="https://github.com/linkon63/vue-reusable-components/blob/feature/baseaccordion-reusable-component-11/public/img/baseacordion.png?raw=true" alt='base-image'
    style="width:100%; margin: 10px"
     />
</div>

## 11 Base Tab View

```js
// component import
<BaseTabView />
/* props you can pass in <BaseTabView />
interface Props {
  tabItems: TabItemType[];
  tabListClass?: string;
  tabContentClass?: string;
  tabHeaderClass?: string;
}
*/
/*
export interface TabItemType {
  id: string | number;
  tabName?: string;
  tabContent?: string;
  tabClass?: string;
  tabSelectedClass?: string;
  prefixIcon?: string;
  suffixIcon?: string;
  prefixIconClass?: string;
  suffixIconClass?: string;
}
*/

// example
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
```

```bash
📑 note : index.html file import the cdn of front awesome
Example Below :
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + Vue</title>
    <!-- This line you have to add Start -->
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    />
    <!-- This line you have to add End -->
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
  <script src="./node_modules/flowbite/dist/flowbite.min.js"></script>
</html>
```

### demo

<div style=" 
    width:100%;
    text-align:center;
    ">
    <img src="https://github.com/linkon63/vue-resuable-components/blob/b655fe9a1d25cf577403bc700e404bc3b5ae95f0/public/img/tabview1.png?raw=true" alt='base-image'
    style="width:100%; margin: 10px"
     />
     <img src="https://github.com/linkon63/vue-resuable-components/blob/b655fe9a1d25cf577403bc700e404bc3b5ae95f0/public/img/tabView2.png?raw=true" alt='base-image'
    style="width:100%; margin: 10px"
     />
</div>
