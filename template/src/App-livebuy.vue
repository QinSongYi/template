<template>
  <div>
    <topnav weibo_title="分享微博赢魔镜" weibo_link="http://v.t.sina.com.cn/share/share.php?url=http://www.bftv.com/rushbuy&title=【暴风TV】我正在预约主播买电视，最高立省699元，快来围观！暴风TV浓情元宵节，主播陪你闹，预约主播赢好礼！转发并点赞此微博，随机抽3位风迷赠送魔镜小D！@暴风TV http://t.cn/R56XKD8"></topnav>
    <banner height="770" bgsrc="http://static.bftv.com/bftv_wxl/yuanxiaojie/livebuy_01.jpg" maxw="1920"></banner>
    <banner height="484" bgsrc="http://static.bftv.com/bftv_wxl/yuanxiaojie/livebuy_02.jpg" maxw="1920"></banner>
    <div class="artist-components">
      <div>
        <artist artists="http://static.bftv.com/bftv_wxl/yuanxiaojie/ppp1.jpg,http://static.bftv.com/bftv_wxl/yuanxiaojie/ppp2.jpg,http://static.bftv.com/bftv_wxl/yuanxiaojie/ppp3.jpg,http://static.bftv.com/bftv_wxl/yuanxiaojie/ppp4.jpg,http://static.bftv.com/bftv_wxl/yuanxiaojie/ppp5.jpg,http://static.bftv.com/bftv_wxl/yuanxiaojie/ppp6.jpg,http://static.bftv.com/bftv_wxl/yuanxiaojie/ppp7.jpg,http://static.bftv.com/bftv_wxl/yuanxiaojie/ppp8.jpg" artistsData="30,32,28,31,33,29,35,34"></artist>
      </div>
    </div>
    <div class="product-components">
      <div>
        <product ids="40,47" hint="元宵大礼包：预约主播下单立减400元，送199元智能语音遥控器;元宵大礼包：下单立减200元，预约主播有惊喜"></product>
        <productcol ids="95,96" hint="元宵大礼包：立减300元;元宵大礼包：立减400元"></productcol>
        <product ids="27" hint="预约主播下单立减200元，送499元一年VIP影视会员"></product>
      </div>
    </div>
    <div class="moretv">
      <a href="http://www.bftv.com/tvs/filter" target="_blank"><img src="http://static.bftv.com/bftv_wxl/yuanxiaojie/moretv.png"></a>
      <img src="http://static.bftv.com/bftv_wxl/yuanxiaojie/rules.png">
    </div>
  </div>
</template>

<script>
import Topnav from './components/topnav'
import Banner from './components/banner'
import Product from './components/product'
import Productcol from './components/product-col'
import Artist from './components/artist'

export default {
  name: 'applivebuy',
  components: {
    Topnav,Banner,Artist,Product,Productcol
  },
  methods:{
    
  }
}
</script>


<style type="text/css">
  *{margin: 0;padding: 0;text-decoration: none;list-style-type: none;}
  *:focus{outline: none;}
  body{font-family: "Microsoft Yahei", 微软雅黑, "PingFang SC", "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", STHeiti, 华文细黑, sans-serif}
  .owl-theme .owl-dots{position: absolute;top: -290px;left: 24px;}
  .owl-theme .owl-nav{position: absolute;top: 40%;}
  .owl-theme .owl-nav [class*=owl-]{font-size: 38px;}
  .owl-theme .owl-nav{width: 100%;}
  .owl-theme .owl-nav .owl-prev{float: left;}
  .owl-theme .owl-nav .owl-next{float: right;}
  .owl-theme .owl-dots .owl-dot span{width: 100px;height: 100px;border-radius: 50px;margin-right: 18px;background-color: inherit;}
  .owl-theme .owl-dots .owl-dot.active span{background-color: inherit;box-shadow: 0px 0px 16px 10px #888888;}
  .owl-theme .owl-dots .owl-dot:hover span{background-color: inherit;box-shadow: 0px 0px 16px 10px #888888;}
</style>
<style scoped>
.artist-components{max-width: 1920px;margin: 0 auto;height: 628px;background-position: center;background-size: cover;background-image: url(http://static.bftv.com/bftv_wxl/yuanxiaojie/livebuy_03.jpg);}
.artist-components > div{width: 1035px;margin: 0 auto;padding-top: 90px;}
.product-components{max-width: 1920px;margin: 0 auto;background-color: #28467c;padding: 20px 0;}
.product-components > div{width: 1035px;margin: 0 auto;}
.moretv{max-width: 1920px;margin: 0 auto;background-color: #28467c;text-align: center;}
.moretv img{width: 1035px;margin: 10px 0;}
</style>
