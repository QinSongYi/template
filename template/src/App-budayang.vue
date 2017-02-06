<template>
  <div class="bdy">
    <topnav></topnav>
    <div class="container">
      <div style="height:60px;"></div>
      <banner height="509" bgsrc="http://static.bftv.com/bftv_wxl/budayang/budayang_01.jpg"></banner>
      <div class="hbao-components">
        <div>
            <hbao marketing_id="44"></hbao>
            <hbao marketing_id="43"></hbao>
            <hbao marketing_id="42"></hbao>
            <hbao marketing_id="41"></hbao>
        </div>
      </div>
      <img src="http://static.bftv.com/bftv_wxl/budayang/budayang_03.jpg">
      <div class="product-component">
        <product ids="40,47,96,95,27"></product>
      </div>
      <a class="more" href="/tvs/filter" target="_blank">查看更多商品</a>
    </div>
  </div>
</template>

<script>
import Topnav from './components/topnav'
import Banner from './components/banner'
import Product from './components/product'
import Hbao from './components/hbao'

export default {
  name: 'appbudayang',
  components: {
    Topnav,Banner,Product,Hbao
  }
}
</script>



<style scoped>
.bdy{background-color: #c51710;padding-bottom: 100px;}
.container{width: 100%;margin: 0 auto;position: relative;max-width: 1920px;min-width: 1132px;text-align: center;}
.hbao-components{background-image: url(http://static.bftv.com/bftv_wxl/budayang/budayang_02.jpg);background-size: cover;background-position: center;height: 274px;}
.hbao-components > div{width: 1132px;margin: 0 auto;position: relative;box-sizing: border-box;padding-top: 200px;padding-left: 126px;}
.hbao-components > div div{margin-right: 94px;float: left;}
.product-component{width: 1132px;margin: 0 auto;}
.container img{width: 100%;}
.more{background-color: #fff;width: 200px;height: 60px;display: inline-block;font-size: 20px;color: #c51710;line-height: 60px;border-radius: 10px;margin-top: 60px;}
</style>
