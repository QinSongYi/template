<template>
  <div>
    <topnav></topnav>
    <banner height="845" bgsrc="http://static.bftv.com/bftv_wxl/nianhuo/banner1.jpg"></banner>
    <part></part>
    <div class="product-component">
      <div>
        <product ids="40,47,96,95,27"></product>
        <div class="rule"><img src="http://static.bftv.com/bftv_wxl/nianhuo/rules1.png" alt="活动规则"></div>
      </div>
    </div>
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
body{font-family: "Microsoft Yahei", 微软雅黑, "PingFang SC", "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", STHeiti, 华文细黑, sans-serif}
</style>
<style scoped>
.product-component{width: 100%;background-color: #D8393A;padding-top: 140px;padding-bottom: 60px;}
.product-component > div{margin: 0 auto;width: 1132px;}
.rule img{width: 100%;}
</style>
