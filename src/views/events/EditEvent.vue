<template>
  <div v-if="isLoading" class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <event-form
    v-else
    :event="event"
    @save-data="saveData"
    @cancel-form="cancel"
  />
</template>

<script>
import EventForm from '@/components/events/EventForm.vue'
import { getEvent } from '@/firebase'

export default {
  components: {
    EventForm
  },
  data() {
    return {
      event: null,
      isLoading: false
    }
  },
  computed: {
    eventId() {
      return this.$route.params.id
    }
  },
  methods: {
    async loadEvent() {
      this.isLoading = true
      this.event = await getEvent(this.eventId)
      this.isLoading = false
    },
    saveData(data) {
      this.$store.dispatch('events/updateEvent', {
        id: this.eventId,
        data: data
      })
      this.$router.replace('/events')
    },
    cancel() {
      this.$router.replace('/events')
    }
  },
  created() {
    this.loadEvent()
  }
}
</script>
