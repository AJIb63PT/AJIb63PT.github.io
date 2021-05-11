import Vue from 'vue'
import Router from 'vue-router'
import catalog from '../components/catalog'
import cart from '../components/cart'
import mainPage from '../components/mainPage/mainPage'

Vue.use(Router)
 const router = new Router({
     routes:[
         {
             path:'/catalog',
             name:'catalog',
             component:catalog
         },
         {
             path:'/cart',
             name:'cart',
             component:cart,
             props:true
         },{
         path:'/',
         name:'mainPage',
         component:mainPage,

         }

     ]
 })
 export default router;
