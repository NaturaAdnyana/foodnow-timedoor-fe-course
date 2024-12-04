<template>
  <web-header></web-header>
  <hero-section></hero-section>
  <main class="bg-light">
    <RouterView :key="$route.fullPath" />
  </main>

  <web-footer></web-footer>
</template>

<script setup>
import { RouterView } from 'vue-router'
import HeroSection from '@/components/ui/HeroSection.vue'

import WebHeader from '@/components/header/WebHeader.vue'
import WebFooter from '@/components/footer/WebFooter.vue'
</script>
