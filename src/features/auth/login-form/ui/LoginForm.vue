<script setup lang="ts">
import { useForm } from 'vee-validate'
import { type LoginFormValues, loginSchema } from '../lib/validation.ts'
import { FormField, AppButton } from '@/shared/ui'
import { useLogin } from '@/entities/account'
import { formVariants } from '@/shared/ui/form/form.variants'

const { defineField, handleSubmit, errors } = useForm<LoginFormValues>({
  validationSchema: loginSchema,
})

const { mutateAsync, isLoading } = useLogin()

const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')

const userLogin = handleSubmit((values) => {
  mutateAsync({
    ...values,
  })
})

const styles = formVariants()
</script>

<template>
  <div :class="styles.container()">
    <h2 :class="styles.title()">Вход</h2>
    <p :class="styles.subtitle()">Войдите в свой аккаунт</p>

    <form @submit.prevent="userLogin" :class="styles.form()">
      <form-field
        v-model="email"
        v-bind="emailAttrs"
        name="user-email"
        type="email"
        placeholder="Email"
        :error="errors.email"
      />

      <form-field
        v-model="password"
        v-bind="passwordAttrs"
        name="user-password"
        type="password"
        placeholder="Пароль"
        :error="errors.password"
      />

      <app-button type="submit" :disabled="isLoading" variant="primary" size="lg" class="w-full mt-2">
        {{ isLoading ? 'Вход...' : 'Войти' }}
      </app-button>
    </form>

    <p :class="styles.footer()">
      Нет аккаунта?
      <router-link to="/register" :class="styles.link()">Зарегистрироваться</router-link>
    </p>
  </div>
</template>

<style scoped></style>
