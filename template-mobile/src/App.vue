<template>
  <div class="app">
    <topnav></topnav>
    <div style="height:1rem;"></div>
    <banner></banner>
    <part></part>
    <product></product>
  </div>
</template>

<script>
import Topnav from './components/topnav'
import Banner from './components/banner'
import Part from './components/part'
import Product from './components/product'

export default {
  name: 'app',
  components: {
    Topnav,Banner,Part,Product
  }
}
</script>

<style>
*{margin: 0;padding: 0;text-decoration: none;list-style-type: none;}
*:focus{outline: none;}
body{font-size: 12px;}
</style>
