<template>
  <div v-if="!loading">
    <div class="row mb-3">
      <div class="col-md-2">
        <router-link :to="{ name: 'customers.index' }" class="btn btn-light"
          >Back</router-link
        >
      </div>
      <div class="col-md-2">
        <router-link to="" class="btn btn-outline-success">Edit</router-link>
        <router-link to="" class="btn btn-outline-danger">Delete</router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div
          class="avatar btn rounded border text-white bg-primary align-center"
        >
          <center>Ta</center>
        </div>
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
export default {
  data() {
    return {
      customer: {},
      loading: true
    };
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
    }
  },

  mounted() {
    this.getCustomer();
  }
};
</script>

<style></style>
