import Vue from "vue";
import VueRouter from "vue-router";
import ExampleComponent from "../components/ExampleComponent.vue";
import CustomerIndex from "../views/customers/CustomerIndex.vue";
import CustomerCreate from "../views/customers/CustomerCreate.vue";

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
  },
  {
    path: "/customers/create",
    name: "customers.create",
    component: CustomerCreate
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
