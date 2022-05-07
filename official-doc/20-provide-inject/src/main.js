import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.provide("message2", "hello! root");

app.mount("#app");
// createApp(App).mount('#app')
