<template>
  <div>
          <div v-for="tv in tvs" class="item">
              <div class="left">
                  <img v-bind:src="'http://img.bftv.com/'+tv.image">
              </div>
              <div class="right">
                  <p class="name">{{tv.name}}</p>
                  <p class="slogan">{{tv.slogan}}</p>
                  <p class="hint">{{tv.hint}}</p>
                  <p class="price">¥{{tv.price}}</p>
                  <a class="link" v-bind:href=" 'http://www.bftv.com/'+tv.url">立即抢购</a>
              </div>
          </div>
  </div>
</template>

<script>
export default {
  name: 'product',
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
.item{width: 100%;position: relative;box-sizing: border-box;padding: 20px;background-color: #fff;margin-bottom: 20px;}
.item:after{content: '';clear: both;display: block;}
.left{float: left;width: 50%;}
.left img{width: 100%;}
.right{float: left;width: 50%;box-sizing: border-box;padding: 30px 0 0 20px;}
p.name{font-size: 22px;margin-bottom: 10px;}
p.slogan{margin-bottom: 10px;}
p.hint{color: deeppink;margin-bottom: 60px;}
p.price{color: #FF7A2C;font-size: 30px;margin-bottom: 20px;}
.link{background-color: #D8393A;display: inline-block;font-size: 20px;padding: 15px 60px;color: #fff;border-radius: 8px;}
</style>
