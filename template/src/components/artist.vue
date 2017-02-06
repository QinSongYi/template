<template>
  <div>
    <div class="owl-carousel owl-theme">
      <div class="item" v-for="(item,index) in artists.split(',')">
        <a href="javascript:;" v-on:click="appointmentFunc(artistsData.split(',')[index])">
          <img v-bind:src="item">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'artist',
  props: ['artists','artistsData'],
  methods:{
    appointmentFunc(obj){
      layer.prompt({title: '请输入手机号码', formType: 3}, function(pass, index){
        layer.close(index);
        $.getJSON('/jsonp/forenotice/nologinset?bftvcallback=?&fid='+obj+'&mobile='+pass,function(result){
          if(result.status == 1){
            layer.msg('预约成功');
          }else if(result.status == 0){
            layer.alert(result.message,{title:'错误'});
          }else{
            layer.alert('系统繁忙请稍候重试',{title:'错误'});
          }
        });
      });
    }
  },
  mounted(){
    $('.owl-carousel').owlCarousel({
      loop: true,
      items: 1,
      autoplay: false,
      autoplayTimeout: 3000,
      nav: true,
      navText:['<','>']
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{width: 100%;}
</style>
