import { createStore } from 'vuex'

import timeLineModule from '@/store/modules/timeline.js'
import skillModule from '@/store/modules/skills.js'

export const store = createStore({
  modules: {
    tl: timeLineModule,
    sk: skillModule
  }
})
