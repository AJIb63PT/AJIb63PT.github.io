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
          {{ shortDescription(product_data.description, 130) }}
        </p>
      </div>
    </Popup>
    <img class="image" :src="product_data.image" alt="image" />
    <p class="catalogItem__title">
      {{ shortDescription(product_data.title, 40) }}
    </p>
    <p class="catalogItem__price">{{ product_data.price }} $</p>

    <div class="catalog_item__bottons">
      <div class="flip">
        <div :class="backflip ? 'flip__body' : 'flip__bodyflip'">
          <div @click="addToCart" v-if="backflip" class="flip__front">
            Добавить в корзину
          </div>
          <div v-if="!backflip" class="flip__back">
            Добавлено
          </div>
        </div>
      </div>
      <div
        :class="
          !isInfoPopupVisible
            ? 'content__transform-origin'
            : 'content__transform-origin_click'
        "
        @click="showpopupinfo"
      >
        Подробнее
      </div>
    </div>
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
    return { isInfoPopupVisible: false, backflip: true };
  },
  computed: {},
  methods: {
    shortDescription(description, num) {
      if (description.length < num) {
        return description;
      } else {
        return description.slice(0, num) + "...";
      }
    },
    addToCart() {
      if (this.backflip) {
        this.backflip = !this.backflip;
      }
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

  .catalogItem__price {
    margin: 0px 0px 25px 0px;
  }
}

.catalog_item__bottons {
  padding: 2px;
  margin: 25px 0px 0px 0px;

  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
}
.flip {
}
.flip__body {
  position: relative;
  width: 100px;
  height: 40px;
  transition: all 0.8s ease 0s;
  transform-style: preserve-3d;
}
.flip__front,
.flip__back {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.flip__front {
  cursor: pointer;

  z-index: 2;
  transform: rotateY(0deg);
  background-color: hsla(236, 46%, 58%, 0.651);

  backface-visibility: hidden;
}
.flip__back {
  transform: rotateY(-180deg);
  background-color: hsla(236, 46%, 58%, 0.767);
}

.flip__bodyflip {
  position: relative;
  width: 100px;
  height: 40px;
  transition: all 0.8s ease 0s;
  transform-style: preserve-3d;
  transform: rotateY(-180deg);
}

.content__transform-origin {
  cursor: pointer;

  position: relative;

  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: auto;
  background-color: hsla(100, 40%, 60%, 0.692);
  width: 100px;
  height: 40px;
  transform-origin: 0 0;
  transform: rotate(0deg);
}
.content__transform-origin_click {
  cursor: pointer;

  position: relative;

  background-color: hsla(100, 40%, 60%, 0.692);
  width: 100px;
  height: 40px;
  transform-origin: 0 0;
  transform: rotate(-15deg);
}
</style>
