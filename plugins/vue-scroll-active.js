import Vue from 'vue'
import VueScrollactive from 'vue-scrollactive'

Vue.use(VueScrollactive, {
  activeClass: {
    type: String,
    default: 'is-active'
  },
  alwaysTrack: {
    type: Boolean,
    default: true
  }
})
