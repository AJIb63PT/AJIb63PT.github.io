<template>
  <div class="cart">
    <router-link :to="{ name: 'catalog' }">
      <div class="from_calatog_to_cart">
        <img src="./icons/arrow-left.svg" alt="" />
      </div>
    </router-link>

    <!-- <h1>Корзина</h1> -->
    <p v-if="!cart_data.length">Купи что-нибудь</p>
    <CartItem
      v-for="(item, index) in cart_data"
      :key="item.id"
      :cart_item_data="item"
      @DeleteFromCart="DeleteFromCart(index)"
      @increment="increment(index)"
      @decrement="decrement(index)"
    />

    <div class="cart_total">
      <p class="total_name">total:$</p>
      <p>{{ cartTotal.toFixed(2) }}</p>
    </div>
  </div>
</template>
<script>
import CartItem from "./cart-item.vue";
import { mapActions } from "vuex";

export default {
  name: "cart",
  components: {
    CartItem,
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    DeleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
    ...mapActions([
      "DELETE_FROM_CART",
      "INCREMENT_CART_ITEM",
      "DECREMENT_CART_ITEM",
    ]),
    increment(index) {
      this.INCREMENT_CART_ITEM(index);
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index);
    },
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
  },
  computed: {
    cartTotal() {
      return this.cart_data.reduce(
        (res, item) => res + item.price * item.quantity,
        0
      );
    },
  },
};
</script>
<style>
.cart {
  display: flex;
  flex-wrap: wrap;
}
.cart_total {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 8px 20px;
  display: flex;
  justify-content: center;
  background: rgba(114, 199, 102, 0.933);
  color: black;
  font-size: 20px;
  opacity: 0.7;
}
.total_name {
  margin-right: 20px;
}
@media screen and (min-width: 100px) and (max-width: 767px) {
  .cart {
    display: flex;
    flex-direction: column;
  }
}
</style>
