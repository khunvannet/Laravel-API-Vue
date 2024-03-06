<template lang="html">
    
        <Header/>
        <slot><router-view></router-view></slot>
        <Footer/>
  
</template>
<script>
import Header from'../headers/Header.vue';

import Footer from '../footer/Footer.vue';
export default {
    
    components:{
        Header,Footer
    }
};
</script>
<style></style>