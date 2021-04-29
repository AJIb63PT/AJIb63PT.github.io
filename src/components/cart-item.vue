<template>
    <div class="CartItem">
<div class="cart_item_info">
    <img class="cart_image" :src="cart_item_data.image" alt="">
    <p>{{cart_item_data.title}}</p>
    <p>{{cart_item_data.price}}</p>
</div>
<div>
    <div class="cart_item_quantity">

           {{cart_item_data.quantity}} 
           </div>
    <button v-on:click="DeleteFromCart">    Delete</button>
</div>

    </div>
</template>
<script>

export default {
    name:"CartItem",
    props:{
        cart_item_data:{
            type: Object,
            default(){
                return {}
            }
        }
    },
    data(){
        return{}
    },
    computed:{},
    mounted(){
        this.$set(this.cart_item_data, 'quantity',1)
    },
    methods:{
        DeleteFromCart(){
            this.$emit('DeleteFromCart')
        }
    }
}
</script>
<style >

.CartItem{
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
}
.cart_image{
  max-width: 250px;
  max-height: 250px;
}

</style>