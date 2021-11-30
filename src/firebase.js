import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import { ref, onUnmounted } from 'vue'

const config = {
  apiKey: 'AIzaSyB4b7jC2319GLLZTBbo7Myscmk5PNMcaZY',
  authDomain: 'opk-events.firebaseapp.com',
  projectId: 'opk-events',
  storageBucket: 'opk-events.appspot.com',
  messagingSenderId: '820025148928',
  appId: '1:820025148928:web:6289fe59a1e086131c3ae5'
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const usersCollection = db.collection('users')
const eventsCollection = db.collection('events')

export const createUser = (user) => {
  return usersCollection.add(user)
}

export const getUser = async (id) => {
  const user = await usersCollection.doc(id).get()
  return user.exists ? user.data() : null
}

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user)
}

export const deleteUser = (id) => {
  return usersCollection.doc(id).delete()
}

export const useLoadUsers = () => {
  const users = ref([])
  const close = usersCollection.onSnapshot((snapshot) => {
    users.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return users
}

export const createEvent = (event) => {
  return eventsCollection.add(event)
}

export const getEvent = async (id) => {
  const event = await eventsCollection.doc(id).get()
  return event.exists ? event.data() : null
}

export const updateEvent = (id, event) => {
  return eventsCollection.doc(id).update(event)
}

export const deleteEvent = (id) => {
  return eventsCollection.doc(id).delete()
}

export const useLoadEvents = () => {
  const events = ref([])
  const close = eventsCollection
    .orderBy('date', 'desc')
    .onSnapshot((snapshot) => {
      events.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    })
  onUnmounted(close)
  return events
}
