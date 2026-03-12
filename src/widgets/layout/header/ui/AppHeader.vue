<script setup lang="ts">
import { AppButton } from '@/shared/ui'
import { useLogout } from '@/entities/account'
import { useAuth } from '@/shared/composables'

const { mutateAsync: logout } = useLogout()
const { token } = useAuth()

</script>

<template>
  <header class="flex justify-between p-4">
    <router-link to="/">
      <h1>Магазинчик</h1>
      {{ token }}
    </router-link>

    <nav class="flex items-center gap-x-5">
      <router-link to="/login">
        <app-button variant="primary">Войти</app-button>
      </router-link>
      <router-link to="/register">
        <app-button variant="secondary">Регистрация</app-button>
      </router-link>
      <app-button @click="logout" variant="primary">Выйти</app-button>
    </nav>
  </header>
</template>
