<template>
  <div class="customer-create">
    <h1>Create Customer</h1>
    <CustomerForm @submitted="create" :errors="errors" />
  </div>
</template>

<script>
import axios from "axios";
import CustomerForm from "../../components/CustomerForm.vue";
export default {
  components: { CustomerForm },

  data() {
    return {
      errors: null
    };
  },

  methods: {
    create(data) {
      axios
        .post("http://127.0.0.1:8000/api/customers", data)
        .then(() => {
          this.$router.push({ name: "customers.index" });
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>

<style></style>
