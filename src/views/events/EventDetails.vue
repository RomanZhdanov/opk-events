<template>
  <h3>{{ event.name }}</h3>
  <p><strong>Когда:</strong> {{ event.date }}</p>
  <p><strong>Где:</strong> {{ event.place }}</p>
  <p><strong>Цена:</strong> {{ event.price }}</p>
  <p><strong>Куда переводить:</strong> {{ event.payto }}</p>
  <button @click="backToList" class="btn btn-link">К списку мероприятий</button>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getEvent } from '@/firebase'

export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    const eventId = computed(() => route.params.id)

    const event = reactive({
      name: '',
      date: '',
      place: '',
      price: '',
      payto: ''
    })
    onMounted(async () => {
      const ev = await getEvent(eventId.value)
      event.name = ev.name
      event.date = ev.date
      event.place = ev.place
      event.price = ev.price
      event.payto = ev.payto
    })

    const backToList = () => {
      router.push('/events')
    }

    return { event, backToList }
  }
}
</script>
