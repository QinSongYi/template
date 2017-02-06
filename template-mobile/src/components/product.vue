<template>
  <div class="product-col">
    <div v-for="tv in tvs" class="item" v-bind:style="{width:100/ids.split(',').length+'%'}">
      <div>
          <img v-bind:src="'http://img.bftv.com/'+tv.image">
          <p class="name">{{tv.name}}</p>
          <p class="slogan">{{tv.slogan}}</p>
          <p class="hint">{{tv.hint}}</p>
          <p class="price">¥{{parseInt(tv.price)}}</p>
          <a class="link" v-bind:href=" 'http://www.bftv.com/'+tv.url">{{tv.is_sale == 1 ? '立即抢购' : '立即预约'}}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product-col',
  data(){
    return{
        products:'',
        tvs:[]
    }
  },
  props: ['ids'],
  mounted(){
    var idsArr = this.ids.split(',');
    $.getJSON('/ajax/products/allStatus?ids='+this.ids,function(result){
        this.products = result.data;
        idsArr.map(function(id){
          if(this.products[id]){
            this.tvs.push(this.products[id]);
          }
        }.bind(this));
    }.bind(this));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-col:after{content: '';clear: both;display: block;}
.item{position: relative;box-sizing: border-box;padding: 0px 0.06rem;float: left;margin-bottom: 0.24rem;}
.item > div{width: 100%;background-color: #fff;box-sizing: border-box;padding: 0.24rem;text-align: center;}
img{width: 100%;}
p.name{font-size: 0.3rem;height: 0.6rem;line-height: 0.3rem;}
p.slogan{font-size: 0.24rem;color: #737373;height: 0.48rem;line-height: 0.24rem;}
p.hint{color: deeppink;font-size: 0.24rem;height: 0.48rem;line-height: 0.24rem;}
p.price{color: #FF7A2C;font-size: 0.32rem;margin-bottom: 0.12rem;}
.link{background-color: #D8393A;display: inline-block;font-size: 0.28rem;color: #fff;border-radius: 0.08rem;width: 2rem;height: 0.6rem;line-height: 0.6rem;}
</style>
