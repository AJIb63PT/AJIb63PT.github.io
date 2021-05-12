<template>
  <div class="main-wrapper">
    <Header />
    <keep-alive>
      <router-view> </router-view>
    </keep-alive>
  </div>
</template>
<script>
import Header from "./layouts/header.vue";

export default {
  name: "main-wrapper",
  components: {
    Header,
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  watch: {},
};
</script>

<style>
.main-wrapper {
  margin: 0 auto;
}
</style>
