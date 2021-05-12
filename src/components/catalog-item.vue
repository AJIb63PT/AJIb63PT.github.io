<template>
  <div class="catalogItem">
    <Popup
      v-if="isInfoPopupVisible"
      @closepopup="closepopup"
      :Popuptitle="product_data.title"
      leftbttitle="купить"
      @leftbtnAction="addToCart"
    >
      <div>
        <img class="image" :src="product_data.image" alt="image" />

        <p>{{ product_data.price }} $</p>
        <p>{{ product_data.category }}</p>
        <p>{{ product_data.description }}</p>
      </div>
    </Popup>

    <img class="image" :src="product_data.image" alt="image" />
    <p class="catalogItem__price">Price$ {{ product_data.price }}</p>
    <button @click="showpopupinfo">more about</button>
    <button v-on:click="addToCart">купить</button>
  </div>
</template>
<script>
import Popup from "./popup/popup.vue";

export default {
  name: "catalogItem",
  components: {
    Popup,
  },
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return { isInfoPopupVisible: false };
  },
  computed: {},
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product_data);
    },
    showpopupinfo() {
      this.isInfoPopupVisible = true;
    },
    closepopup() {
      this.isInfoPopupVisible = false;
    },
  },
  watch: {},
  mounted() {},
};
</script>

<style>
.catalogItem {
  flex-basis: 25%;
  box-shadow: 0 08px 0;

  margin-bottom: 8px;
  display: block;

  border: 2px solid #202328;
  color: #202328;
  text-decoration: none;
  background-color: transparent;
  font-size: 15px;
  padding: 8px;
  letter-spacing: 0.75px;

  max-height: 30%;
}
.image {
  max-width: 150px;
  max-height: 150px;
}
</style>
