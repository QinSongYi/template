<template>
  <div class="head">
  	<div class="container">
        <a href="http://v.t.sina.com.cn/share/share.php?url=http://www.bftv.com/rushbuy&title= %23买会员赢智能单车%23 @暴风TV 风迷年货节，买VIP影视会员赢700bike！抢现金红包，55吋VR电视最低2999元！转发并@暴风TV 再抽魔镜小D www.bftv.com&pic=http://static.bftv.com/bftv_wxl/nhcar/weibo1.jpg " target="_blank">分享微博赢魔镜</a>
        <a href="javascript:;" v-on:click="open">活动规则</a>
        <a href="/mall">返回首页</a>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'topnav',
  props: ['rule'],
  methods:{
  	open(){
		layer.open({
		  title:'活动规则',
		  type: 1,
		  skin: 'layui-layer-rim', //加上边框
		  area: ['700px', 'auto'], //宽高
		  content: this.rule
		});
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head{width: 100%;height: 100px;line-height: 100px;position: absolute;top: 0;z-index: 99;}
.container{width: 1132px;margin: 0 auto;text-align: right;}
a{background-color: #eed8ff;padding: 8px 20px;border-radius: 20px;color: #6e01e8;margin-left: 15px;}
</style>
