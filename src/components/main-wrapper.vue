<template>
  <div class="main-wrapper">
    <HeaderLayouts />
    <keep-alive>
      <router-view> </router-view>
    </keep-alive>
  </div>
</template>
<script>
import HeaderLayouts from "./layouts/v-header.vue";

export default {
  name: "main-wrapper",
  components: {
    HeaderLayouts,
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
