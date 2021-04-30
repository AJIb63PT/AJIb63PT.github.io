<template>
  <div class="main-wrapper">{{title}}
    <keep-alive>
    <router-view> </router-view>
    </keep-alive>
  
  </div>
</template>
<script>

  

  export default {
    name: 'main-wrapper',
    components: {
     
    },
    props: {},
    data() {
      return {
        title: 'ALBERT FAKE SHOP'
      }
    },
    computed: { },
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

