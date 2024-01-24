 <BaseInput
        label="Search Box"
        placeholder="Search Box"
        inputClass="w-4/6 border border-3 border-red-500"
        labelClass="border-3 border w-full"
        inputTitle="Search Title"
        type="search"
        :size="10"
        maxLength="12"
        min="1"
        regExpForInput="[A-Za-z]{3}"
        validationCustomCss="color: red;"
      >
      </BaseInput>

      <BaseInput
        label="Input Box Text Working Right now"
        placeholder="Custom Input Box 1"
        inputClass="w-full border border-3 "
        labelClass="mb-5 border border-3 border-red-500"
        inputTitle="Hello That is title"
        v-model="inputBox1"
        type="text"
        :size="10"
        maxLength="12"
        min="1"
        regExpForInput="[A-Za-z]{3}"
        validationCustomCss="color: red;"
      >
        <template #suffix>
          <button
            type="button"
            class="text-black absolute bottom-1 font-medium rounded-lg text-sm px-4 py-2 end-0 top-1"
            @click="inputBox1 = ''"
          >
            X
          </button>
        </template>
      </BaseInput>

      <BaseInput
        label="Prefix and Suffix"
        placeholder="Custom Input Box 2.1"
        inputClass="border border-3 border-green-500 ps-8 w-[100%]"
        v-model="inputBox2"
        :required="true"
        type="number"
        :validationStatus="states.inputBox1ValidationStatus"
        validationMessage="Please do not enter the 1100 | 1000"
      >
        <template #prefix>
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path
                d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"
              />
              <path
                d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"
              />
            </svg>
          </div>
        </template>
        <template #suffix>
          <button
            type="button"
            class="text-white absolute end-0 bottom-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            X
          </button>
        </template>
      </BaseInput>

      <BaseInput
        label="Phone"
        placeholder="Phone"
        inputClass="border border-3 border-green-500"
        v-model="inputBox2"
        :required="true"
        type="text"
        :validationStatus="states.inputBox1ValidationStatus"
        validationMessage="Please do not enter the 10e | 10E"
        :autoFocus="true"
      >
        <template #suffix>
          <button
            type="button"
            class="p-2 text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
        </template>
      </BaseInput>


<div class="flex w-full">
  <form @submit.prevent="(e) => console.log(e?.target)" class="w-[50%]">
    <div class="">
      v-model=""
      <BaseInput
        label="Search Box"
        placeholder="Search Box"
        inputClass="w-4/6 border border-3 border-red-500"
        labelClass="border-3 border w-full"
        inputTitle="Search Title"
        type="search"
        :size="10"
        maxLength="12"
        min="1"
        regExpForInput="[A-Za-z]{3}"
        validationCustomCss="color: red;"
      >
      </BaseInput>

      <BaseInput
        label="Input Box Text Working Right now"
        placeholder="Custom Input Box 1"
        inputClass="w-full border border-3 "
        labelClass="mb-5 border border-3 border-red-500"
        inputTitle="Hello That is title"
        v-model="inputBox1"
        type="text"
        :size="10"
        maxLength="12"
        min="1"
        regExpForInput="[A-Za-z]{3}"
        validationCustomCss="color: red;"
      >
        <template #suffix>
          <button
            type="button"
            class="text-black absolute bottom-1 font-medium rounded-lg text-sm px-4 py-2 end-0 top-1"
            @click="inputBox1 = ''"
          >
            X
          </button>
        </template>
      </BaseInput>

      <BaseInput
        label="Prefix and Suffix"
        placeholder="Custom Input Box 2.1"
        inputClass="border border-3 border-green-500 ps-8 w-[100%]"
        v-model="inputBox2"
        :required="true"
        type="number"
        :validationStatus="states.inputBox1ValidationStatus"
        validationMessage="Please do not enter the 1100 | 1000"
      >
        <template #prefix>
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path
                d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"
              />
              <path
                d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"
              />
            </svg>
          </div>
        </template>
        <template #suffix>
          <button
            type="button"
            class="text-white absolute end-0 bottom-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <!-- @click="inputBox2 = ''"
            X
          </button>
        </template>
      </BaseInput>

      <BaseInput
        label="Phone"
        placeholder="Phone"
        inputClass="border border-3 border-green-500"
        v-model="inputBox2"
        :required="true"
        type="text"
        :validationStatus="states.inputBox1ValidationStatus"
        validationMessage="Please do not enter the 10e | 10E"
        :autoFocus="true"
      >
        <template #suffix>
          <button
            type="button"
            class="p-2 text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
        </template>
      </BaseInput>

      <button type="submit" class="rounded bg-green-400 p-2.5 ms-2">
        Submit
      </button>
    </div>
  </form>
</div>
<p>V-Model 2: {{ inputBox2 }}</p>
<p>V-Model 1: {{ inputBox1 }}</p> 