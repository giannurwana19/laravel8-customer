<template>
  <div class="col-md-2">
    <div class="avatar mb-3 btn rounded border text-white bg-primary align-center">
      <center>{{ customerLogo }}</center>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    }
  },

  computed: {
    customerLogo() {
      return this.name.substring(0, 2);
    }
  }
};
</script>

<style></style>
