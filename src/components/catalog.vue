<template>
  <div class="catalog">
    <router-link :to="{name:'cart',params:{cart_data:CART}}" >
    <div class="from_calatog_to_cart"> корзина:{{CART.length}}</div>
    </router-link>
      <v-select  
      :selected="selected"
      :options="categories"
      @select="SortByCategories" 
      :isExpanded="IS_DESKTOP"/> 

      
      <catalogItem
      v-for="product in Filter"
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
import vSelect from './v-select.vue'
  

  export default {
    name: 'catalog',
    components: {
      catalogItem,
        vSelect
   
    },
    props: {},
    data() {

      return {

     categories:[{
          name:'All',Value:'a'
        },
        {
          name:'electronics',Value:'e'
        },
      
        {
          name:"men's clothing",Value:'m'
        },
        {
          name:"women's clothing",Value:'w'
        },],
        selected:'All',
        sortedProducts:[]

      }
    },
    computed: {...mapGetters([
      'PRODUCTS',
      'CART',
       'IS_MOBILE',
      'IS_DESKTOP'
      ]),
      Filter(){
        if(this.sortedProducts.length){
          return this.sortedProducts
        }else{
           return this.PRODUCTS
        }
      }},
    methods: {...mapActions(
      ['GET_PRODUCTS_FROM_API',
      'ADD_TO_CART'
      ]),
    addToCart(data){
     this.ADD_TO_CART(data)
    },
    SortByCategories(category){
      this.sortedProducts=[]
      let ct=this;
      this.PRODUCTS.map(function(item){
        if(item.category===category.name){
          ct.sortedProducts.push(item);
        }
      })

    }
    
    
    },
    watch: {},
   mounted() {
      this.GET_PRODUCTS_FROM_API()}
  }
</script>

<style>
  .catalog {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  .from_calatog_to_cart{
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 20px;
    border:solid 1px ;
  }
  .v-select{
    z-index: 100;
  }
</style>