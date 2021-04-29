<template>
  <div class="main-wrapper">{{title}}
   <catalog/>
   <cart v-if="CART.length"
   :cart_data="CART"/>
  </div>
</template>
<script>
import catalog from './catalog'
import cart from './cart'
import {mapGetters} from 'vuex'
  

  export default {
    name: 'main-wrapper',
    components: {catalog,
    cart
   
    },
    props: {},
    data() {
      return {
        title: 'ALBERT FAKE SHOP'
      }
    },
    computed: {
      ...mapGetters(['CART'])
    },
    methods: {},
    watch: {}
  }
</script>

<style>
  .main-wrapper {
    margin: 0 auto;
    max-width: 900px;
    font-size: 50px;
    font-style: inherit;
  }
</style>

