import Vue from "vue";
import App from "./App.vue";
import MyLibrary from "./index.ts";

Vue.use(MyLibrary);

new Vue({
  render: (h) => h(App),
}).$mount("#app");

// -------- Code
// import { createApp } from "vue";
// import App from "./App.vue";
// import "./style.css";
// Vue.use(MyLibrary);
// createApp(App).mount("#app");
