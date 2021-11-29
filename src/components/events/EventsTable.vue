<template>
  <table class="table m-0">
    <thead>
      <tr>
        <th scope="col">Название</th>
        <th scope="col">Место</th>
        <th scope="col">Действия</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="{ id, name, place } in events" :key="id">
        <td>
          <router-link :to="`/events/${id}`">{{ name }}</router-link>
        </td>
        <td>{{ place }}</td>
        <td>
          <router-link :to="`/events/edit/${id}`">
            <button class="btn btn-primary btn-sm me-2">Edit</button>
          </router-link>
          <button class="btn btn-danger btn-sm" @click="deleteEvent(id)">
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ['events'],
  methods: {
    deleteEvent(id) {
      this.$store.dispatch('events/deleteEvent', id)
    }
  }
}
</script>
