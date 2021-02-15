import Vue from "vue";
import VueRouter from "vue-router";
import ExampleComponent from "../components/ExampleComponent.vue";
import CustomerIndex from "../views/customers/CustomerIndex.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: ExampleComponent
  },
  {
    path: "/customers",
    name: "customers.index",
    component: CustomerIndex
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
