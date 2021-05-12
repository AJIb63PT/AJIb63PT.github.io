import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    searchValue: "",

    products: [],
    cart: [],
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_CART: (state, product) => {
      if (state.cart.length > 0) {
        let productsExist = false;
        state.cart.map(function(item) {
          if (item.id === product.id) {
            productsExist = true;
            item.quantity++;
          }
        });
        if (!productsExist) {
          state.cart.push(product);
        }
      } else {
        state.cart.push(product);
      }
    },
    DELETE: (state, index) => {
      state.cart.splice(index, 1);
    },
    INCREMENT: (state, index) => {
      state.cart[index].quantity++;
    },
    DECREMENT: (state, index) => {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--;
      }
    },
    SET_SEARCH: (state, value) => {
      state.searchValue = value;
    },
  },
  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return axios("https://fakestoreapi.com/products", {
        method: "GET",
      })
        .then((products) => {
          commit("SET_PRODUCTS_TO_STATE", products.data);
          return products;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    ADD_TO_CART({ commit }, product) {
      commit("SET_CART", product);
    },
    DELETE_FROM_CART({ commit }, index) {
      commit("DELETE", index);
    },
    INCREMENT_CART_ITEM({ commit }, index) {
      commit("INCREMENT", index);
    },
    DECREMENT_CART_ITEM({ commit }, index) {
      commit("DECREMENT", index);
    },
    GET_SEARCH_VALUE({ commit }, value) {
      commit("SET_SEARCH", value);
    },
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    },
    SEARCH_VALUE(state) {
      return state.searchValue;
    },
  },
});

export default store;
