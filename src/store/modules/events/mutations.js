export default {
  addEvent(state, payload) {
    state.events.push(payload)
  },
  setEvents(state, payload) {
    state.events = payload
  }
}
