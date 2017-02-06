<template>
  <div v-on:click="getHbao" class="hbao">
   
  </div>
</template>

<script>
export default {
  name: 'hbao',
  props: ['marketing_id'],
  methods:{
    getHbao(){
      $.post('/user_join_marketing',{'marketing_id': this.marketing_id},function(result){
        if(result.status == -1){
          alert('请先登录');
          window.location.href="/login?callback="+window.location.href;
        }else if(result.status==1){
          layer.msg('操作成功');
        }else if(result.status==0){
          layer.alert('您已经参与过该活动');
        }
      },'json');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hbao{width: 1.5rem;height: 0.6rem;cursor: pointer;}
</style>
