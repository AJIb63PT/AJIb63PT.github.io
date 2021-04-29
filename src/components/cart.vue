<template>
    <div class="cart"><h1>cart</h1>
        <CartItem
        v-for="(item,index) in cart_data"
        :key="item.id"
        :cart_item_data="item"
        @DeleteFromCart="DeleteFromCart(index)"

        
        
        
        />

        
    </div>
</template>
<script>
import  CartItem from './cart-item.vue'
import {mapActions} from 'vuex'

export default ({
    components:{
        CartItem
    },
    props:{
        cart_data:{
            type:Array,
            default(){

                return[]

            }
        }
    },
    methods:{
        DeleteFromCart(index){
            // console.log(index)
            this.DELETE_FROM_CART(index)

        },
        ...mapActions(['DELETE_FROM_CART'])
    }
   
})
</script>









