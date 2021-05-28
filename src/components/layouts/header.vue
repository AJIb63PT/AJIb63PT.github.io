<template>
  <div class="header">
    <router-link :to="{ name: 'mainPage' }">
      <img
        src="https://e7.pngegg.com/pngimages/783/960/png-clipart-brown-a-letter-illustration-paper-letter-case-alphabet-burning-letter-a-miscellaneous-angle.png"
        alt=""
      />
    </router-link>

    <div class="search-field">
      <input type="text" v-model="searchValue" />
      <button class="search-btn" :disabled="!canSearch">
        <i class="materials-icons" @click="search(searchValue)">search</i>
      </button>
      <button @click="searchClean()">clean search</button>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "header",
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
.header img {
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
}
.search-field {
  padding: 16px;
}
</style>
