<template>
  <div class="catalogItem">
    <Popup
      v-if="isInfoPopupVisible"
      @closepopup="closepopup"
      :Popuptitle="product_data.title"
      leftbttitle="Купить"
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
    <v-btn
      :class="!isInfoPopupVisible ? 'sub' : ''"
      small
      @click="showpopupinfo"
    >
      Подробнее</v-btn
    >
    <v-btn :class="!isInfoPopupVisible ? 'sub' : ''" small @click="addToCart"
      >Купить</v-btn
    >
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
      this.$emit("fixedBody", this.isInfoPopupVisible);
    },
    closepopup() {
      this.isInfoPopupVisible = false;
      this.$emit("fixedBody", this.isInfoPopupVisible);
    },
  },
  watch: {},
  mounted() {
    this.$set(this.product_data, "quantity", 1);
  },
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

  max-height: 300px;
  min-height: 300px;
  max-width: 570px;
  min-width: 570px;
}
.image {
  max-width: 150px;
  min-width: 150px;
  max-height: 180px;
  min-height: 180px;
}
.v-btn {
  visibility: hidden;
  z-index: 1;
}
.catalogItem:hover > .sub {
  visibility: visible;
  transform: translateY(50px);
  opacity: 1;
  z-index: 1;
}
@media screen and (min-width: 100px) and (max-width: 800px) {
  .v-btn {
    visibility: visible;
    z-index: 1;
  }
  .sub {
    visibility: visible;
    opacity: 1;
    z-index: 1;
  }
}
@media (hover: none) {
  .catalogItem:hover > .sub {
    visibility: visible;
    transform: translateY(0px);
    opacity: 1;
    z-index: 1;
  }
}
</style>
