<template>
  <div class="catalogItem">
    <Popup
      v-if="isInfoPopupVisible"
      @closepopup="closepopup"
      :Popuptitle="product_data.title"
      @leftbtnAction="addToCart"
    >
      <div>
        <img class="image" :src="product_data.image" alt="image" />
        <p>{{ product_data.price }} $</p>
        <p :title="product_data.description">
          {{ shortDescription(product_data.description) }}
        </p>
      </div>
    </Popup>
    <img class="image" :src="product_data.image" alt="image" />
    <p class="catalogItem__title">{{ product_data.title }}</p>
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
    shortDescription(description) {
      if (description.length < 180) {
        return description;
      } else {
        return description.slice(0, 180) + "...";
      }
    },
    addToCart() {
      this.$emit("addToCart", this.product_data);
    },
    showpopupinfo() {
      let str =
        "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem";
      console.log(str.length);
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

  max-height: 330px;
  min-height: 330px;
  max-width: 420px;
  min-width: 420px;
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
  margin: 0 0 10px 5px;
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
  .catalogItem__price {
    margin: 0px 0px 50px 0px;
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
