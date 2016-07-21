// https://forum.vuejs.org/topic/4399/vue-2-0-vue-warn-failed-to-mount-component-template-or-render-function-not-defined-found-in-root-instance/3
// import Vue from 'vue'
import Vue from 'vue/dist/vue.js'

import App from './views/App'

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
