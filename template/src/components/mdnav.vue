<template>
  <div class="mdnav">
  	<div class="container">
  		<ul>
        <li v-bind:style="{'width':100/linksName.split(',').length+'%'}" v-for="(item,index) in linksName.split(',')"><a v-on:click="active($event)" v-bind:href="links.split(',')[index]">{{item}}</a></li>
  		</ul>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'mdnav',
  props: ['links','linksName'],
  mounted(){
    var h = $('.mdnav').offset().top;
    if(h-$("body").scrollTop() <= 0){
      $('.mdnav').addClass('active');
    }else if(h-$("body").scrollTop() > 0){
      $('.mdnav').removeClass('active');
    }
    $(window).scroll(function(){
      if(h-$("body").scrollTop() <= 0){
        $('.mdnav').addClass('active');
      }else if(h-$("body").scrollTop() > 0){
        $('.mdnav').removeClass('active');
      }
    });
  },
  methods:{
    active(event){
      console.log(event.target);
      $(event.target).addClass('active');
      $(event.target).parent().siblings().children('a').removeClass('active');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mdnav{width: 100%;background-color: #b770fa;height: 76px;}
.mdnav.active{position: fixed;top: 0;z-index: 99;}
.container{width: 1132px;margin: 0 auto;position: relative;}
li{height: 50px;float: left;text-align: center;line-height: 50px;margin-top: 13px;font-size: 16px;padding: 0 10px;box-sizing: border-box;position: relative;}
li a.active{background-color: #eecc51;}
li a:hover{background-color: #eecc51;}
li a{color: #7000ea;background-color: #f8dfff;width: 100%;height: 100%;display: inline-block;border-radius: 25px;}
</style>
