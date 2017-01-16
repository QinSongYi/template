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
      layer.prompt({title: '请输入手机号码', formType: 3}, function(telNum, index){
        if(!(/^1[3|4|5|7|8]\d{9}$/.test(telNum))||telNum==''||telNum==undefined){
          layer.msg('手机号码格式有误');
        }else{
          $.post('/join_marketing?mobile='+telNum+'&marketing_id=39',function(result){
            if(result.status==1){
              layer.msg('操作成功');
            }else if(result.status==0){
              layer.msg('操作失败，请稍候重试');
            }
          },'json');
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.countdown{text-align: center;width: 100%;}
p{color: #fff;}
.time{font-size: 20px;}
a{display: inline-block;background-color: #f3496d;padding: 15px 40px;font-size: 18px;color: #fff;border-radius: 4px;margin-top: 20px;}
</style>
