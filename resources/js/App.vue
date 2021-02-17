<template>
  <div class="wrapper">
    <!-- /#sidebar-wrapper -->
    <nav id="sidebar">
      <div class="sidebar-header">
        <h3>Dashboard</h3>
      </div>

      <ul class="list-unstyled">
        <li :class="{ active: title === 'Create Customer' }">
          <router-link :to="{ name: 'customers.create' }">
            Add new Customer
          </router-link>
        </li>
        <li :class="{ active: title === 'List Customers' }">
          <router-link :to="{ name: 'customers.index' }">
            All Customers
          </router-link>
        </li>
        <li>
          <router-link to="/logout">Logout</router-link>
        </li>
      </ul>
    </nav>

    <!-- Page Content -->
    <div id="page-content-wrapper">
      <nav
        class="navbar navbar-light bg-light mt-4 border-bottom border-secondary"
      >
        <div class="navbar-brand">{{ title }}</div>
        <Search />
      </nav>

      <div class="container-fluid pt-4">
        <router-view :key="$route.fullPath"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "./components/Search.vue";
export default {
  components: { Search },
  props: ["user"],
  data() {
    return {
      title: "",
      active: "active"
    };
  },

  watch: {
    $route(to, from) {
      this.title = to.meta.title;
    },

    title() {
      document.title = `${this.title} | G-Customer`;
    }
  },

  methods: {
    getApiToken() {
      window.axios.interceptors.request.use(
        config => {
          if (config.method === "get") {
            config.url = `${config.url}?api_token=${this.user.api_token}`;
          } else {
            config.data = {
              ...config.data,
              api_token: this.user.api_token
            };
          }

          return config;
        },
        error => {
          console.log(error);
        }
      );
    }
  },
  created() {
    this.title = this.$route.meta.title;
    this.getApiToken();
  }
};
</script>

<style></style>
