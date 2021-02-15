<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-group row">
      <label for="name" class="col-md-1 col-form-label">Name</label>
      <div class="col-md-6">
        <input
          type="text"
          id="name"
          v-model="name"
          :class="errorClass('name')"
          placeholder="Input name here"
          @input="clearError('name')"
        />
        <div class="invalid-feedback">
          <p v-text="errorValue('name')"></p>
        </div>
      </div>
    </div>
    <div class="form-group row">
      <label for="email" class="col-md-1 col-form-label">Email</label>
      <div class="col-md-6">
        <input
          type="email"
          id="email"
          v-model="email"
          :class="errorClass('email')"
          placeholder="Input email here"
          @input="clearError('email')"
        />
        <div class="invalid-feedback">
          <p v-text="errorValue('email')"></p>
        </div>
      </div>
    </div>
    <div class="form-group row">
      <label for="telephone" class="col-md-1 col-form-label">Telephone</label>
      <div class="col-md-6">
        <input
          type="text"
          id="telephone"
          v-model="telephone"
          :class="errorClass('telephone')"
          placeholder="Input telephone here"
          @input="clearError('telephone')"
        />
        <div class="invalid-feedback">
          <p v-text="errorValue('telephone')"></p>
        </div>
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
          :class="errorClass('address')"
          placeholder="Input address here"
          @input="clearError('address')"
        ></textarea>
        <div class="invalid-feedback">
          <p v-text="errorValue('name')"></p>
        </div>
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
  props: ["errors"],

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

    errorValue(column) {
      if (this.errors && this.errors[column]) {
        return this.errors[column][0];
      }
    },

    errorClass(column) {
      if (this.errors && this.errors[column]) {
        return ["form-control", "is-invalid"];
      }

      return "form-control";
    },

    cleanForm() {
      this.name = "";
      this.email = "";
      this.telephone = "";
      this.address = "";
    },

    clearError(column) {
      if (this.errors && this.errors[column]) {
        this.errors[column] = null;
      }
    }
  }
};
</script>

<style></style>
