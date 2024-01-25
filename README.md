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
![BaseTextArea](https://github.com/linkon63/vue-reusable-components/blob/feature/textarea-reusable-component/public/img/basecheckbox1.png?raw=true)

![BaseTextArea](https://github.com/linkon63/vue-reusable-components/blob/feature/textarea-reusable-component/public/img/basecheckbox2.png?raw=true)

![BaseTextArea](https://github.com/linkon63/vue-reusable-components/blob/feature/textarea-reusable-component/public/img/basecheckbox3.png?raw=true)

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
  ![BaseTextArea](https://github.com/linkon63/vue-reusable-components/blob/feature/textarea-reusable-component/public/img/basetextarea.png?raw=true)

## 4️⃣

## 5️⃣

## 6️⃣

## 7️⃣

## 8️⃣

## 9️⃣

## 🔟
