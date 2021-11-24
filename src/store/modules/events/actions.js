import { useLoadEvents, createEvent } from '@/firebase'

export default {
  loadEvents(context) {
    const events = useLoadEvents()
    context.commit('setEvents', events)
  },
  async addNewEvent(context, data) {
    await createEvent(data)
    context.commit('addEvent', data)
  }
}
