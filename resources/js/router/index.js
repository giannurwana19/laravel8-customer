import Vue from "vue";
import VueRouter from "vue-router";
import ExampleComponent from "../components/ExampleComponent.vue";
import CustomerIndex from "../views/customers/CustomerIndex.vue";
import CustomerCreate from "../views/customers/CustomerCreate.vue";
import CustomerShow from "../views/customers/CustomerShow.vue";
import CustomerEdit from "../views/customers/CustomerEdit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: ExampleComponent,
    meta: { title: "welcome" }
  },
  {
    path: "/customers",
    name: "customers.index",
    meta: { title: "List customers" },
    component: CustomerIndex
  },
  {
    path: "/customers/create",
    name: "customers.create",
    meta: { title: "Create Customer" },
    component: CustomerCreate
  },
  {
    path: "/customers/:id",
    name: "customers.show",
    meta: { title: "Detail Customer" },
    component: CustomerShow
  },
  {
    path: "/customers/:id/edit",
    name: "customers.edit",
    meta: { title: "Edit Customer" },
    component: CustomerEdit
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
