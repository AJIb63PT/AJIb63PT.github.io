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
        <p class="catalogItem__price">{{ product_data.price }} $</p>
        <p class="catalogItem__title" :title="product_data.description">
          {{ shortDescription(product_data.description) }}
        </p>
      </div>
    </Popup>
    <img class="image" :src="product_data.image" alt="image" />
    <p class="catalogItem__title">{{ product_data.title }}</p>
    <p class="catalogItem__price">{{ product_data.price }} $</p>

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
      if (description.length < 150) {
        return description;
      } else {
        return description.slice(0, 150) + "...";
      }
    },
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
  margin-bottom: 8px;
  display: block;

  border: 1px solid #777777;
  background-color: #ffffff;

  color: #202328;
  text-decoration: none;
  font-size: 15px;
  padding: 8px !important;
  margin: 8px !important;

  letter-spacing: 0.75px;

  max-height: 380px;
  min-height: 380px;
  max-width: 420px;
  min-width: 420px;

  box-shadow: 2px 2px 2px 2px;
}
.catalogItem__price {
  text-align: left;
  font-size: 18px;
  font-weight: bold;
}
.catalogItem__title {
  text-align: left;

  font-size: 16px;

  color: #999999;
  line-height: 14px;
  margin-top: 25px;
  margin-bottom: 25px;
  padding: 2px;
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
  transform: translateY(25px);
  opacity: 1;
  z-index: 1;
}
@media screen and (min-width: 100px) and (max-width: 800px) {
  .catalogItem {
    box-shadow: 2px 2px 2px 2px;

    margin-bottom: 8px;
    display: block;

    border: 1px solid #777777;
    color: #202328;
    text-decoration: none;
    background-color: #ffffff;
    font-size: 15px;
    padding: 8px;
    letter-spacing: 0.75px;

    max-height: 380px;
    min-height: 380px;
    max-width: 350px;
    min-width: 350px;
  }
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
    margin: 0px 0px 25px 0px;
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
