import { createStore } from 'vuex'

import eventsModule from './modules/events/index.js'

const store = createStore({
  modules: {
    events: eventsModule
  }
})

export default store
