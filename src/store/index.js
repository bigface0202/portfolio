import { createStore } from "vuex"

import timeLineModule from "@/store/modules/timeline.js"
import skillModule from "@/store/modules/skills.js"
import mediaModule from "@/store/modules/media.js"
import paperModule from "@/store/modules/papers.js"

export const store = createStore({
  modules: {
    tl: timeLineModule,
    sk: skillModule,
    md: mediaModule,
    pp: paperModule
  }
})
