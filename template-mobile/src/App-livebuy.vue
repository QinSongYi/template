<template>
  <div>
    <topnav  weibo_title="分享微博赢魔镜" weibo_link="http://v.t.sina.com.cn/share/share.php?url=http://www.bftv.com/rushbuy&title=【暴风TV】我正在预约主播买电视，最高立省699元，快来围观！暴风TV浓情元宵节，主播陪你闹，预约主播赢好礼！转发并点赞此微博，随机抽3位风迷赠送魔镜小D！@暴风TV http://t.cn/R56XKD8"></topnav>
    <banner bgsrc="http://static.bftv.com/bftv_wxl/yuanxiaojie/yuanxiao-m_011.jpg" height="6.38"></banner>
    <banner bgsrc="http://static.bftv.com/bftv_wxl/yuanxiaojie/yuanxiao-m_02.jpg" height="7.1"></banner>
    <div class="artist-components">
      <artist  artists="http://static.bftv.com/bftv_wxl/yuanxiaojie/ppp1-m.jpg,http://static.bftv.com/bftv_wxl/yuanxiaojie/ppp2-m.jpg,http://static.bftv.com/bftv_wxl/yuanxiaojie/ppp3-m.jpg,http://static.bftv.com/bftv_wxl/yuanxiaojie/ppp4-m.jpg,http://static.bftv.com/bftv_wxl/yuanxiaojie/ppp5-m.jpg,http://static.bftv.com/bftv_wxl/yuanxiaojie/ppp6-m.jpg,http://static.bftv.com/bftv_wxl/yuanxiaojie/ppp7-m.jpg,http://static.bftv.com/bftv_wxl/yuanxiaojie/ppp8-m.jpg" artistsData="30,32,28,31,33,29,35,34"></artist>
    </div>
    <div class="product-componsents">
      <product ids="40" hint="元宵大礼包：预约主播下单立减400元，送199元智能语音遥控器"></product>
      <product ids="47" hint="元宵大礼包：下单立减200元，预约主播有惊喜"></product>
      <product ids="95,96" hint="元宵大礼包：立减300元;元宵大礼包：立减400元"></product>
      <product ids="27" hint="预约主播下单立减200元，送499元一年VIP影视会员"></product>
    </div>
    <banner bgsrc="http://static.bftv.com/bftv_wxl/yuanxiaojie/moretv-m.jpg" height="2.28"></banner>
    <banner bgsrc="http://static.bftv.com/bftv_wxl/yuanxiaojie/rules-m.jpg" height="10.265"></banner>
  </div>
</template>

<script>
import Banner from './components/banner'
import Product from './components/product'
import Artist from './components/artist'
import Topnav from './components/topnav'

export default {
  name: 'appnhcar',
  components: {
    Topnav,Banner,Artist,Product
  }
}
</script>


<style type="text/css">
  *{margin: 0;padding: 0;text-decoration: none;list-style-type: none;}
  *:focus{outline: none;}
  body{font-size: 12px;}
</style>
<style scoped>
.artist-components{background-color: #28467c;padding: 0.12rem 0.24rem;}
.product-componsents{background-color: #28467c;padding: 0.12rem 0.24rem;}
</style>
