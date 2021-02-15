<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-group row">
      <label for="name" class="col-md-1 col-form-label">Name</label>
      <div class="col-md-6">
        <input
          type="text"
          id="name"
          v-model="name"
          class="form-control"
          placeholder="Input name here"
        />
      </div>
    </div>
    <div class="form-group row">
      <label for="email" class="col-md-1 col-form-label">Email</label>
      <div class="col-md-6">
        <input
          type="email"
          id="email"
          v-model="email"
          class="form-control"
          placeholder="Input email here"
        />
      </div>
    </div>
    <div class="form-group row">
      <label for="telephone" class="col-md-1 col-form-label">Telephone</label>
      <div class="col-md-6">
        <input
          type="text"
          id="telephone"
          v-model="telephone"
          class="form-control"
          placeholder="Input telephone here"
        />
      </div>
    </div>
    <div class="form-group row">
      <label for="address" class="col-md-1 col-form-label">Address</label>
      <div class="col-md-6">
        <textarea
          v-model="address"
          id=""
          cols="30"
          rows="4"
          class="form-control"
          placeholder="Input address here"
        ></textarea>
      </div>
    </div>

    <div class="form-group row">
      <div class="col-md-7">
        <button type="submit" class="btn btn-primary">Save</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      telephone: "",
      address: ""
    };
  },

  methods: {
    handleSubmit() {
      this.$emit("submitted", {
        name: this.name,
        email: this.email,
        telephone: this.telephone,
        address: this.address
      });

      this.cleanForm();
    },

    cleanForm() {
      this.name = "";
      this.email = "";
      this.telephone = "";
      this.address = "";
    }
  }
};
</script>

<style></style>
