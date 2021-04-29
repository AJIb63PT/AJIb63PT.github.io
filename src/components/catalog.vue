<template>
  <div class="catalog">
      
      <catalogItem
      v-for="product in PRODUCTS"
      :key="product.id"
      :product_data="product"
      @addToCart="addToCart"
      
      />
      <catalogItem/>
     
   
  </div>
</template>
<script>
import catalogItem from './catalog-item.vue'
import {mapActions,mapGetters} from 'vuex'
  

  export default {
    name: 'catalog',
    components: {catalogItem
   
    },
    props: {},
    data() {
      return {}
    },
    computed: {...mapGetters(['PRODUCTS'])},
    methods: {...mapActions(
      ['GET_PRODUCTS_FROM_API',
      'ADD_TO_CART'
      ]),
    addToCart(data){
     this.ADD_TO_CART(data)
    }},
    watch: {},
   mounted() {
      this.GET_PRODUCTS_FROM_API()}
  }
</script>

<style>
  .catalog {
    display: inline-block;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
</style>