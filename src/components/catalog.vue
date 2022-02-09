<template>
  <div class="catalog">
    <v-select
      @select="SortByCategories"
      :selected="selected"
      :options="categories"
    />
    <router-link :to="{ name: 'cart', params: { cart_data: CART } }">
      <div class="from_calatog_to_cart">корзина:{{ CART.length }}</div>
    </router-link>

    <div class="v-catalog__list">
      <catalogItem
        v-for="product in Filter"
        :key="product.id"
        :product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>
<script>
import catalogItem from "./catalog-item.vue";
import { mapActions, mapGetters } from "vuex";
import vSelect from "./v-select.vue";

export default {
  name: "catalog",
  components: {
    catalogItem,
    vSelect,
  },
  props: {},
  data() {
    return {
      back: null,
      categories: [
        {
          name: "All",
          value: "a",
        },
        {
          name: "electronics",
          value: "e",
        },

        {
          name: "men's clothing",
          value: "m",
        },
        {
          name: "women's clothing",
          value: "w",
        },
      ],
      selected: "All",
      sortedProducts: [],
    };
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART", "SEARCH_VALUE"]),
    Filter() {
      if (this.sortedProducts.length) {
        return this.sortedProducts;
      } else {
        return this.PRODUCTS;
      }
    },
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
    SortByCategories(category) {
      let ct = this;

      this.sortedProducts = [...this.PRODUCTS];

      if (category) {
        this.sortedProducts = this.sortedProducts.filter(function(e) {
          ct.selected === category.name;
          return e.category === category.name;
        });
      }
    },
    sortBySearchValue(value) {
      this.sortedProducts = [...this.PRODUCTS];

      if (value) {
        this.sortedProducts = this.sortedProducts.filter(function(item) {
          return item.title.toLowerCase().includes(value.toLowerCase());
        });
      } else {
        this.sortedProducts = this.PRODUCTS;
      }
    },
  },
  watch: {
    SEARCH_VALUE() {
      this.sortBySearchValue(this.SEARCH_VALUE);
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API().then((response) => {
      if (response.data) {
        this.SortByCategories();
        this.sortBySearchValue(this.SEARCH_VALUE);
      }
    });
  },
};
</script>

<style>
.v-catalog__list {
  display: flex;

  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.from_calatog_to_cart {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 20px;
  border: solid 1px;
}
.v-select {
  z-index: 100;
}
@media screen and (min-width: 100px) and (max-width: 767px) {
  .v-catalog__list {
    display: flex;
    flex-direction: column;
  }
  .from_calatog_to_cart {
    position: absolute;
    top: 5px;
    right: 5px;
    padding: 10px;
    border: solid 1px;
    margin: 5px;
    font-size: 14px;

    width: 50px;
  }
}
</style>
