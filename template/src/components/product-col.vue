<template>
  <div class="product-col">
    <div v-for="(tv,index) in tvs" class="item" v-bind:style="{width:100/ids.split(',').length+'%'}">
      <div>
          <img v-bind:src="'http://img.bftv.com/'+tv.image">
          <p class="name">{{tv.name}}</p>
          <p class="slogan">{{tv.slogan}}</p>
          <p class="hint">{{hint ? hint.split(';')[index] : tv.hint}}</p>
          <p class="price">¥{{parseInt(tv.price)}}<small>{{parseInt(tv.hardware_price)!=0?'日常价：¥'+parseInt(tv.hardware_price):null}}</small></p>
          <a class="link" v-bind:href=" tv.is_sale == 1 ? 'http://www.bftv.com/'+tv.url : 'http://www.bftv.com/appointments' ">{{tv.is_sale == 1 ? '立即抢购' : '立即预约'}}</a>
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
  props: ['ids','hint'],
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
.product-col{position: relative;margin: 0 -10px;}
.product-col:after{content: '';clear: both;display: block;}
.item{position: relative;box-sizing: border-box;padding: 0px 10px;float: left;margin-bottom: 20px;}
.item > div{width: 100%;background-color: #fff;box-sizing: border-box;padding: 20px;text-align: center;}
img{width: 100%;}
p.name{font-size: 20px;margin-bottom: 10px;height: 20px;}
p.slogan{margin-bottom: 10px;height: 20px;font-size: 14px;}
p.hint{color: deeppink;margin-bottom: 10px;height: 20px;font-size: 14px;}
p.price{color: #FF7A2C;font-size: 28px;margin-bottom: 20px;height: 20px;}
.link{background-color: #D8393A;display: inline-block;font-size: 20px;padding: 15px 60px;color: #fff;border-radius: 8px;}
small{text-decoration:line-through;font-size: 14px;color: #ccc;}
</style>
