<script setup lang="ts">
import { AppButton } from '@/shared/ui'
import { push } from 'notivue'
</script>

<template>
  <header class="flex justify-between p-4">
    <h1 @click="push.success('qewqeqe')">Магазинчик</h1>

    <nav class="flex items-center gap-x-5">
      <app-button variant="primary">Войти</app-button>
      <app-button variant="secondary">Регистрация</app-button>
    </nav>
  </header>
</template>
