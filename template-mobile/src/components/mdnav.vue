<template>
  <div class="mdnav">
  		<ul>
  			<li v-bind:style="{'width':100/linksName.split(',').length+'%'}" v-for="(item,index) in linksName.split(',')"><a v-on:click="active($event)" v-bind:href="links.split(',')[index]">{{item}}</a></li>
  		</ul>
  </div>
</template>

<script>
export default {
  name: 'mdnav',
  props: ['links','linksName'],
  methods:{
    active(event){
      $(event.target).addClass('active');
      $(event.target).parent().siblings().children('a').removeClass('active');
    }
  },
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mdnav{width: 100%;background-color: #b770fa;padding: 0.24rem 0;}
.mdnav.active{position: fixed;top: 0;z-index: 99;}
ul:after{content: '';clear: both;display: block;}
li{float: left;font-size: 0.28rem;padding: 0.12rem;text-align: center;padding: 0 0.12rem;box-sizing: border-box;position: relative;height: 0.72rem;line-height: 1.3;}
li a{color: #7000ea;background-color: #f8dfff;width: 100%;height: 100%;display: inline-block;border-radius: 0.2rem;}
li a.active{background-color: #fdb934;}
</style>
