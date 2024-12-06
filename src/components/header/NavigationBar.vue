<template>
  <nav
    :class="['navbar', 'navbar-expand-lg', 'fixed-top', 'w-100', { 'navbar-custom': isScrolled }]"
  >
    <div class="container-md px-4">
      <router-link class="navbar-brand fw-bold text-success" to="/">
        <img src="@/assets/logo.svg" width="150px" class="pe-2" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span :class="['navbar-toggler-icon', { 'navbar-dark': !isScrolled }]"></span>
      </button>
      <div class="collapse navbar-collapse my-2" id="navbarSupportedContent">
        <ul class="navbar-nav d-flex justify-content-center align-items-center w-100">
          <li class="nav-item mx-3">
            <router-link class="nav-link active text-white fw-bold" aria-current="page" to="/"
              >Home</router-link
            >
          </li>
          <li class="nav-item mx-3">
            <router-link class="nav-link text-white fw-bold" aria-current="page" to="/"
              >Order</router-link
            >
          </li>
          <li class="nav-item mx-3">
            <router-link class="nav-link text-white fw-bold" aria-current="page" to="/"
              >About</router-link
            >
          </li>
          <li class="nav-item mx-3">
            <router-link class="nav-link text-white fw-bold" aria-current="page" to="/"
              >Blog</router-link
            >
          </li>
          <li class="nav-item mx-3">
            <router-link class="nav-link text-white fw-bold" aria-current="page" to="/"
              >Contact</router-link
            >
          </li>
        </ul>
        <ul class="navbar-nav">
          <component :is="components[menuComponent]" :isScrolled="isScrolled"></component>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import AuthMenu from './AuthMenu.vue'
// import ProfileMenu from './ProfileMenu.vue'

import { onMounted, onUnmounted, ref } from 'vue'
// import { useStore } from 'vuex'

const menuComponent = ref('auth-menu')
// const store = useStore()

const isScrolled = ref(false)

const components = {
  'auth-menu': AuthMenu,
  // 'profile-menu': ProfileMenu,
}

// const getToken = computed(() => {
//   return store.state.auth.token
// })

// if (!getToken.value) {
menuComponent.value = 'auth-menu'
// } else {
//   menuComponent.value = 'profile-menu'
// }

// watch(getToken, (newValue) => {
//   if (!newValue) {
//     menuComponent.value = 'auth-menu'
//   } else {
//     menuComponent.value = 'profile-menu'
//   }
// })

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar-custom {
  background-color: #f8f8f6;
}
/* .navbar-custom ul li a {
  color: black !important;
} */
.navbar-custom div .navbar-nav .nav-item a {
  color: black !important;
}
</style>
