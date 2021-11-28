<template>
  <event-form
    buttonText="Добавить"
    @save-data="saveData"
    @cancel-form="cancel"
  />
</template>

<script>
import EventForm from '@/components/events/EventForm.vue'

export default {
  components: {
    EventForm
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('events/addNewEvent', data)
      this.$router.replace('/events')
    },
    cancel() {
      this.$router.replace('/events')
    }
  }
}
</script>
