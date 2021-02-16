<template>
  <div class="ml-2">
    <CustomerForm @submitted="update" :errors="errors" :data="customer" />
  </div>
</template>

<script>
import axios from "axios";
import CustomerForm from "../../components/CustomerForm.vue";
export default {
  components: { CustomerForm },

  data() {
    return {
      customer: {},
      errors: null
    };
  },

  methods: {
    update(data) {
      axios
        .patch(
          `http://127.0.0.1:8000/api/customers/${this.$route.params.id}`,
          data
        )
        .then(() => {
          this.$router.push({
            name: "customers.show",
            params: { id: this.$route.params.id }
          });
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },

    async getCustomer() {
      try {
        const { data } = await axios.get(
          `http://127.0.0.1:8000/api/customers/${this.$route.params.id}`
        );

        this.customer = data.data;
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
