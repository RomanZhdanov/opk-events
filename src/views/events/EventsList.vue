<template>
  <h2>Events list</h2>
  <router-link to="/events/create" class="btn btn-primary"
    >Добавить мероприятие</router-link
  >
  <events-table :events="events" />
</template>

<script>
import EventsTable from '@/components/events/EventsTable.vue'

export default {
  components: {
    EventsTable
  },
  created() {
    this.loadEvents()
  },
  methods: {
    async loadEvents() {
      await this.$store.dispatch('events/loadEvents')
    }
  },
  computed: {
    events() {
      return this.$store.getters['events/events']
    }
  }
}
</script>
