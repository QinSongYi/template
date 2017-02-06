<template>
  <div v-bind:style="{height:height+'px',backgroundImage:'url('+bgsrc+')',maxWidth:maxw+'px'}" class="banner">
  </div>
</template>

<script>
export default {
  name: 'banner',
  props: ['height','bgsrc','maxw']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner{width: 100%;position: relative;background-position: center;background-size: cover;margin: 0 auto;}
</style>
