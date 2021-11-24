<template>
  <h2>Events list</h2>
  <router-link to="/events/create" class="btn btn-primary"
    >Добавить мероприятие</router-link
  >
  <ul>
    <li v-for="event in events" :key="event.id">
      {{ event.name }}
    </li>
  </ul>
</template>

<script>
export default {
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
