<script setup lang="ts">
import { AppHeader } from '@/widgets/layout'
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-100/50">
    <app-header />

    <main>
      <slot />
    </main>
  </div>
</template>
