<template>
  <div class="bdy">
    <topnav></topnav>
    <div style="height:1rem;"></div>
    <banner bgsrc="http://static.bftv.com/bftv_wxl/budayang/budayang-m_01.jpg" height="5.23"></banner>
    <div class="hbao-component">
      <hbao marketing_id="44"></hbao>
      <hbao marketing_id="43"></hbao>
      <hbao marketing_id="42"></hbao>
      <hbao marketing_id="41"></hbao>
    </div>
    <banner bgsrc="http://static.bftv.com/bftv_wxl/budayang/budayang-m_03.jpg" height="9.39"></banner>
    <div class="product-components">
      <product ids="40"></product>
      <product ids="47"></product>
      <product ids="96"></product>
      <product ids="95"></product>
      <product ids="27"></product>
    </div>
    <a class="more" href="/tvs/filter" target="_blank">查看更多商品</a>
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
.bdy{background-color: #c51710;padding-bottom: 1rem;text-align: center;}
.hbao-component{background-image: url(http://static.bftv.com/bftv_wxl/budayang/budayang-m_02.jpg);height: 3.17rem;background-size: cover;background-position: center;box-sizing: border-box;padding-top: 2.1rem;padding-left: 0.22rem;}
.product-components{background-color: #c51710;padding: 0.24rem 0;}
.hbao-component > div{float: left;margin-right: 0.36rem;}
.hbao-component > div + div + div + div{margin: 0;}
.more{background-color: #fff;width: 2.2rem;height: 0.6rem;display: inline-block;font-size: 0.28rem;color: #c51710;line-height: 0.6rem;border-radius: 0.1rem;margin-top: 0.4rem;}
</style>
