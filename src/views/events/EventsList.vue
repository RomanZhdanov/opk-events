<template>
  <div class="d-flex justify-content-between mb-3">
    <h3>Список мероприятий</h3>
    <div>
      <router-link to="/events/create" class="btn btn-outline-primary"
        >Добавить мероприятие</router-link
      >
    </div>
  </div>
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
