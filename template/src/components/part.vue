<template>
  <div class="part">
    <div class="container">
    	<div class="left">
    		<div class="item1">
    			<a href="http://www.bftv.com/exchange?src=http%3A%2F%2Fbftv.youdemai.com%2Fbftvp%2Fproduct%2Fsearch%3F%26category%3D2" target="_blank">
    				<div class="shadow"></div>
    			</a>
    		</div>
    		<div class="item2">
    			<a href="http://www.bftv.com/exchange?src=http%3A%2F%2Fbftv.youdemai.com%2Fbftvp%2Fproduct%2Fsearch%3F%26category%3D4" target="_blank">
    				<div class="shadow"></div>
    			</a>
    		</div>
    	</div>
    	<div class="right">
    		<div class="item1">
    			<a href="http://www.bftv.com/exchange?src=http%3A%2F%2Fbftv.youdemai.com%2Fbftvp%2Fproduct%2Fsearch%3F%26category%3D5" target="_blank">
    				<div class="shadow"></div>
    			</a>
    		</div>
    		<div class="item2">
    			<a href="http://www.bftv.com/exchange?src=http%3A%2F%2Fbftv.youdemai.com%2Fbftvp%2Fproduct%2Fsearch%3F%26category%3D1" target="_blank">
    				<div class="shadow"></div>
    			</a>
    		</div>
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
.part{width: 100%;background-color: #fff;padding: 20px 0;}
.container{width: 1132px;margin: 0 auto;position: relative;}
.container:after{content: '';clear: both;display: block;}
.left{float: left;width: 55%;position: relative;box-sizing: border-box;padding-right: 5px;}
.right{float: left;width: 45%;position: relative;box-sizing: border-box;padding-left: 5px;}
.left .item1{width: 100%;height: 390px;margin-bottom: 10px;background-image: url(http://static.bftv.com/bftv_wxl/nianhuo/item1.jpg);background-position: center;background-size: cover;position: relative;}
.left .item2{width: 100%;height: 280px;background-image: url(http://static.bftv.com/bftv_wxl/nianhuo/item3.jpg);background-position: center;background-size: cover;position: relative;}
.right .item1{width: 100%;height: 300px;margin-bottom: 10px;background-image: url(http://static.bftv.com/bftv_wxl/nianhuo/item2.jpg);background-position: center;background-size: cover;position: relative;}
.right .item2{width: 100%;height: 370px;background-image: url(http://static.bftv.com/bftv_wxl/nianhuo/item4.jpg);background-position: center;background-size: cover;position: relative;}
.shadow{width: 100%;height: 100%;background-color: rgba(140,0,0,0.25);display: none;}
.left div:hover .shadow{display: block;}
.right div:hover .shadow{display: block;}
</style>
