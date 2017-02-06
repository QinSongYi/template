<template>
  <div>
    <div class="hide"></div>
    <div class="head">
      <div class="container">
        <div class="logo"><img src="http://img.bftv.com/css/new_frontend/img/logo_1.png"></div>
        <div class="right">
          <a class="blue" href="/mall">返回首页</a>
          <a>|</a>
          <a v-bind:href="weibo_link" target="_blank">{{weibo_title}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'topnav',
  props: ['weibo_title','weibo_link']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hide{height: 60px;}
.head{width: 100%;background-color: rgba(255,255,255,0.97);height: 60px;line-height: 60px;position: fixed;top: 0;z-index: 99;}
.container{width: 1132px;margin: 0 auto;}
.logo{float: left;}
.logo img{height: 25px;vertical-align: middle;}
.right{float: right;}
.right a{color: #969696;margin-left: 24px;}
.right a.blue{color: #608FF7;}
</style>
