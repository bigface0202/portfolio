import { createStore } from "vuex"

import timeLineModule from "@/store/modules/timeline.js"
import skillModule from "@/store/modules/skills.js"
import mediaModule from "@/store/modules/media.js"

export const store = createStore({
  modules: {
    tl: timeLineModule,
    sk: skillModule,
    md: mediaModule
  }
})
