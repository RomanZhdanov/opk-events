<template>
  <form @submit.prevent="onSubmit">
    <div class="mb-3" :class="{ 'text-danger': !name.isValid }">
      <label for="name" class="form-label">Название</label>
      <input
        type="text"
        class="form-control"
        id="name"
        v-model.trim="name.val"
        @blur="clearValidity('name')"
      />
      <div v-if="!name.isValid" class="form-text">
        Необходимо указать название мероприятия.
      </div>
    </div>
    <div class="mb-3" :class="{ 'text-danger': !date.isValid }">
      <label for="date" class="form-label">Когда</label>
      <input
        type="date"
        class="form-control"
        id="date"
        v-model="date.val"
        @blur="clearValidity('date')"
      />
      <div v-if="!date.isValid" class="form-text">
        Необходимо указать дату мероприятия.
      </div>
    </div>
    <div class="mb-3" :class="{ 'text-danger': !place.isValid }">
      <label for="place" class="form-label">Где</label>
      <input
        type="text"
        class="form-control"
        id="place"
        v-model.trim="place.val"
        @blur="clearValidity('place')"
      />
      <div v-if="!place.isValid" class="form-text">
        Необходимо указать место проведения мероприятия.
      </div>
    </div>
    <div class="mb-3" :class="{ 'text-danger': !price.isValid }">
      <label for="price" class="form-label">Цена</label>
      <input
        type="text"
        class="form-control"
        id="price"
        v-model.trim="price.val"
        @blur="clearValidity('price')"
      />
      <div v-if="!price.isValid" class="form-text">
        Необходимо указать стоимость мероприятия.
      </div>
    </div>
    <div class="mb-3" :class="{ 'text-danger': !payto.isValid }">
      <label for="payto" class="form-label">Куда переводить</label>
      <input
        type="text"
        class="form-control"
        id="payto"
        v-model.trim="payto.val"
        @blur="clearValidity('payto')"
      />
      <div v-if="!payto.isValid" class="form-text">
        Необходимо указать кому переводить деньги.
      </div>
    </div>
    <button type="submit" class="btn btn-primary">{{ buttonText }}</button>
    <button type="button" class="btn btn-default" @click="cancel">
      Отмена
    </button>
  </form>
</template>

<script>
export default {
  emits: ['save-data', 'cancel-form'],
  props: {
    event: {
      type: Object,
      default: null
    },
    buttonText: {
      type: String,
      default: 'Сохранить'
    }
  },
  data() {
    return {
      name: {
        val: '',
        isValid: true
      },
      date: {
        val: null,
        isValid: true
      },
      place: {
        val: '',
        isValid: true
      },
      price: {
        val: '',
        isValid: true
      },
      payto: {
        val: '',
        isValid: true
      },
      formIsValid: true
    }
  },
  created() {
    if (this.event) {
      this.name.val = this.event.name
      this.date.val = this.event.date
      this.place.val = this.event.place
      this.price.val = this.event.price
      this.payto.val = this.event.payto
    }
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true
    },
    validateForm() {
      this.formIsValid = true

      if (this.name.val === '') {
        this.name.isValid = false
        this.formIsValid = false
      }
      if (this.date.val === null) {
        this.date.isValid = false
        this.formIsValid = false
      }
      if (this.place.val === '') {
        this.place.isValid = false
        this.formIsValid = false
      }
      if (this.price.val === '') {
        this.price.isValid = false
        this.formIsValid = false
      }
      if (this.payto.val === '') {
        this.payto.isValid = false
        this.formIsValid = false
      }
    },
    onSubmit() {
      this.validateForm()

      if (!this.formIsValid) {
        return
      }

      const formData = {
        name: this.name.val,
        date: this.date.val,
        place: this.place.val,
        price: this.price.val,
        payto: this.payto.val
      }

      this.$emit('save-data', formData)
    },
    cancel() {
      this.$emit('cancel-form')
    }
  }
}
</script>
