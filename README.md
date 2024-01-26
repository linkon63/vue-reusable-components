# Vue reusable components

#### Vue reusable components are there where you can import the component and pass the props for customization..

```bash
$ git clone https://github.com/linkon63/vue-reusable-components/tree/main
$ npm install
$ npm run dev
```

```bash
📑 note : there is reusable-component-playground file, where you can check the components and test and also explore every components 🌀.
```

## 1️⃣ BaseInput

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

## 2️⃣ BaseCheckbox

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

## 3️⃣ BaseTextArea

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

## 4️⃣ BaseSelectInput

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

## 5️⃣ BaseDropDown

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

## 6️⃣ BaseRadio

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

## 7️⃣ BaseButton

```js
// component import
<BaseButton />
/* props you can pass in <BaseButton />
interface Props {
  class?: string;
  name?: string;
  disabled?: boolean;
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
📑 note :You can pass slots #prefix
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

## 8️⃣

## 9️⃣

## 🔟
