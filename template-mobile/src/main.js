// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Appexchange from './App-exchange'
import Appnhcar from './App-nhcar'
// import Appbudayang from './App-budayang'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Appnhcar/>',
  components: { Appnhcar }
})
