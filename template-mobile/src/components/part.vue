<template>
  <div class="part">
    	<div class="left">
    		<div class="item1">
    			<a href=" http://www.bftv.com/exchange?src=http%3A%2F%2Fm.bftv.youdemai.com%2Fbftvm%2Fbrand%2Flist%3Fcategory%3D2">
    			</a>
    		</div>
    		<div class="item2">
    			<a href="http://www.bftv.com/exchange?src=http%3A%2F%2Fm.bftv.youdemai.com%2Fbftvm%2Fbrand%2Flist%3Fcategory%3D4">
    			</a>
    		</div>
    	</div>
    	<div class="right">
    		<div class="item1">
    			<a href="http://www.bftv.com/exchange?src=http%3A%2F%2Fm.bftv.youdemai.com%2Fbftvm%2Fbrand%2Flist%3Fcategory%3D5">
    			</a>
    		</div>
    		<div class="item2">
    			<a href="http://www.bftv.com/exchange?src=http%3A%2F%2Fm.bftv.youdemai.com%2Fbftvm%2Fbrand%2Flist%3Fcategory%3D1">
    			</a>
    		</div>
    	</div>
  </div>
</template>

<script>
export default {
  name: 'part'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.part a{width: 100%;height: 100%;display: inline-block;}
.part{width: 100%;background-color: #fff;padding: 0.24rem;position: relative;box-sizing: border-box;}
.part:after{content: '';clear: both;display: block;}
.left{float: left;width: 55%;position: relative;box-sizing: border-box;padding-right: 0.12rem;}
.right{float: left;width: 45%;position: relative;box-sizing: border-box;padding-left: 0.12rem;}
.left .item1{width: 100%;height: 2.45rem;margin-bottom: 0.24rem;background-image: url(http://static.bftv.com/bftv_wxl/nianhuo-mobile/item1.jpg);background-position: center;background-size: cover;position: relative;}
.left .item2{width: 100%;height: 1.75rem;background-image: url(http://static.bftv.com/bftv_wxl/nianhuo-mobile/item3.jpg);background-position: center;background-size: cover;position: relative;}
.right .item1{width: 100%;height: 1.9rem;margin-bottom: 0.24rem;background-image: url(http://static.bftv.com/bftv_wxl/nianhuo-mobile/item2.jpg);background-position: center;background-size: cover;position: relative;}
.right .item2{width: 100%;height: 2.3rem;background-image: url(http://static.bftv.com/bftv_wxl/nianhuo-mobile/item4.jpg);background-position: center;background-size: cover;position: relative;}
.left div:hover .shadow{display: block;}
.right div:hover .shadow{display: block;}
</style>
