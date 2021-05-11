<template>
  <div class="catalog">
<v-select  
      :selected="selected"
      :options="categories"
      @select="SortByCategories" 
      :isExpanded="IS_DESKTOP"/> 

    <router-link :to="{name:'cart',params:{cart_data:CART}}" >
    <div class="from_calatog_to_cart"> корзина:{{CART.length}}</div>
    </router-link>
     
      <div class="v-catalog__list"> 
      <catalogItem
      v-for="product in Filter"
      :key="product.id"
      :product_data="product"
      @addToCart="addToCart"
      
      />
      <catalogItem/>
      </div>
    
     
   
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
      'IS_DESKTOP',
      'SEARCH_VALUE'

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
        this.sortedProducts = [...this.PRODUCTS]

      let ct=this;
      this.PRODUCTS.map(function(item){
        if(item.category===category.name){
          ct.sortedProducts.push(item);
        }
      })

    },
    sortBySearchValue(value){
        this.sortedProducts = [...this.PRODUCTS]

      if(value){
      this.sortedProducts=this.sortedProducts.filter(function(item){
        return item.title.toLowerCase().includes(value.toLowerCase())
      })}
      else{
        this.sortedProducts=this.PRODUCTS
      }
      
    }
    
    
    },
    watch: {
      SEARCH_VALUE(){
      this.sortBySearchValue(this.SEARCH_VALUE)
    }},
   mounted() {
      this.GET_PRODUCTS_FROM_API()
      .then((response) => {
          if (response.data) {
            this.sortByCategories()
      this.sortBySearchValue(this.SEARCH_VALUE)
      }
      })
   }
      
  }
</script>

<style>
  
  .v-catalog__list{
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