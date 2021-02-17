<template>
  <div>
    <input
      v-model="searchTerm"
      class="form-control mr-sm-2"
      id="searchTerm"
      placeholder="Search..."
      @input="search"
      @focus="focus = true"
    />
    <div
      class="search position-absolute bg-dark rounded text-white p-2 mt-2"
      v-if="focus"
    >
      <div v-if="results == 0" @click="focus = false">
        No result found for {{ searchTerm }}
      </div>
      <div v-for="result in results" :key="result.id" @click="focus = false">
        <router-link :to="result.url" class="block py-2">
          <div class="text-white mt-2 mb-2">
            <p class="mt-2">{{ result.name }}</p>
            <span class="text-white small text-truncate">{{
              result.email
            }}</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import axios from "axios";
export default {
  data() {
    return {
      searchTerm: "",
      results: [],
      focus: false
    };
  },

  methods: {
    search: _.debounce(function() {
      if (this.searchTerm.length > 3) {
        axios
          .post("/api/search", {
            searchTerm: this.searchTerm
          })
          .then(response => {
            this.results = response.data.data;
          })
          .catch(error => {
            console.log(error);
          });
      }
    }, 500)
  }
};

// deounce adalah fitur lodash
// untuk memberi jeda agar tidak request terus setiap kita mengetikkan karakter
</script>

<style scoped>
.search {
  z-index: 999;
}
</style>
