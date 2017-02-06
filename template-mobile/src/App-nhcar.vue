<template>
  <div>
    <nonav rule='<p style="padding:0.24rem;font-size:0.24rem;text-align:left;line-height:0.48rem;height:7rem;overflow:auto"><span style="font-size:0.3rem;font-weight:600;">常见问题：</span><br/><br/>Q：买年度会员赠送的一年会员如何领取？怎么激活？如何参与抽奖赢取700bike智能单车？<br/>A：您购买会员成功之后，系统会自动发出短信，短信含有额外赠送一年的会员激活码，直播抽奖的二维码链接。赠送会员激活：电视开机联网—我的—VIP会员中心—注册登录—点击激活VIP—输入订单号—确认激活（若无法激活请将电视在线升级至1.9.1版本）<br/><br/>Q：买月度会员，赠送价值646元游戏大礼包含有什么？如何领取？<br/>A：赠送价值646元游戏大礼包含有：《我叫MT2》价值298元游戏激活码、《苍翼默示录》价值298元游戏激活码、《有乐斗地主》价值50元游戏激活码，您购买会员成功之后，系统会自动发出短信，短信含有1个订单（对应三款游戏各1个激活码）。<br/><br/>Q：买季度会员赠送善诊医疗孝心体检套餐如何领取？<br/>A：您购买会员成功之后，系统会自动发出短信，短信含有体检套餐二维码链接和兑换口令，您扫码进入“领取体检套餐H5页面”领取。<br/><br/>Q：以上赠品什么时候可以领取到呢？<br/>A：预计1月19日后开始发放。</p>'></nonav>
    <banner bgsrc="http://static.bftv.com/bftv_wxl/nhcar-m/nhcar-m_0111.jpg" height="12.06"></banner>
    <mdnav linksName="内容生态专场,限时精选年货,新年优惠套餐,直播购送好礼,以旧换新返券" links="#huiyuan,#nianhuo,#taocan,#live,#exchange"></mdnav>
    <!-- <div id="car" class="car">
      <div class="countdown-component">
        <countdown endtime="2017/02/01 00:00:00"></countdown>
      </div>
      <iframe v-bind:src="iframe"></iframe>
      <a class="morecar" href="http://www.swmmotors.com.cn/"></a>
      <a class="shuoming" href="javascript:;" v-on:click="shuoming"></a>
    </div> -->
    <div class="product-component">
      <div id="nianhuo" class="one">
        <product ids="40"></product>
        <product ids="47,96"></product>
        <product ids="27,95"></product>
      </div>
      <div id="taocan" class="two">
        <owl ids="35,46,173,44,130,131,132,133,111,113,112,114,59,39,174,29" dotsEach="4"></owl>
      </div>
      <div id="huiyuan" class="three">
        <a href="javascript:;" v-on:click="huiyuan"></a>
        <owl ids="31,32,33" dotsEach="1"></owl>
      </div>
      <div class="five">
        <a href="http://club.bftv.com/forum.php?mod=viewthread&tid=3935&extra=page%3D1"><img src="http://static.bftv.com/bftv_wxl/nhcar-m/link_m3.jpg"></a>
        <a href="http://club.bftv.com/forum.php?mod=viewthread&tid=3935&extra=page%3D1"><img src="http://static.bftv.com/bftv_wxl/nhcar-m/link_m4.jpg"></a>
        <a href="http://club.bftv.com/forum.php?mod=viewthread&tid=3935&extra=page%3D1"><img src="http://static.bftv.com/bftv_wxl/nhcar-m/link_m5.jpg"></a>
      </div>
      <div class="four">
        <product ids="147,51"></product>
        <product ids="142,9"></product>
        <product ids="152,72"></product>
      </div>
    </div>
    <div class="five">
      <a id="exchange" href="/rushbuy/exchange.html"><img src="http://static.bftv.com/bftv_wxl/nhcar-m/link_m1.jpg"></a>
      <a id="live" href="http://livebuy.baofeng.com/news"><img src="http://static.bftv.com/bftv_wxl/nhcar-m/link_m2.jpg"></a>
    </div>
    <div class="foot">
      <a class="swhome" href="http://www.swmmotors.com.cn/" target="_blank"></a>
      <a class="bikehome" href="http://www.700store.com/" target="_blank"></a>
    </div>
  </div>
</template>

<script>
import Nonav from './components/nonav'
import Banner from './components/banner'
import Mdnav from './components/mdnav'
import Countdown from './components/countdown'
import Product from './components/product'
import Owl from './components/owl'

export default {
  name: 'appnhcar',
  components: {
    Nonav,Banner,Mdnav,Countdown,Product,Owl
  },
  data(){
    return{
      iframe: '',
    }
  },
  methods:{
    // shuoming(){
    //   layer.open({
    //     content: '<p style="padding:0.24rem;font-size:0.24rem;text-align:left;line-height:0.48rem;"><span style="font-size:0.3rem;font-weight:600;">1. 购电视 填信息</span><br/>仅限1月10号-1月25号，在暴风TV官网购买暴风超体电视的用户（购买后退货不算）。下单完成后，请按页面提示的保存生成的图片。<br/><span style="font-size:0.3rem;font-weight:600;">2. 分享朋友圈 集赞</span><br/>将生成的页面保存到手机，然后分享到朋友圈集赞。然后于2月9日23:00（逾期视为自动放弃）之前，把“朋友圈点赞截图”发微博并@暴风TV，按照朋友圈点赞数排名，前100名可参与抽7座SUV大奖（一辆）、700bike智能潮流单车（一辆）、暴风魔镜S1（五个），其余未中奖用户将获得获得200元年度会员抵用券。<br/><span style="font-size:0.3rem;font-weight:600;">3. 看直播 抽SUV</span><br/>2月11日10:00，以现场直播的形式抽取SUV。'
    //     ,skin: 'footer'
    //     ,btn:['关闭']
    //   });
    // },
    huiyuan(){
      layer.open({
        content: '<p style="padding:0.24rem;font-size:0.24rem;text-align:left;line-height:0.48rem;height:7rem;overflow:auto"><span style="font-size:0.3rem;font-weight:600;">常见问题：</span><br/><br/>Q：买年度会员赠送的一年会员如何领取？怎么激活？如何参与抽奖赢取700bike智能单车？<br/>A：您购买会员成功之后，系统会自动发出短信，短信含有额外赠送一年的会员激活码，直播抽奖的二维码链接。赠送会员激活：电视开机联网—我的—VIP会员中心—注册登录—点击激活VIP—输入订单号—确认激活（若无法激活请将电视在线升级至1.9.1版本）<br/><br/>Q：买月度会员，赠送价值646元游戏大礼包含有什么？如何领取？<br/>A：赠送价值646元游戏大礼包含有：《我叫MT2》价值298元游戏激活码、《苍翼默示录》价值298元游戏激活码、《有乐斗地主》价值50元游戏激活码，您购买会员成功之后，系统会自动发出短信，短信含有1个订单（对应三款游戏各1个激活码）。<br/><br/>Q：买季度会员赠送善诊医疗孝心体检套餐如何领取？<br/>A：您购买会员成功之后，系统会自动发出短信，短信含有体检套餐二维码链接和兑换口令，您扫码进入“领取体检套餐H5页面”领取。<br/><br/>Q：以上赠品什么时候可以领取到呢？<br/>A：预计1月19日后开始发放。</p>'
        ,skin: 'footer'
        ,btn:['关闭']
      });
    }
  },
  mounted(){
    setTimeout(function(){
      let iframeW = $('.car iframe').css('width');
      let iframeH = $('.car iframe').css('height');
      this.iframe = 'http://vod.baofengcloud.com/8188623/bfcloud.html?servicetype=1&uid=8188623&fid=EB4A75AAA88C59377EC34A0935032DA1&width='+iframeW+'&height='+iframeH+'&auto=1&vr=0'
    }.bind(this),500);
  }
}
</script>


<style type="text/css">
  *{margin: 0;padding: 0;text-decoration: none;list-style-type: none;}
  *:focus{outline: none;}
  body{font-size: 12px;}
  .owl-theme .owl-dots{position: absolute;top: -1.26rem;left: -0.24rem;}
  .owl-theme .owl-dots .owl-dot span{width: 1.6rem;height: 0.8rem;margin-left: 0.158rem;background-color: inherit;}
  .owl-theme .owl-dots .owl-dot.active span{background-color: inherit;}
  .owl-theme .owl-dots .owl-dot:hover span{background-color: inherit;}
  .owl-nav{position: absolute;top: 35%;width: 100%;}
  .owl-prev{float: left;}
  .owl-next{float: right;}
  .owl-theme .owl-nav [class*=owl-]{padding: 0.2rem 0.08rem;font-size: 0.38rem;background-color: #febe3a;}
  .layui-m-layerbtn span{font-size: 0.28rem;line-height: 0.56rem;}
</style>
<style scoped>
.car{background-image: url(http://static.bftv.com/bftv_wxl/nhcar-m/nhcar-m_02.jpg);background-position: center;background-size: cover;height: 13.58rem;position: relative;}
.car iframe{position: absolute;width: 6.8rem;height: 3.78rem;background-color: blue;border:none;left: 50%;margin-left: -3.4rem;top: 6.08rem;border-radius: 0.06rem;overflow: hidden;}
.countdown-component{position: absolute;width: 6rem;left: 50%;margin-left: -3rem;top: 2.5rem;}
.shuoming{width:2rem;height: 1rem;position: absolute;left: 50%;margin-left: -1rem;bottom: 0.6rem;}
.morecar{width:2rem;height: 0.88rem;position: absolute;bottom: 2.7rem;right: 0.4rem;}
.one{background-image: url(http://static.bftv.com/bftv_wxl/nhcar-m/nhcar-m_04.jpg);background-position: center;background-size: cover;height: 20.69rem;padding: 3.5rem 0.24rem 0 0.24rem;box-sizing: border-box;}
.two{background-image: url(http://static.bftv.com/bftv_wxl/nhcar-m/nhcar-m_05.jpg);background-position: center;background-size: cover;height: 10.72rem;box-sizing: border-box;padding: 3.8rem 0.24rem 0 0.24rem;}
.three{background-image: url(http://static.bftv.com/bftv_wxl/nhcar-m/nhcar-m_066.jpg);background-position: center;background-size: cover;height: 15.71rem;box-sizing: border-box;padding: 8.4rem 0.24rem 0 0.24rem;position: relative;}
.three > a{position: absolute;width: 4rem;height: 1rem;display: block;left: 50%;margin-left: -2rem;top: 6.8rem;}
.four{background-image: url(http://static.bftv.com/bftv_wxl/nhcar-m/nhcar-m_07.jpg);background-position: center;background-size: cover;height: 18.56rem;box-sizing: border-box;padding: 2.6rem 0.24rem 0 0.24rem;}
.five{background-color: #5f03bc;width: 100%;text-align: center;}
.five a{padding: 0.12rem;display: inline-block;width: 100%;box-sizing: border-box;}
.five img{width: 100%;}
.foot{background-image: url(http://static.bftv.com/bftv_wxl/nhcar-m/foot_m.jpg);background-position: center;background-size: cover;height: 5.34rem;position: relative;}
.swhome{position: absolute;width: 3.5rem;top: 110px;height: 1.4rem;left: 0;}
.bikehome{position: absolute;width: 3.5rem;top: 110px;height: 1.4rem;right: 0;}
</style>
