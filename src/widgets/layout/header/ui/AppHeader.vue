<script setup lang="ts">
import { AppButton } from '@/shared/ui'
import { useLogout } from '@/entities/account'
import { useAuth } from '@/shared/composables'
import { headerVariants } from './header.variants'

const { mutateAsync: logout } = useLogout()
const { isAuth } = useAuth()

const { header, container, logo, logoText, nav, tokenBadge } = headerVariants()
</script>

<template>
  <header :class="header()">
    <div :class="container()">
      <router-link
        to="/"
        :class="logo()"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="32"
            height="32"
            rx="8"
            fill="currentColor"
            opacity="0.1"
          />
          <path
            d="M16 8L8 12V20C8 24 16 28 16 28C16 28 24 24 24 20V12L16 8Z"
            fill="currentColor"
          />
        </svg>
        <h1 :class="logoText()">
          Магазинчик
        </h1>
      </router-link>

      <nav :class="nav()">
        <span
          v-if="isAuth"
          :class="tokenBadge()"
        > Авторизован </span>
        <router-link
          v-if="isAuth"
          to="/cart"
        >
          <app-button
            variant="secondary"
            size="sm"
          >
            Корзина
          </app-button>
        </router-link>
        <router-link
          v-if="!isAuth"
          to="/login"
        >
          <app-button
            variant="ghost"
            size="sm"
          >
            Войти
          </app-button>
        </router-link>
        <router-link
          v-if="!isAuth"
          to="/register"
        >
          <app-button
            variant="primary"
            size="sm"
          >
            Регистрация
          </app-button>
        </router-link>
        <app-button
          v-if="isAuth"
          variant="danger"
          size="sm"
          @click="logout"
        >
          Выйти
        </app-button>
      </nav>
    </div>
  </header>
</template>
