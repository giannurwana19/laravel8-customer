<template>
  <div class="customer-create">
    <h1>customer freate</h1>
    <CustomerForm @submitted="create" />
  </div>
</template>

<script>
import axios from "axios";
import CustomerForm from "../../components/CustomerForm.vue";
export default {
  components: { CustomerForm },
  methods: {
    create(data) {
      axios
        .post("http://127.0.0.1:8000/api/customers", data)
        .then(() => {
          alert("Data berhasil ditambahkan");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style></style>
