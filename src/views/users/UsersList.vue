<template>
  <UserCreate />
  <UserList />
</template>

<script>
import UserCreate from '@/components/users/UserCreate.vue'
import UserList from '@/components/users/UserList.vue'

export default {
  components: {
    UserCreate,
    UserList
  }
}
</script>
