<template>
  <div>
    <ul class="list-group">
      <div v-for="customer in customers" :key="customer.id">
        <li class="list-group-item border">
          <div class="row">
            <router-link
              to="customers"
              class="d-flex p-2text-decoration-none"
            >
              <div class="col-md-2">
                <div
                  class="avatar btn rounded border text-white bg-primary align-center"
                >
                  <center>Ta</center>
                </div>
              </div>
            </router-link>
            <div class="col-md-10">
              <label>{{ customer.name }}</label><br>
              <span class="text-muted small text-truncate">
                {{ customer.email }}
              </span>
            </div>
          </div>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      customers: []
    };
  },

  methods: {
    async getCustomers() {
      try {
        const { data } = await axios.get("http://127.0.0.1:8000/api/customers");
        this.customers = data.data;
      } catch (error) {
        console.log(error);
      }
    }
  },

  mounted() {
    this.getCustomers();
  }
};
</script>

<style>
.avatar {
  height: 40px;
  widows: 40px;
}
</style>
