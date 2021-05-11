<template>
<div class="mainPage">
    <router-link :to="{name:'catalog'}">
 <h1>Shop's catalog</h1>
    </router-link>
   

</div>
    
</template>
<script>
export default {
    name:"mainPage",
    props:{},
    data(){
        return{}
    },
    computed:{}
    
}
</script>