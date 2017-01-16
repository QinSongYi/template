<template>
  <div class="countdown">
   <p>
     <span>距离开奖还有：</span>
     <span class="time">{{day}} 天 {{hour}}：{{minute}}：{{second.toString().length == 2 ? second : '0'+second}}</span>
   </p>
   <p>
     <a href="javascript:;" v-on:click="remind">设置开奖提醒</a>
   </p>
  </div>
</template>

<script>
export default {
  name: 'countdown',
  props: ['endtime'],
  data(){
    return{
      day: '',
      hour: '',
      minute: '',
      second: ''
    }
  },
  mounted(){
    setInterval(function(){
      let now = new Date();
      let time = new Date(this.endtime) - now;
      this.day = new Date(time).getDate();
      this.hour = new Date(time).getHours();
      this.minute = new Date(time).getMinutes();
      this.second = new Date(time).getSeconds();
    }.bind(this),1000);
  },
  methods:{
    remind(){
      var telNum=prompt("请输入手机号码");
      if(!(/^1[3|4|5|7|8]\d{9}$/.test(telNum))||telNum==''||telNum==undefined){
        layer.msg('手机号码格式有误');
      }else{
        $.post('/join_marketing?mobile='+telNum+'&marketing_id=39',function(result){
          if(result.status==1){
            layer.open({
              content: '操作成功'
              ,skin: 'msg'
              ,time: 2 //2秒后自动关闭
            });
          }else if(result.status==0){
            layer.open({
              content: '操作失败，请稍候重试'
              ,skin: 'msg'
              ,time: 2 //2秒后自动关闭
            });
          }
        },'json');
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.countdown{text-align: center;width: 100%;}
p{color: #fff;font-size: 0.24rem;}
.time{font-size: 0.3rem;}
a{display: inline-block;background-color: #f3496d;padding: 0.12rem 0.24rem;font-size: 0.28rem;color: #fff;border-radius: 0.04rem;margin-top: 0.24rem;}
</style>
