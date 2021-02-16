<template>
  <div>
    <ul class="list-group" id="list-customer">
      <div v-for="customer in customers" :key="customer.id">
        <li class="list-group-item border">
          <div class="row">
            <router-link
              :to="{
                name: 'customers.show',
                params: { id: customer.customer_id }
              }"
              class="d-flex p-2text-decoration-none"
            >
              <CustomerLogo :name="customer.name" />
            </router-link>
            <div class="col-md-10">
              <label>{{ customer.name }}</label
              ><br />
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
import CustomerLogo from "../../components/CustomerLogo.vue";
export default {
  components: { CustomerLogo },
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
