# Vue reusable components

## 1️⃣ BaseInput

```js
// component import
<BaseInput />
/* props you can pass in <BaseInput />
     type,placeholder,labelClass,css,disable,required,size, maxLength,maxLength,regExpForInput,validationMessage,validationMessageStyle,validationMessage,validationStatus,autoFocus,title
     */
// Types are : "text" | "number" | "phone" | "email" | "tel" | "search";
//Example: You can pass slots #prefix and #suffix
     <BaseInput>
        <template #suffix>
          <button>
            X
          </button>
        </template>
      </BaseInput>
```

# demo

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
// Example: You can pass slots #inside
// 📝 When you pass #inside slot then in class props given hidden class="hidden"

```

# demo

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

# demo

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

# demo

<div style=" 
    display: flex;
    justify-content: center;
    align-items:center;
    width:100%;
    text-align:center;
    ">
    <img src="https://github.com/linkon63/vue-reusable-components/blob/feature/dropdown-select-reusable-component-4/public/img/basedropdown1.png?raw=true" alt='base-image'
    style="width:48%"
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

# demo

<div style=" 
    display: flex;
    justify-content: center;
    align-items:center;
    width:100%;
    text-align:center;
    ">
    <img src="https://github.com/linkon63/vue-reusable-components/blob/feature/multiselect-dropdown-select-reusable-component-5/public/img/dd1.png?raw=true" alt='base-image'
    style="width:48%"
     />
     <img src="https://github.com/linkon63/vue-reusable-components/blob/feature/multiselect-dropdown-select-reusable-component-5/public/img/dd2.png?raw=true" alt='base-image'
    style="width:48%"
     />
</div>

## 6️⃣

## 7️⃣

## 8️⃣

## 9️⃣

## 🔟
