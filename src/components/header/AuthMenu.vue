<template>
  <li class="nav-item me-1 d-flex flex-column flex-md-row py-5 py-md-0 gap-4">
    <router-link :class="['btn', 'px-4', { 'text-white': !isScrolled }, 'fw-bold']" to="/login"
      >Login</router-link
    >
    <router-link class="btn btn-custom-primary rounded-pill px-4 text-white fw-bold" to="/register"
      >Signup</router-link
    >
  </li>
</template>

<script setup>
defineProps({
  isScrolled: {
    type: Boolean,
    required: true,
  },
})
</script>
