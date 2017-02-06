<template>
  <div class="app">
    <topnav></topnav>
    <div style="height:1rem;"></div>
    <banner bgsrc="http://static.bftv.com/bftv_wxl/nianhuo-mobile/banner1.jpg" height="8.44"></banner>
    <part></part>
    <div class="product-components">
      <product ids="40"></product>
      <product ids="47"></product>
      <product ids="96"></product>
      <product ids="95"></product>
      <product ids="27"></product>
    </div>
    <div class="rule"><img src="http://static.bftv.com/bftv_wxl/nianhuo-mobile/rules2.png" alt="活动规则"></div>
  </div>
</template>

<script>
import Topnav from './components/topnav'
import Banner from './components/banner'
import Part from './components/part'
import Product from './components/product'

export default {
  name: 'appexchange',
  components: {
    Topnav,Banner,Part,Product
  }
}
</script>

<style>
*{margin: 0;padding: 0;text-decoration: none;list-style-type: none;}
*:focus{outline: none;}
body{font-size: 12px;}
</style>
<style scoped>
  .product-components{background-color: #d8393a;padding: 0.24rem 0;}
  .rule img{width: 100%;}
</style>
