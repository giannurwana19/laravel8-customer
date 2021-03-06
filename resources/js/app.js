/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

Vue.use(VueToast);

require("./bootstrap");

const app = new Vue({
  el: "#app",
  components: {
    App
  },
  router
});
