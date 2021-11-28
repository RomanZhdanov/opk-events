export default {
  addEvent(state, payload) {
    state.events.push(payload)
  },
  removeEvent(state, id) {
    const removeIndex = state.events.map((item) => item.id).indexOf(id)
    state.events = state.events.splice(removeIndex, 1)
  },
  setEvents(state, payload) {
    state.events = payload
  }
}
