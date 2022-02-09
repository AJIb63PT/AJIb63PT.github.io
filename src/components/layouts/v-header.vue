<template>
  <div class="header">
    <router-link :to="{ name: 'mainPage' }">
      <img class="mainA" src="../icons/mainA.svg" alt="A" />
    </router-link>

    <div v-if="routerCart" class="search-field">
      <input type="text" v-model="searchValue" style="background-color:#fff" />
      <button
        class="search-btn"
        :disabled="!canSearch"
        @click="search(searchValue)"
      >
        <img
          class="materials-icons"
          src="../icons/shopping-search.svg"
          alt="search"
        />
      </button>
      <button @click="searchClean()">
        <img
          class="materials-icons"
          src="../icons/backspace.svg"
          alt="remote"
        />
      </button>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "v-header",
  props: {},

  data() {
    return {
      searchValue: "",
    };
  },
  computed: {
    canSearch() {
      return this.searchValue.trim();
    },
    routerCart() {
      const IsVisbleSearch = this.$route.path == "/catalog";

      return IsVisbleSearch;
    },
  },
  methods: {
    ...mapActions(["GET_SEARCH_VALUE"]),
    search(value) {
      this.GET_SEARCH_VALUE(value);

      if (this.$route.path !== "/catalog") {
        this.$router.push("/catalog");
      }
    },
    searchClean() {
      this.searchValue = "";
      this.GET_SEARCH_VALUE();

      if (this.$route.path !== "/catalog") {
        this.$route.push("/catalog");
      }
    },
  },
};
</script>
<style>
.mainA {
  width: 50px;
  height: 50px;
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  background: cadetblue;
  padding: 16px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;
}
.search-field {
  padding: 16px;
}
.materials-icons {
  width: 25px;
  height: 25px;
}
</style>
