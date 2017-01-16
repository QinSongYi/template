<template>
  <div v-bind:style="{height:height+'rem',backgroundImage:'url('+bgsrc+')'}" class="banner">
  </div>
</template>

<script>
export default {
  name: 'banner',
  props: ['height','bgsrc']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner{width: 100%;position: relative;background-position: center;background-size: cover;}
</style>
