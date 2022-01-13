import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

import App from "./App.vue";

import Home from "./components/Home.vue";
import Step1 from "./components/Step1.vue";
import Step2 from "./components/Step2.vue";
import Step3 from "./components/Step3.vue";
import fullPrice from "./components/FullPrice.vue";
import { store } from "./components/store/store";

const router = createRouter({
  history: createWebHashHistory("configure-admin"),
  routes: [
    { path: "", component: Home },
    { path: "/step1", component: Step1 },
    { path: "/step2", component: Step2 },
    { path: "/step3", component: Step3 },
    { path: "/full-price", component: fullPrice },
  ],
});

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");
