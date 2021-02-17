import Vue from "vue";
import App from "./App.vue";
import Home from "../src/views/Home.vue";
import VueRouter from "vue-router";
import VueMaterial from "vue-material";
import EcommerceChecklist from "./views/EcommerceChecklist.vue";
import ServicesChecklist from "./views/ServicesChecklist.vue";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/black-green-dark.css";

Vue.use(VueMaterial);
Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: "/", component: Home },
  { path: "/ecommerce-checklist", component: EcommerceChecklist },
  { path: "/services-checklist", component: ServicesChecklist },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
