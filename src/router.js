import VueRouter from "vue-router";
import Home from "./components/Home.vue";

export const routes = [
  {
    path: "/",
    component: Home,
  },
];

export default new VueRouter({ mode: "history", routes });
