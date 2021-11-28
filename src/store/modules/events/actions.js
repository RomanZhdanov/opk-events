import {
  useLoadEvents,
  createEvent,
  updateEvent,
  deleteEvent
} from '@/firebase'

export default {
  loadEvents(context) {
    const events = useLoadEvents()
    context.commit('setEvents', events)
  },
  async addNewEvent(_, data) {
    await createEvent(data)
    // context.commit('addEvent', data)
  },
  async updateEvent(_, payload) {
    await updateEvent(payload.id, payload.data)
  },
  deleteEvent(context, id) {
    deleteEvent(id)
    context.commit('removeEvent', id)
  }
}
