<template>
  <div class="head">
      <a href="http://v.t.sina.com.cn/share/share.php?url=http://www.bftv.com/rushbuy&title= %23买会员赢智能单车%23 @暴风TV 风迷年货节，买VIP影视会员赢700bike！抢现金红包，55吋VR电视最低2999元！转发并@暴风TV 再抽魔镜小D www.bftv.com&pic=http://static.bftv.com/bftv_wxl/nhcar/weibo1.jpg " target="_blank">分享微博赢魔镜</a>
      <a href="javascript:;" v-on:click="open">活动规则</a>
      <a href="/mall">返回首页</a>
  </div>
</template>

<script>
export default {
  name: 'topnav',
  props: ['rule'],
  methods:{
  	open(){
      layer.open({
        content: this.rule
        ,skin: 'footer'
        ,btn:['关闭']
      });
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head{width: 100%;position: absolute;top: 0;z-index: 99;font-size: 0.24rem;text-align: right;padding: 0.48rem 0;box-sizing: border-box;}
a{background-color: #eed8ff;padding: 0.12rem 0.24rem;border-radius: 0.24rem;color: #6e01e8;margin-left: 0.06rem;}
</style>
