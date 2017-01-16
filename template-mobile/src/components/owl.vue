<template>
  <div>
    <div class="owl-carousel owl-theme">
      <div v-for="tv in tvs" class="item">
        <div>
            <img v-bind:src="'http://img.bftv.com/'+tv.image">
            <p class="name">{{tv.name}}</p>
            <p class="slogan">{{tv.slogan}}</p>
            <p class="hint">{{tv.hint}}</p>
            <p class="price">¥{{tv.price}}</p>
            <a class="link" v-bind:href=" 'http://www.bftv.com/'+tv.url">立即抢购</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'owl',
  data(){
    return{
        products:'',
        tvs:[]
    }
  },
  props: ['ids','dotsEach'],
  mounted(){
    var idsArr = this.ids.split(',');
    $.getJSON('/ajax/products/allStatus?ids='+this.ids,function(result){
        this.products = result.data;
        idsArr.map(function(id){
          if(this.products[id]){
            this.tvs.push(this.products[id]);
          }
        }.bind(this));
        setTimeout(function(){
          $('.owl-carousel').owlCarousel({
            loop: true,
            items: 1,
            autoplay: false,
            autoplayTimeout: 3000,
            nav: true,
            navText:['<','>'],
            dotsEach:this.dotsEach
          });
        }.bind(this),200);
    }.bind(this));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item > div{width: 100%;background-color: #fff;box-sizing: border-box;padding: 0.24rem;text-align: center;}
img{width: 100%;}
p.name{font-size: 0.3rem;margin-bottom: 0.12rem;}
p.slogan{font-size: 0.24rem;margin-bottom: 0.12rem;color: #737373;}
p.hint{color: deeppink;margin-bottom: 0.12rem;font-size: 0.24rem;}
p.price{color: #FF7A2C;font-size: 0.32rem;margin-bottom: 0.12rem;}
.link{background-color: #D8393A;display: inline-block;font-size: 0.28rem;color: #fff;border-radius: 0.08rem;width: 2rem;height: 0.6rem;line-height: 0.6rem;}
</style>
