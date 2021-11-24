<template>
  <form @submit.prevent="onSubmit">
    <div class="mb-3">
      <label for="name" class="form-label">Название</label>
      <input type="text" class="form-control" id="name" v-model="name" />
    </div>
    <div class="mb-3">
      <label for="date" class="form-label">Когда</label>
      <input type="date" class="form-control" id="date" v-model="date" />
    </div>
    <div class="mb-3">
      <label for="place" class="form-label">Где</label>
      <input type="text" class="form-control" id="place" v-model="place" />
    </div>
    <div class="mb-3">
      <label for="price" class="form-label">Цена</label>
      <input type="text" class="form-control" id="price" v-model="price" />
    </div>
    <div class="mb-3">
      <label for="payto" class="form-label">Куда переводить</label>
      <input type="text" class="form-control" id="payto" v-model="payto" />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      date: null,
      place: '',
      price: '',
      payto: ''
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('events/addNewEvent', {
        name: this.name,
        date: this.date,
        place: this.place,
        price: this.price,
        payto: this.payto
      })
    }
  }
}
</script>
