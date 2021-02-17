<template></template>

<script>
export default {
  created() {
    axios.post("/logout", {}).finally(() => {
      window.location = "/login";
    });
  }
};
</script>

<style></style>
