import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router";

Vue.use(VueRouter);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});

