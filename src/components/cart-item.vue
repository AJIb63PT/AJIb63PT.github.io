<template>
  <div class="CartItem">
    <div class="cart_item_info">
      <img class="cart_image" :src="cart_item_data.image" alt="" />
      <div class="cart_item_info_text">
        <p class="cart_item__title">{{ cart_item_data.title }}</p>
        <p class="cart_item__description">{{ cart_item_data.description }}</p>

        <p class="cart_item__price">{{ cart_item_data.price }} $</p>
      </div>
    </div>
    <div class="cart_item_quantity">
      <span class="cart_item__price">
        {{ cart_item_data.quantity }}
      </span>
      <div class="quantity__tools">
        <div class="quantity__tools_math">
          <span
            v-if="cart_item_data.quantity !== 1"
            class="quantity__btn_min"
            v-on:click="decrementItem"
          >
            -
          </span>
          <span
            v-if="cart_item_data.quantity == 1"
            class="quantity__btn_del"
            v-on:click="DeleteFromCart"
          >
            Удалить из корзины
          </span>

          <span class="quantity__btn_plus" v-on:click="incrementItem">+</span>
        </div>

        <span
          v-show="cart_item_data.quantity !== 1"
          class="quantity__btn"
          v-on:click="DeleteFromCart"
        >
          <img src="./icons/trash.svg" alt="Удалить из корзины" />
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CartItem",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {
    this.$set(this.cart_item_data, "quantity", 1);
  },
  methods: {
    DeleteFromCart() {
      this.$emit("DeleteFromCart");
    },
    incrementItem() {
      this.$emit("increment");
    },
    decrementItem() {
      this.$emit("decrement");
    },
  },
};
</script>
<style>
.CartItem {
  display: flex;
  width: 99%;
  border: 1px solid #777777;

  background-color: #fff;

  justify-content: space-between;
  align-items: center;
  padding: 8px;
  margin: 8px !important;
  box-shadow: 2px 2px 2px 2px;
}
.cart_image {
  max-width: 120px;
  min-width: 120px;

  max-height: 250px;
  min-height: 250px;
}
.cart_item_info {
  display: flex;
  flex-direction: row;
}
.cart_item_info_text {
  margin: 5px;
}
.quantity__tools_math {
  display: flex;
}
.quantity__btn_del,
.quantity__btn_min,
.quantity__btn_plus,
.quantity__btn {
  margin: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 64px;
  min-width: 64px;
  max-height: 60px;
  min-height: 60px;
  cursor: pointer;
  color: #000;
  background-color: rgba(114, 199, 102, 0.733);
  border: 1px solid #333;
}

.quantity__btn {
  max-width: 130px;
  min-width: 130px;
}
.cart_item__price {
  text-align: left;
  font-size: 18px;
  font-weight: bold;
}
.cart_item__title {
  text-align: left;

  font-size: 16px;

  color: #999999;
  line-height: 14px;
  margin-top: 25px;
  margin-bottom: 25px;
  padding: 2px;
}
.cart_item__description {
  text-align: left;

  font-size: 16px;

  color: #999999;
  line-height: 14px;
  margin-top: 25px;
  margin-bottom: 25px;
  padding: 2px;
}
@media screen and (min-width: 100px) and (max-width: 767px) {
  .CartItem {
    display: flex;
    flex-direction: initial;
    font-size: 14px;
    max-width: 95%;
  }
  .cart_item_info {
    max-width: 60%;
  }
  .cart_item__description {
    display: none;
  }
}
</style>
