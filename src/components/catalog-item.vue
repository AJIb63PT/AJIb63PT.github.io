<template>
  <div class="catalogItem" v-on:click="addToCart">
    
    <img class="image" :src="product_data.image" alt="image"> 
      <p class="catalogItem__title"> {{product_data.title}}</p>
      <p class="catalogItem__price"> Price$ {{product_data.price}} </p>
        <!-- <p class="catalogItem__description"> Description: {{product_data.description}}</p>
    <p class="catalogItem__category"> Category: {{product_data.category}}</p> -->
    
    <!-- <div class="Buy"> <button class="catalogItem__btn btn"  > add</button>
     </div> -->
   
  </div>
</template>
<script>

  

  export default {
    name: 'catalogItem',
    components: {
   
    },
    props: {
        product_data:{
            type: Object,
            default(){
                return {}
            }
        }
    },
    data() {
      return {}
    },
    computed: {},
    methods: {

   addToCart(){
        this.$emit('addToCart',this.product_data)
        
    }
    
    },
    watch: {
   
    },
    mounted(){
       this.$set(this.product_data, 'quantity',1)
    }
  }
</script>

<style>
.catalogItem{
      flex-basis: 25%;
      box-shadow: 0 08px 0;
  
      margin-bottom: 8px;
        position: relative;
      border: 2px solid #202328;
      color: #202328;
      text-decoration: none;
      background-color: transparent;
      font-size: 15px;
      padding: 8px ;
      letter-spacing: 0.75px;
       max-width: 250px;
  max-height: 350px;
}
.image{
  max-width: 150px;
  max-height: 150px;
}

.catalogItem:hover {
  background-color: #d3f1e7;
  opacity: 0.59;
  cursor: pointer;
  text-decoration: none;
}
/* .catalogItem:hover .button{
  width: 100px;
  height: 50px;
  opacity: 0;
} */
/* .catalogItem:hover button{
  width: 100px;
  height: 50px;
  opacity: 1;
} */
/* .btn{
  opacity: 0;
}
.btn:hover{
  opacity: 1;
} */
/* .button{
  position:absolute;
  top:50%;
  left:0;
  right:0; 
  margin-top: - ( половины высоты кнопки); margin: auto;
} */
</style>