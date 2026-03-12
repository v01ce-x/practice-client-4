<script setup lang="ts">
import { useForm } from 'vee-validate'
import { type LoginFormValues, loginSchema } from '../lib/validation.ts'
import { FormField } from '@/shared/ui'
import { useLogin } from '@/entities/account'

const { defineField, handleSubmit, errors } = useForm<LoginFormValues>({
  validationSchema: loginSchema,
})

const { mutateAsync, isLoading } = useLogin()

const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')

const userRegister = handleSubmit((values) => {
  mutateAsync({
    ...values,
  })
})
</script>

<template>
  <form @submit.prevent="userRegister">
    <form-field
      v-model="email"
      v-bind="emailAttrs"
      name="user-email"
      type="email"
      placeholder="Введите почту"
      :error="errors.email"
    />

    <form-field
      v-model="password"
      v-bind="passwordAttrs"
      name="user-password"
      type="password"
      placeholder="Введите пароль"
      :error="errors.password"
    />

    <button :disabled="isLoading">Войти</button>
  </form>
</template>

<style scoped></style>
