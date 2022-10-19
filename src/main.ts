import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Flicking from "@egjs/vue3-flicking";
import "vueperslides/dist/vueperslides.css";
import "@egjs/vue3-flicking/dist/flicking.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import { createMetaManager } from "vue-meta";
import { storeKey } from "vuex";

createApp(App)
  .use(router)
  .use(store)
  .use(createMetaManager())
  .use(store, storeKey)
  .use(store)
  .use(router)
  .component("Flicking", Flicking)
  .mount("#app");
