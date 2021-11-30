<template>
  <div class="container">
    <header
      class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"
    >
      <a
        href="/"
        class="
          d-flex
          align-items-center
          mb-3 mb-md-0
          me-md-auto
          text-dark text-decoration-none
        "
      >
        <svg class="bi me-2" width="40" height="32">
          <use xlink:href="#bootstrap" />
        </svg>
        <span class="fs-4">Обстановка по кайфу</span>
      </a>

      <ul class="nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/events">Мероприятия</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/users">Пользователи</router-link>
        </li>
      </ul>
    </header>
  </div>
</template>
