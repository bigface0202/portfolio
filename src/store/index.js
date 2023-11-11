// import Vue from 'vue'
// import Vuex from 'vuex'
import { createStore } from 'vuex'

import timeLineModule from '@/store/modules/timeline.js'

// Vue.use(Vuex)

export const store = createStore({
  modules: {
    tl: timeLineModule
  }
})
