<template>
  <div class="cart">
    <router-link :to="{ name: 'catalog' }">
      <div class="from_calatog_to_cart">
        <img src="./icons/arrow-left.svg" alt="" />
      </div>
    </router-link>

    <p v-if="!cart_data.length" class="emptyCart">Купи что-нибудь</p>
    <CartItem
      v-for="(item, index) in cart_data"
      :key="item.id"
      :cart_item_data="item"
      @DeleteFromCart="DeleteFromCart(index)"
      @increment="increment(index)"
      @decrement="decrement(index)"
    />
    <footer class="cart_total">
      <span class="total_name">Итого:</span>
      <span>{{ cartTotal.toFixed(2) }}$</span>
    </footer>
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
  margin-top: -110px;
}
.emptyCart {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px;
}
.cart_total {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 8px 20px;
  display: flex;
  justify-content: center;
  background: rgb(114, 199, 102);
  color: black;
  font-size: 20px;
  opacity: 0.7;
}

@media screen and (min-width: 100px) and (max-width: 767px) {
  .cart {
    flex-direction: column;
  }
}
</style>
