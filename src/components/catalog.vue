<template>
  <div :style="getScorllY">
    <v-select
      @select="SortByCategories"
      :selected="selected"
      :options="categories"
    />
    <router-link :to="{ name: 'cart', params: { cart_data: CART } }">
      <div class="from_calatog_to_cart">
        <img
          src="./icons/basket.svg"
          alt="icon"
          style="width:24px;height:24px"
        />{{ CART.length }}
      </div>
    </router-link>
    <div class="v-catalog__list">
      <catalogItem
        v-for="product in Filter"
        :key="product.id"
        :product_data="product"
        @addToCart="addToCart"
        @fixedBody="fixedBody = $event"
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
      fixedBody: false,
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
      top: 0,
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
    getScorllY() {
      if (this.fixedBody !== false) {
        const scrollY = document.documentElement.style.getPropertyValue(
          "--scroll-y"
        );
        const body = document.body;

        body.style.position = "fixed";
        body.style.width = "100%";

        body.style.top = `-${scrollY}`;
        console.log(body.style);
      } else {
        const body = document.body;
        const scrollY = body.style.top;
        body.style.position = "";
        body.style.top = "";
        body.style.width = "";
        console.log(body.style);

        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }

      window.addEventListener("scroll", () => {
        document.documentElement.style.setProperty(
          "--scroll-y",
          `${window.scrollY}px`
        );
      });

      return scrollY;
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

  background-color: #9b9b9b;
  width: 100%;

  margin-top: -72px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.from_calatog_to_cart {
  position: fixed;
  top: 10px;
  right: 10px;
  padding: 20px;
  z-index: 3;
}
.v-select {
  z-index: 3;
}
@media screen and (min-width: 100px) and (max-width: 767px) {
  .v-catalog__list {
    background-color: #9b9b9b;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .from_calatog_to_cart {
    position: fixed;
    top: 5px;
    right: 5px;
    padding: 10px;
    margin: 5px;
    font-size: 14px;

    width: 50px;
  }
}
</style>
