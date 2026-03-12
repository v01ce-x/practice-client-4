<script setup lang="ts">
import { RegisterForm } from '@/features/auth'
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 flex items-center justify-center p-8 relative overflow-hidden">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.15),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(22,163,74,0.15),transparent_50%)]"></div>
    <register-form class="relative z-10" />
  </div>
</template>

<style scoped></style>
