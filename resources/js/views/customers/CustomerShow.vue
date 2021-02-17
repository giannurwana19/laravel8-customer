<template>
  <div v-if="!loading">
    <div class="row mb-3">
      <div class="col-md-2">
        <a href="#" @click="$router.back()" class="btn btn-light">Back</a>
      </div>
      <div class="col-md-2">
        <router-link
          :to="{ name: 'customers.edit', params: { id: $route.params.id } }"
          v-if="customer.user_id == userId"
          class="btn btn-outline-success"
        >
          Edit
        </router-link>
        <button
          class="btn btn-outline-danger"
          @click="destroy"
          v-if="customer.user_id == userId"
        >
          Delete
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <CustomerLogo :name="customer.name" />
        <h4 class="d-inline ml-2">{{ customer.name }}</h4>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <p class="text-uppercase text-secondary font-weight-bold">Email</p>
        <p class="text-info">{{ customer.email }}</p>
        <p class="text-uppercase text-secondary font-weight-bold">Telephone</p>
        <p class="text-info">{{ customer.telephone }}</p>
        <p class="text-uppercase text-secondary font-weight-bold">Address</p>
        <p class="text-info">{{ customer.address }}</p>
      </div>
    </div>
  </div>

  <div v-else>
    <div class="col-md-6">
      <h2>Loading...</h2>
    </div>
  </div>
</template>

<script>
import CustomerLogo from "../../components/CustomerLogo.vue";
export default {
  components: { CustomerLogo },
  data() {
    return {
      customer: {},
      loading: true,
      userId: null
    };
  },

  created() {
    this.userId = this.$parent.user.id; // mengambil dari comp parent App
  },

  methods: {
    async getCustomer() {
      try {
        const { data } = await axios.get(
          `http://127.0.0.1:8000/api/customers/${this.$route.params.id}`
        );
        this.customer = data.data;
        this.loading = false;
      } catch (error) {
        console.log(error);
      }
    },

    destroy() {
      if (confirm("are you sure?")) {
        axios
          .delete(
            `http://127.0.0.1:8000/api/customers/${this.$route.params.id}`
          )
          .then(response => {
            this.$toast.success(response.data.message, {
              position: "top-right"
            });
            this.$router.push({ name: "customers.index" });
          })
          .catch(error => {
            alert("cannot delete customer!");
            console.log(error);
          });
      }
    }
  },

  mounted() {
    this.getCustomer();
  }
};
</script>

<style></style>
