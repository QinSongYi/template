<template>
  <div>
    <nonav rule='<p style="padding:20px;font-size:14px;line-height:28px;"><span style="font-weight:600;font-size:16px;display:inline-block;margin-bottom:7px;">常见问题：</span><br/>Q：买年度会员赠送的一年会员如何领取？怎么激活？如何参与抽奖赢取700bike智能单车？<br/>A：您购买会员成功之后，系统会自动发出短信，短信含有额外赠送一年的会员激活码，直播抽奖的二维码链接。赠送会员激活：电视开机联网—我的—VIP会员中心—注册登录—点击激活VIP—输入订单号—确认激活（若无法激活请将电视在线升级至1.9.1版本）<br/><br/>Q：买月度会员，赠送价值646元游戏大礼包含有什么？如何领取？<br/>A：赠送价值646元游戏大礼包含有：《我叫MT2》价值298元游戏激活码、《苍翼默示录》价值298元游戏激活码、《有乐斗地主》价值50元游戏激活码，您购买会员成功之后，系统会自动发出短信，短信含有1个订单（对应三款游戏各1个激活码）。<br/><br/>Q：买季度会员赠送善诊医疗孝心体检套餐如何领取？<br/>A：您购买会员成功之后，系统会自动发出短信，短信含有体检套餐二维码链接和兑换口令，您扫码进入“领取体检套餐H5页面”领取。<br/><br/>Q：以上赠品什么时候可以领取到呢？<br/>A：预计1月19日后开始发放。</p>'></nonav>
    <banner height="1150" bgsrc="http://static.bftv.com/bftv_wxl/nhcar/banner2.jpg"></banner>
    <mdnav linksName="内容生态专场,限时精选年货,新年优惠套餐,直播够送好礼,以旧换新返券" links="#huiyuan,#nianhuo,#taocan,#live,#exchange"></mdnav>
    <!-- <div id="car" class="car">
      <div>
        <div class="countdown-component">
          <countdown endtime="2017/02/01 00:00:00"></countdown>
        </div>
        <iframe src="http://vod.baofengcloud.com/8188623/bfcloud.html?servicetype=1&uid=8188623&fid=EB4A75AAA88C59377EC34A0935032DA1&width=460&height=258&auto=1&vr=0"></iframe>
        <a class="morecar" href="http://www.swmmotors.com.cn/" target="_blank"></a>
        <a class="shuoming" href="javascript:;" v-on:click="shuoming"></a>
      </div>
    </div> -->
    <div class="product-component">
      <div class="container">
        <div id="nianhuo" class="one">
          <product ids="40"></product>
          <productcol ids="47,96,27"></productcol>
        </div>
        <div id="taocan" class="two">
          <owl ids="35,46,173,44,130,131,132,133,111,113,112,114,59,39,174,29" dotsEach="4"></owl>
        </div>
        <div id="huiyuan" class="three">
          <a href="javascript:;" v-on:click="huiyuan"></a>
          <owl ids="31,32,33" dotsEach="false"></owl>
        </div>
      </div>
    </div>
    <div class="five">
      <div class="foot-container">
        <a href="http://club.bftv.com/forum.php?mod=viewthread&tid=3935&extra=page%3D1" target="_blank"><img src="http://static.bftv.com/bftv_wxl/nhcar/link3.jpg"></a>
      </div>
    </div>
    <div class="five">
      <div class="foot-container">
        <a href="http://club.bftv.com/forum.php?mod=viewthread&tid=3935&extra=page%3D1" target="_blank"><img src="http://static.bftv.com/bftv_wxl/nhcar/link4.jpg"></a>
      </div>
    </div>
    <div class="five">
      <div class="foot-container">
        <a href="http://club.bftv.com/forum.php?mod=viewthread&tid=3935&extra=page%3D1" target="_blank"><img src="http://static.bftv.com/bftv_wxl/nhcar/link5.jpg"></a>
      </div>
    </div>
    <div class="product-component2">
      <div class="container">
        <div class="four">
          <productcol ids="147,51,142"></productcol>
          <productcol ids="9,152,72"></productcol>
        </div>
      </div>
    </div>
    <div id="exchange" class="five">
      <div class="foot-container">
        <a href="/rushbuy/exchange.html" target="_blank"><img src="http://static.bftv.com/bftv_wxl/nhcar/link1.jpg"></a>
      </div>
    </div>
    <div id="live" class="five">
      <div class="foot-container">
        <a href="http://livebuy.baofeng.com" target="_blank"><img src="http://static.bftv.com/bftv_wxl/nhcar/link2.jpg"></a>
      </div>
    </div>
    <div class="foot">
      <div class="foot-container">
        <a class="swhome" href="http://www.swmmotors.com.cn/" target="_blank"></a>
        <a class="bikehome" href="http://www.700store.com/" target="_blank"></a>
      </div>
    </div>
  </div>
</template>

<script>
import Nonav from './components/nonav'
import Banner from './components/banner'
import Mdnav from './components/mdnav'
import Countdown from './components/countdown'
import Product from './components/product'
import Productcol from './components/product-col'
import Owl from './components/owl'

export default {
  name: 'appnhcar',
  components: {
    Nonav,Banner,Mdnav,Countdown,Product,Productcol,Owl
  },
  methods:{
    // shuoming(){
    //   layer.open({
    //     title:'抽奖说明',
    //     type: 1,
    //     skin: 'layui-layer-rim', //加上边框
    //     area: ['700px', 'auto'], //宽高
    //     content: '<p style="padding:20px;font-size:14px;line-height:28px;"><span style="font-weight:600;font-size:16px;display:inline-block;margin-bottom:7px;">1. 购电视 填信息</span><br/>仅限1月10号-1月25号，在暴风TV官网购买暴风超体电视的用户（购买后退货不算）。下单完成后，请按页面提示的保存生成的图片。<br/><br/><span style="font-weight:600;font-size:16px;display:inline-block;margin-bottom:7px;">2. 分享朋友圈 集赞</span><br/>将生成的页面保存到手机，然后分享到朋友圈集赞。然后于2月9日23:00（逾期视为自动放弃）之前，把“朋友圈点赞截图”发微博并@暴风TV，按照朋友圈点赞数排名，前100名可参与抽7座SUV大奖（一辆）、700bike智能潮流单车（一辆）、暴风魔镜S1（五个），其余未中奖用户将获得获得200元年度会员抵用券。<br/><br/><span style="font-weight:600;font-size:16px;display:inline-block;margin-bottom:7px;">3. 看直播 抽SUV</span><br/>2月11日10:00，以现场直播的形式抽取SUV。</p>'
    //   });
    // },
    huiyuan(){
      layer.open({
        title:'抽奖说明',
        type: 1,
        skin: 'layui-layer-rim', //加上边框
        area: ['700px', 'auto'], //宽高
        content: '<p style="padding:20px;font-size:14px;line-height:28px;"><span style="font-weight:600;font-size:16px;display:inline-block;margin-bottom:7px;">常见问题：</span><br/>Q：买年度会员赠送的一年会员如何领取？怎么激活？如何参与抽奖赢取700bike智能单车？<br/>A：您购买会员成功之后，系统会自动发出短信，短信含有额外赠送一年的会员激活码，直播抽奖的二维码链接。赠送会员激活：电视开机联网—我的—VIP会员中心—注册登录—点击激活VIP—输入订单号—确认激活（若无法激活请将电视在线升级至1.9.1版本）<br/><br/>Q：买月度会员，赠送价值646元游戏大礼包含有什么？如何领取？<br/>A：赠送价值646元游戏大礼包含有：《我叫MT2》价值298元游戏激活码、《苍翼默示录》价值298元游戏激活码、《有乐斗地主》价值50元游戏激活码，您购买会员成功之后，系统会自动发出短信，短信含有1个订单（对应三款游戏各1个激活码）。<br/><br/>Q：买季度会员赠送善诊医疗孝心体检套餐如何领取？<br/>A：您购买会员成功之后，系统会自动发出短信，短信含有体检套餐二维码链接和兑换口令，您扫码进入“领取体检套餐H5页面”领取。<br/><br/>Q：以上赠品什么时候可以领取到呢？<br/>A：预计1月19日后开始发放。</p>'
      });
    }
  }
}
</script>


<style type="text/css">
  *{margin: 0;padding: 0;text-decoration: none;list-style-type: none;}
  *:focus{outline: none;}
  body{font-family: "Microsoft Yahei", 微软雅黑, "PingFang SC", "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", STHeiti, 华文细黑, sans-serif}
  .owl-theme .owl-dots{position: absolute;top: -130px;left: 64px;}
  .owl-theme .owl-dots .owl-dot span{width: 200px;height: 100px;margin-right: 45px;background-color: inherit;}
  .owl-theme .owl-dots .owl-dot.active span{background-color: inherit;}
  .owl-theme .owl-dots .owl-dot:hover span{background-color: inherit;}
  .owl-nav{position: absolute;top: 35%;width: 100%;}
  .owl-prev{float: left;}
  .owl-next{float: right;}
  .owl-theme .owl-nav [class*=owl-]{padding: 20px 15px;font-size: 20px;}
</style>
<style scoped>
.car{background-image: url(http://static.bftv.com/bftv_wxl/nhcar/car1.jpg);background-position: center;background-size: cover;height: 1016px;position: relative;}
.car > div{width: 1100px;margin: 0 auto;position: relative;height: 100%;}
.car iframe{position: absolute;background-color: blue;border:none;top: 404px;left: 591px;border-radius: 6px;width: 460px;height: 258px;}
.countdown-component{position: absolute;width: 800px;left: 50%;margin-left: -400px;top: 278px;}
.product-component{background-image: url(http://static.bftv.com/bftv_wxl/nhcar/product_011.jpg);background-position: center;background-size: cover;width: 100%;height: 3360px;}
.product-component2{background-image: url(http://static.bftv.com/bftv_wxl/nhcar/product_02.jpg);background-position: center;background-size: cover;width: 100%;height: 1127px;}
.container{width: 1100px;margin: 0 auto;position: relative;}
.one{padding-top: 350px;}
.two{padding-top: 530px;}
.three{padding-top: 800px;}
.three > a{position: absolute;display: block;width: 400px;height: 60px;left: 50%;margin-left: -200px;top: 2650px;cursor: pointer;}
.four{padding-top: 230px;}
.shuoming{width:200px;height: 60px;position: absolute;left: 50%;margin-left: -100px;bottom: 110px;}
.morecar{width:200px;height: 60px;position: absolute;bottom: 280px;right: 40px;}
.foot{background-image: url(http://static.bftv.com/bftv_wxl/nhcar/foot1.jpg);background-position: center;background-size: cover;height: 716px;}
.foot-container{width: 1100px;margin: 0 auto;position: relative;}
.swhome{position: absolute;width: 540px;top: 110px;height: 220px;left: 0;}
.bikehome{position: absolute;width: 540px;top: 110px;height: 220px;right: 0;}
.five{width: 100%;background-color: #6401c0;padding: 10px 0;}
</style>
