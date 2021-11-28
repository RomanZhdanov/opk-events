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
    <p class="text-danger" v-if="!formIsValid">
      Необходимо заполнить все поля!
    </p>
    <button type="submit" class="btn btn-primary">Добавить</button>
    <button type="button" class="btn btn-default" @click="cancel">
      Отмена
    </button>
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
      payto: '',
      formIsValid: true
    }
  },
  methods: {
    onSubmit() {
      this.formIsValid = true

      if (
        this.name === '' ||
        this.date === null ||
        this.place === '' ||
        this.price === '' ||
        this.payto === ''
      ) {
        this.formIsValid = false
        return
      }

      this.$store.dispatch('events/addNewEvent', {
        name: this.name,
        date: this.date,
        place: this.place,
        price: this.price,
        payto: this.payto
      })

      this.$router.replace('/')
    },
    cancel() {
      this.$router.replace('/')
    }
  }
}
</script>
