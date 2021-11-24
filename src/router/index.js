import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import EventsList from '@/views/events/EventsList.vue'
import EventDetails from '@/views/events/EventDetails.vue'
import CreateEvent from '@/views/events/CreateEvent.vue'
import UsersList from '@/views/users/UsersList.vue'
import EditUser from '@/views/users/EditUser.vue'

const routes = [
  {
    path: '/',
    redirect: '/events',
    component: Home
  },
  {
    path: '/events',
    component: EventsList
  },
  {
    path: '/events/:id',
    component: EventDetails,
    props: true
  },
  {
    path: '/events/create',
    component: CreateEvent
  },
  {
    path: '/users',
    name: 'Users',
    component: UsersList
  },
  {
    path: '/users/edit/:id',
    name: 'EditUser',
    component: EditUser
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active'
})

export default router
