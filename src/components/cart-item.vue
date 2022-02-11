<template>
  <div class="CartItem">
    <div class="cart_item_info">
      <img class="cart_image" :src="cart_item_data.image" alt="" />
      <p class="catalogItem__title">{{ cart_item_data.title }}</p>
      <p class="catalogItem__price">Price$ {{ cart_item_data.price }}</p>
    </div>
    <div>
      <div class="cart_item_quantity">
        <div class="quantity__tools">
          <div
            v-if="cart_item_data.quantity !== 1"
            class="quantity__btn"
            v-on:click="decrementItem"
          >
            -
          </div>
          <div
            v-if="cart_item_data.quantity == 1"
            class="quantity__btn"
            v-on:click="DeleteFromCart"
          >
            Удалить из корзины
          </div>
          {{ cart_item_data.quantity }}
          <div class="quantity__btn" v-on:click="incrementItem">+</div>
        </div>
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
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: 8px;
  margin-bottom: 12px;
  min-width: 100%;
}
.cart_image {
  max-width: 150px;
  max-height: 150px;
}
.quantity__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 160px;
  min-width: 160px;
  max-height: 60px;
  min-height: 60px;
  cursor: pointer;
  color: #000;
  background-color: rgba(114, 199, 102, 0.733);
  border: 1px solid #333;
  padding: 10px;
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
@media screen and (min-width: 100px) and (max-width: 767px) {
  .CartItem {
    display: flex;
    flex-direction: initial;
    font-size: 14px;
  }
  .cart_item_info {
    max-width: 50%;
  }
}
</style>
