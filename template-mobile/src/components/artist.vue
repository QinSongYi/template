<template>
  <div>
    <div class="owl-carousel owl-theme">
      <div class="item" v-for="(item,index) in artists.split(',')">
        <a href="javascript:;" v-on:click="appointmentFunc(artistsData.split(',')[index],forenotice.length!=0 ? forenotice[index].room : '')">
          <img v-bind:src="item">
        </a>
        <p class="num">当前预约人数：{{forenotice.length!=0 ? forenotice[index].tx_num : null}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'artist',
  props: ['artists','artistsData'],
  data(){
    return{
      forenotice:[]
    }
  },
  methods:{
    appointmentFunc(obj,Rid){
      // layer.prompt({title: '请输入手机号码', formType: 3}, function(pass, index){
      //   layer.close(index);
      //   $.getJSON('/jsonp/forenotice/nologinset?bftvcallback=?&fid='+obj+'&mobile='+pass,function(result){
      //     if(result.status == 1){
      //       layer.msg('预约成功');
      //     }else if(result.status == 0){
      //       layer.alert(result.message,{title:'错误'});
      //     }else{
      //       layer.alert('系统繁忙请稍候重试',{title:'错误'});
      //     }
      //   });
      // });
      window.location.href='http://livebuy.baofeng.com/news';
    }
  },
  mounted(){
    $.getJSON('/forenotice.json',function(result){
      var resultList = result;
      this.artistsData.split(',').map(function(item){
        for(var i in resultList){
          if(resultList[i].id == item){
            this.forenotice.push(resultList[i]);
          }
        }
      }.bind(this));
    }.bind(this));

    $('.owl-carousel').owlCarousel({
      loop: true,
      items: 1,
      autoplay: true,
      autoplayTimeout: 3000,
      nav: false,
      navText:['<','>']
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{width: 100%;}
.num{position: absolute;top: 0.8rem;left: 0.4rem;color: #608FF7;font-size: 0.28rem;}
</style>
