<template>
    <div class="CartItem">
<div class="cart_item_info">
    <img class="cart_image" :src="cart_item_data.image" alt="">
    <p>Title: {{cart_item_data.title}}</p>
    <p>Price$ {{cart_item_data.price}}</p>
</div>
<div>
    <div class="cart_item_quantity">
        <p>кол-во</p>
        <button class="quantity__tools">
        <button class="quantity__btn" v-on:click="decrementItem">-</button>
        {{cart_item_data.quantity}} 
        <button class="quantity__btn" v-on:click="incrementItem">+</button>
      </button>


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
        // this.$set(this.cart_item_data, 'quantity',1)
    },
    methods:{
       
        
        DeleteFromCart(){
            this.$emit('DeleteFromCart')
        },
      incrementItem() {
        this.$emit('increment')
      },
      decrementItem() {
        this.$emit('decrement')}
    }
}
</script>
<style >

.CartItem{
       display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding:8px;
    margin-bottom:12px;
}
.cart_image{
  max-width: 150px;
  max-height: 150px;
}

</style>